# Wireframe testuale — flusso app (mobile-first)

> Wireframe schermata-per-schermata del flusso PRD §8, pronto da tradurre 1:1 in
> Claude Design. Nome di lavoro **Kcalibro**. Mobile-first, wizard lineare con
> barra di avanzamento. Le schermate premium sono **bloccate** (preview).
> Legenda: `[ ... ]` campo input · `( ◯ )` opzione/selezione · `[[ BOTTONE ]]` CTA.

---

## S0 — Welcome / Onboarding

```
┌───────────────────────────────┐
│            🏔️ Kcalibro          │
│   Calibra le tue calorie da     │
│            cammino              │
│                                 │
│  Scopri quante calorie consumi  │
│  e cosa mettere nello zaino.    │
│                                 │
│       [[ Inizia ]]              │
│   Hai già un profilo? Accedi    │
└───────────────────────────────┘
```
- **Scopo:** brand + promessa in una frase. Nessun login obbligatorio all'MVP.
- **CTA:** *Inizia* → S1. Link *Accedi* (opzionale/futuro).

---

## S1 — Profilo biometrico   ·   passo 1/4

```
┌───────────────────────────────┐
│  ‹  Il tuo profilo      ●○○○    │
│                                 │
│  Sesso     ( ◯ U )  ( ◯ D )     │
│  Età       [   34   ] anni      │
│  Altezza   [  178   ] cm        │
│  Peso      [   72   ] kg        │
│                                 │
│  ▸ Allenamento (opzionale)      │
│    ( ◯ Basso )( ◯ Medio )( ◯ Alto)│
│                                 │
│       [[ Continua ]]            │
└───────────────────────────────┘
```
- **Input:** sesso, età, altezza, peso (obbligatori); livello allenamento (opz.).
- **Note:** salva in locale per non richiederlo ogni volta. Validazione range.
- **CTA:** *Continua* → S2.

---

## S2 — Il tuo percorso   ·   passo 2/4

```
┌───────────────────────────────┐
│  ‹  Il percorso         ●●○○    │
│                                 │
│  Distanza      [  18  ] km      │
│  Dislivello +  [ 1100 ] m       │
│  Durata        [  2   ] giorni  │
│                                 │
│  Terreno                        │
│   ( ◯ Battuto )( ◉ Misto )( ◯ Impervio)│
│                                 │
│  Peso zaino    [  9   ] kg      │
│                                 │
│  ▸ Avanzate (opzionale)         │
│    Passo medio · Stagione · Quota│
│                                 │
│       [[ Calcola ]]             │
└───────────────────────────────┘
```
- **Input:** distanza, dislivello+, giorni, terreno, **peso zaino** (chiave Pandolf).
- **Opzionali:** passo, stagione/temperatura, quota.
- **Futuro:** bottone *Importa GPX* (roadmap) accanto agli input manuali.
- **CTA:** *Calcola* → S3.

---

## S3 — Risultato calorie   ·   passo 3/4

```
┌───────────────────────────────┐
│  ‹  Quanto consumi      ●●●○    │
│                                 │
│   🔥  4.180 kcal totali         │
│       (3.760 – 4.600)           │
│                                 │
│   Al giorno:  ~2.090 kcal       │
│   💧 Acqua:   ~2,5–3 L/giorno    │
│                                 │
│  ▸ Come l'abbiamo calcolato     │
│    Pandolf + Mifflin-St Jeor    │
│    (stima, ±10%)                │
│                                 │
│       [[ Cosa mangio? ]]        │
└───────────────────────────────┘
```
- **Output:** kcal totali (con range), kcal/giorno, fabbisogno acqua.
- **Trasparenza:** sezione espandibile sul metodo + disclaimer "stima".
- **CTA:** *Cosa mangio?* → S4.

---

## S4 — Cosa mangiare   ·   passo 4/4   (cuore del FREE)

```
┌───────────────────────────────┐
│  ‹  Cosa mangiare       ●●●●    │
│                                 │
│  Target: 2.090 kcal/giorno      │
│  Macro:  Carbo 55% Grassi 30%   │
│          Proteine 15%           │
│                                 │
│  Per categoria (al giorno):     │
│  ▸ Grassi densi    ~110 g  640k │
│  ▸ Carbo lenti     ~200 g  740k │
│  ▸ Carbo rapidi    ~120 g  410k │
│  ▸ Proteine        ~ 90 g  290k │
│  ▸ Snack salati    ~ in più     │
│                                 │
│  🎒 Peso cibo: ~520 g/giorno    │
│                                 │
│  🔒 Vuoi il MENU pronto +       │
│     lista spesa + ingombro?     │
│       [[ Scopri Premium ]]      │
│       [[ Vedi riepilogo ]]      │
└───────────────────────────────┘
```
- **Output:** target kcal/macro + **categorie con grammi e kcal**, peso cibo/giorno.
- **Educazione:** micro-tip su densità calorica ("punta a ~450+ kcal/100 g").
- **CTA:** *Scopri Premium* → S6 · *Vedi riepilogo* → S5.

---

## S5 — Riepilogo (condivisibile)

```
┌───────────────────────────────┐
│  Il tuo piano · 18 km · 2 gg    │
│                                 │
│  🔥 4.180 kcal   🎒 ~1,0 kg cibo│
│  💧 ~5–6 L acqua tot            │
│  Carbo 55 · Grassi 30 · Prot 15 │
│  Categorie consigliate: …       │
│                                 │
│  [[ Condividi ]]  [[ Salva ]]   │
│                                 │
│  ✨ Passa a Premium per il menu │
│     giorno-per-giorno e la      │
│     lista della spesa.          │
│       [[ Scopri Premium ]]      │
└───────────────────────────────┘
```
- **Scopo:** schermata-riassunto esportabile (immagine/condivisione) + CTA premium.
- **Free:** *Salva* = salvataggio locale singolo (multi-percorso = premium).

---

## S6 — Premium preview (BLOCCATE)   ·   per testare willingness-to-pay

### S6a — Menu concreto multi-giorno 🔒
```
┌───────────────────────────────┐
│  Menu · Giorno 1        🔒      │
│  Colazione  Porridge+noci  520k │
│  Pranzo     Crackers+bresaola…  │
│  Cena       Liofilizzato pasta… │
│  Snack      Barretta+cioccolato │
│   …(sfocato sotto il blocco)…   │
│  [[ Sblocca con Premium 4,99€ ]]│
│  [[ Solo questo cammino 2,99€ ]]│
└───────────────────────────────┘
```

### S6b — Lista della spesa 🔒
```
┌───────────────────────────────┐
│  Lista spesa            🔒      │
│  ☐ Frutta secca mix   300 g     │
│  ☐ Cioccolato fondente 200 g    │
│  ☐ Cous cous          250 g     │
│   …                              │
│  [[ Sblocca con Premium ]]      │
└───────────────────────────────┘
```

### S6c — Ottimizzazione ingombro 🔒  (il differenziatore)
```
┌───────────────────────────────┐
│  Spazio nello zaino     🔒      │
│  Volume cibo: ~1,1 L/giorno     │
│  💡 Sostituendo 1 liofilizzato  │
│     con grassi densi: −0,2 L    │
│  [ Peso ▓▓▓▓▓░ ] [ Volume ▓▓░ ] │
│  [[ Sblocca con Premium ]]      │
└───────────────────────────────┘
```
- **Scopo:** mostrare il valore premium (menu+lista+ingombro) in modo desiderabile
  ma bloccato; due opzioni d'acquisto (abbonamento vs *Pass Cammino*).
- **Metrica:** % tap su *Sblocca* = segnale di willingness-to-pay (PRD §9).

---

## Mappa di navigazione

```
S0 → S1 → S2 → S3 → S4 → S5
                     │       └→ S6 (a/b/c) [premium]
                     └────────→ S6 [premium]
```

## Note generali per il prototipo
- **Barra avanzamento** (●●○○) su S1–S4; back sempre disponibile.
- **Unità metriche** (kg, km, m, L) — è un'app IT/EU.
- **Tono copy:** semplice, incoraggiante, "da guida" (no gergo tecnico in UI).
- Tutti i numeri mostrati sono **esempi**; vanno etichettati come *stima* dove serve.
- I valori per categoria/volume vengono da `docs/categorie-alimentari.md`.
