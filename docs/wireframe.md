# Wireframe testuale — flusso app (mobile-first)

> Wireframe schermata-per-schermata del flusso PRD §8, pronto da tradurre 1:1 in
> Claude Design. Nome prodotto **Fuel Your Trek** (nei testi per esteso; "FYT" solo
> nel logo, mai "FYT Outdoor"). Mobile-first, wizard lineare con barra di avanzamento.
> Le schermate premium sono **bloccate** (preview).
> Legenda: `[ ... ]` campo input · `( ◯ )` opzione/selezione · `[[ BOTTONE ]]` CTA.
>
> ⚠️ **Aggiornato (decisioni Riccardo):** lancio **bilingue IT+EN**. Il **flusso
> gratuito termina a S3** (calorie + **macro** + acqua/sali). **S4 "Cosa mangiare"
> è premium preview bloccata.** GPX = premium.

---

## S0 — Welcome / Onboarding

```
┌───────────────────────────────┐
│        🏔️ Fuel Your Trek        │
│    Fai il pieno per il tuo      │
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
│   Macro: C 55% · G 30% · P 15%  │
│   💧 Acqua:   ~2,5–3 L/giorno    │
│   🧂 Sali se fa caldo/sudi       │
│                                 │
│  ▸ Come l'abbiamo calcolato     │
│    Pandolf + Mifflin-St Jeor    │
│                                 │
│  ┌─ 🧭 Il consiglio di Riccardo ┐│
│  │ Colazione abbondante, giorno ││
│  │ leggero con tanti spuntini,  ││
│  │ cena ricca. Bevi e reintegra ││
│  │ i sali. Punta su cibi solidi.││
│  └──────────────────────────────┘│
│                                 │
│   [[ Vedi riepilogo ]]          │
│   [[ 🔒 Cosa mangio? ]]         │
└───────────────────────────────┘
```
- **Traguardo del FREE:** kcal totali/giorno (con range), **macro**, **acqua/sali**.
- **Firma Riccardo:** card "Il consiglio di Riccardo" (tono da guida) — rinforza
  credibilità sull'ultima schermata gratuita, prima del paywall.
- **Trasparenza:** sezione espandibile sul metodo + disclaimer "stima".
- **CTA:** *Vedi riepilogo* → S5 · *🔒 Cosa mangio?* → S4 (premium preview).

---

## S4 — Cosa mangiare   ·   🔒 premium preview (bloccata)

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
- **Premium preview:** categorie con grammi/kcal e peso cibo mostrati **sfocati/
  bloccati** con CTA di sblocco (non più contenuto gratuito).
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
│  (no elenco categorie: è premium)│
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
### S6d — GPX & timing barrette 🔒  (firma Riccardo)
```
┌───────────────────────────────┐
│  Carica traccia GPX     🔒      │
│  Calcolo preciso su salite reali│
│  ⏱️ Barretta carbo: ore 10:15   │
│     (prima della salita +600 m) │
│  [[ Sblocca con Premium ]]      │
└───────────────────────────────┘
```

### S6e — Membership & perk 🔒  (value stack — direzione Riccardo)
```
┌───────────────────────────────┐
│  Premium è più di un'app  🔒    │
│  🥗 Consulenza nutrizionista     │
│      (online) · X sessioni      │
│  🎒 Sconti partner attrezzatura  │
│  🏋️ Fit for Baite (BIS) scontato │
│  🎟️ −10% sugli eventi Vette e    │
│      Baite → l'abbonamento si    │
│      ripaga                      │
│  [[ Solo questo cammino 2,99€ ]] │
│  [[ Premium 29,99€/anno ]]      │
└───────────────────────────────┘
```
- **Scopo:** mostrare che il premium vale più della singola feature (menu+lista+
  ingombro+GPX) grazie alla **membership di perk**; **Pass Cammino 2,99 € come hook
  primario** (CTA in evidenza), abbonamento come scelta per chi vuole i perk.
- **Metrica:** % tap su *Sblocca / acquista* = segnale di willingness-to-pay (PRD §9).
- *Riferimento contenuti:* `business-model-partnership.md`.

---

## Mappa di navigazione

```
S0 → S1 → S2 → S3 ──→ S5            (flusso FREE)
                │  └→ S4 🔒 → S6     (premium preview)
                └────────────→ S6    (CTA premium)
```
- Il **free** va S0→S3→S5. **S4** e **S6** sono premium preview bloccate.

## Note generali per il prototipo
- **Barra avanzamento** (●●○○) su S1–S4; back sempre disponibile.
- **Unità metriche** (kg, km, m, L) — è un'app IT/EU.
- **Tono copy:** semplice, incoraggiante, "da guida" (no gergo tecnico in UI).
- Tutti i numeri mostrati sono **esempi**; vanno etichettati come *stima* dove serve.
- I valori per categoria/volume vengono da `docs/categorie-alimentari.md`.
