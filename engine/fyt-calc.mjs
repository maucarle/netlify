// Fuel Your Trek (FYT) — motore di calcolo
// JS puro, zero dipendenze. Implementa docs/formule-calcolo.md.
// I parametri sono TARABILI e vanno validati con un nutrizionista prima del lancio.

// ---------------------------------------------------------------------------
// Dati categorie (coerenti con docs/categorie-alimentari.md). Valori indicativi.
// densita in g/L (proxy del volume nello zaino).
// ---------------------------------------------------------------------------
export const CATEGORIES = {
  carbo_rapidi:   { label: "Carboidrati rapidi",   kcal100: 340, densita: 750 },
  carbo_lenti:    { label: "Carboidrati lenti",    kcal100: 370, densita: 500 },
  grassi_densi:   { label: "Grassi calorico-densi",kcal100: 580, densita: 850 },
  proteine:       { label: "Proteine",             kcal100: 320, densita: 550 },
  liofilizzati:   { label: "Pasti liofilizzati",   kcal100: 400, densita: 200 },
  snack_salati:   { label: "Snack salati / sali",  kcal100: 480, densita: 350 },
};

// Distribuzione kcal tra categorie di default (somma = 1).
export const DEFAULT_CATEGORY_MIX = {
  grassi_densi: 0.30,
  carbo_lenti:  0.30,
  carbo_rapidi: 0.20,
  proteine:     0.15,
  liofilizzati: 0.05,
};

// Fattori terreno η mappati ai 3 livelli UI.
export const TERRAIN_FACTOR = { battuto: 1.0, misto: 1.2, impervio: 1.5 };

// Ripartizione macro di default (sforzo prolungato).
export const MACRO_SPLIT = { carboidrati: 0.55, grassi: 0.30, proteine: 0.15 };
const MACRO_KCAL_PER_G = { carboidrati: 4, grassi: 9, proteine: 4 };

// ---------------------------------------------------------------------------
// 1. BMR — Mifflin-St Jeor (kcal/giorno)
// ---------------------------------------------------------------------------
export function mifflinBMR({ sesso, peso, altezza, eta }) {
  const s = sesso === "U" || sesso === "M" || sesso === "uomo" ? 5 : -161;
  return 10 * peso + 6.25 * altezza - 5 * eta + s;
}

// ---------------------------------------------------------------------------
// 2. Pandolf — potenza metabolica in marcia (watt)
//    W=peso corpo, L=zaino (kg), v=velocita (m/s), G=pendenza %, eta=fattore terreno
// ---------------------------------------------------------------------------
export function pandolfWatts({ W, L, v, G, eta }) {
  const standing = 1.5 * W;
  const load = 2 * (W + L) * Math.pow(L / W, 2);
  const walk = eta * (W + L) * (1.5 * v * v + 0.35 * v * G);
  return standing + load + walk;
}

// 2.2 Correzione discesa — Santee et al. (2003), per G < 0.
export function santeeCorrection({ W, L, v, G, eta }) {
  const cf =
    eta *
    ((G * (W + L) * v) / 3.5 - ((W + L) * Math.pow(G + 6, 2)) / W + (25 - v * v));
  return cf;
}

// 2.3 watt -> kcal su una durata in minuti.
export function wattsToKcal(watts, minuti) {
  return watts * 0.01433 * minuti;
}

// ---------------------------------------------------------------------------
// 2.4 Stima velocita, pendenza e tempo dal percorso.
//   - pendenza media G dal rapporto dislivello/distanza
//   - velocita: passo dato dall'utente, oppure stima tipo Tobler ridotta
//   - tempo: regola di Naismith (4 km/h piano + 1 min ogni 10 m di salita)
// ---------------------------------------------------------------------------
export function estimateSpeedGrade({ distanzaKm, dislivelloM, giorni = 1, passoMinKm }) {
  const distanzaM = distanzaKm * 1000;
  const G = distanzaM > 0 ? (dislivelloM / distanzaM) * 100 : 0;

  // Tempo di marcia totale (minuti) — Naismith: 12 min/km in piano + 6 min/100 m salita.
  const minutiNaismith = distanzaKm * 12 + (dislivelloM / 100) * 6;
  // Se l'utente fornisce il passo, usalo per il tempo in piano.
  const minutiPiano = passoMinKm ? distanzaKm * passoMinKm : distanzaKm * 12;
  const minutiTotali = passoMinKm
    ? minutiPiano + (dislivelloM / 100) * 6
    : minutiNaismith;

  const v = distanzaM / (minutiTotali * 60); // m/s medi
  return { v, G, minutiTotali, minutiGiorno: minutiTotali / giorni };
}

// ---------------------------------------------------------------------------
// 3. Fabbisogno calorico giornaliero
// ---------------------------------------------------------------------------
export function dailyCalories({ profile, route, options = {} }) {
  const { peso: W } = profile;
  const L = route.pesoZaino ?? 0;
  const eta = TERRAIN_FACTOR[route.terreno] ?? 1.2;
  const giorni = route.giorni ?? 1;
  const uplift = options.uplift ?? 0.15; // Pandolf sottostima 12-33%

  const { v, G, minutiTotali, minutiGiorno } = estimateSpeedGrade({
    distanzaKm: route.distanzaKm,
    dislivelloM: route.dislivelloM,
    giorni,
    passoMinKm: route.passoMinKm,
  });

  let M = pandolfWatts({ W, L, v, G, eta });
  if (G < 0) M = Math.max(M - santeeCorrection({ W, L, v, G, eta }), standingWatts(W));

  const kcalMarciaTot = wattsToKcal(M, minutiTotali);
  const bmr = mifflinBMR(profile);

  // kcal/giorno = marcia/giorno + BMR sulle ore non in marcia + uplift
  const oreMarciaGiorno = minutiGiorno / 60;
  const oreRiposoGiorno = Math.max(24 - oreMarciaGiorno, 0);
  const kcalMarciaGiorno = kcalMarciaTot / giorni;
  let kcalGiorno = kcalMarciaGiorno + bmr * (oreRiposoGiorno / 24);
  kcalGiorno *= 1 + uplift;

  const kcalTotali = kcalGiorno * giorni;
  return {
    v, G, bmr,
    kcalGiorno: Math.round(kcalGiorno),
    kcalTotali: Math.round(kcalTotali),
    range: { min: Math.round(kcalTotali * 0.9), max: Math.round(kcalTotali * 1.1) },
    minutiTotali: Math.round(minutiTotali),
  };
}

function standingWatts(W) {
  return 1.5 * W;
}

// ---------------------------------------------------------------------------
// 4. Da calorie a cibo
// ---------------------------------------------------------------------------
export function macroSplit(kcalGiorno, split = MACRO_SPLIT) {
  const out = {};
  for (const k of Object.keys(split)) {
    const kcal = kcalGiorno * split[k];
    out[k] = { kcal: Math.round(kcal), grammi: Math.round(kcal / MACRO_KCAL_PER_G[k]) };
  }
  return out;
}

export function gramsByCategory(kcalGiorno, mix = DEFAULT_CATEGORY_MIX) {
  const out = {};
  let pesoTot = 0;
  let volumeL = 0;
  for (const key of Object.keys(mix)) {
    const cat = CATEGORIES[key];
    if (!cat) continue;
    const kcal = kcalGiorno * mix[key];
    const grammi = kcal / (cat.kcal100 / 100);
    const litri = grammi / cat.densita;
    pesoTot += grammi;
    volumeL += litri;
    out[key] = {
      label: cat.label,
      kcal: Math.round(kcal),
      grammi: Math.round(grammi),
      litri: +litri.toFixed(2),
    };
  }
  return { categorie: out, pesoCiboG: Math.round(pesoTot), volumeL: +volumeL.toFixed(2) };
}

// ---------------------------------------------------------------------------
// 5. Acqua (euristica): base 2 L + 0.5-1 L per ora di marcia, su clima/quota.
// ---------------------------------------------------------------------------
export function waterEstimate({ oreMarciaGiorno, temperatura, quotaM = 0 }) {
  const perOra = temperatura != null && temperatura >= 25 ? 1.0 : 0.6;
  let litri = 2 + oreMarciaGiorno * perOra;
  if (quotaM > 2500) litri += 0.5; // quota -> maggiore perdita idrica
  return { min: +(litri).toFixed(1), max: +(litri + 0.7).toFixed(1) };
}

// ---------------------------------------------------------------------------
// Orchestratore: profilo + percorso -> piano completo (free + premium)
// ---------------------------------------------------------------------------
export function computePlan(profile, route, options = {}) {
  const cal = dailyCalories({ profile, route, options });
  const macro = macroSplit(cal.kcalGiorno);
  const oreMarciaGiorno = cal.minutiTotali / (route.giorni ?? 1) / 60;
  const acqua = waterEstimate({
    oreMarciaGiorno,
    temperatura: route.temperatura,
    quotaM: route.quotaM,
  });

  // free = calorie + macro + acqua
  const free = {
    kcalGiorno: cal.kcalGiorno,
    kcalTotali: cal.kcalTotali,
    range: cal.range,
    macro,
    acquaGiornoL: acqua,
  };

  // premium = categorie con grammi + peso + volume/ingombro
  const cibo = gramsByCategory(cal.kcalGiorno, options.categoryMix);
  const premium = {
    categorie: cibo.categorie,
    pesoCiboGiornoG: cibo.pesoCiboG,
    pesoCiboTotaleG: cibo.pesoCiboG * (route.giorni ?? 1),
    volumeGiornoL: cibo.volumeL,
  };

  return { meta: { v: +cal.v.toFixed(2), G: +cal.G.toFixed(1), bmr: Math.round(cal.bmr) }, free, premium };
}

export default { computePlan, CATEGORIES, TERRAIN_FACTOR };
