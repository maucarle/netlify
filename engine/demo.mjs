// Demo/verifica del motore di calcolo FYT.
// Uso: node engine/demo.mjs
import { computePlan } from "./fyt-calc.mjs";

// Esempio del wireframe: 18 km, 1100 m D+, 2 giorni, zaino 9 kg, utente 72 kg.
const profile = { sesso: "U", peso: 72, altezza: 178, eta: 34 };
const route = {
  distanzaKm: 18,
  dislivelloM: 1100,
  giorni: 2,
  terreno: "misto",
  pesoZaino: 9,
  temperatura: 18,
  quotaM: 1200,
};

const plan = computePlan(profile, route);

console.log("=== FYT — piano calcolato (esempio wireframe) ===");
console.log("meta:", plan.meta);
console.log("\n-- FREE --");
console.log("kcal totali:", plan.free.kcalTotali, plan.free.range);
console.log("kcal/giorno:", plan.free.kcalGiorno);
console.log("macro/giorno:", plan.free.macro);
console.log("acqua/giorno (L):", plan.free.acquaGiornoL);
console.log("\n-- PREMIUM --");
console.log("peso cibo/giorno (g):", plan.premium.pesoCiboGiornoG);
console.log("peso cibo totale (g):", plan.premium.pesoCiboTotaleG);
console.log("volume/giorno (L):", plan.premium.volumeGiornoL);
console.table(plan.premium.categorie);

// Asserzioni di sanità (non valori esatti: i parametri sono tarabili).
function assert(cond, msg) {
  if (!cond) {
    console.error("ASSERT FALLITA:", msg);
    process.exitCode = 1;
  }
}
assert(plan.free.kcalTotali > 2500 && plan.free.kcalTotali < 7000, "kcal totali nel range plausibile");
assert(plan.free.kcalGiorno > 1500 && plan.free.kcalGiorno < 3500, "kcal/giorno plausibile");
assert(plan.premium.pesoCiboGiornoG > 200 && plan.premium.pesoCiboGiornoG < 1200, "peso cibo plausibile");
assert(plan.premium.volumeGiornoL > 0.3 && plan.premium.volumeGiornoL < 3, "volume plausibile");
assert(plan.free.acquaGiornoL.min >= 2, "acqua >= 2 L base");

if (!process.exitCode) console.log("\n✅ Sanity check superati.");
