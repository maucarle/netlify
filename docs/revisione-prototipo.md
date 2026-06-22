# Revisione prototipo Fuel Your Trek vs specifiche

> Verifica del prototipo **Fuel Your Trek** (export Claude Design, design system
> Vette e Baite) in `prototype/fuel-your-trek/` rispetto a `wireframe.md`,
> `copy-microtesti.md`, `categorie-alimentari.md` e alle decisioni di prodotto.
> Esito: **molto allineato alle specifiche aggiornate**.

## Struttura del prototipo (dopo pulizia)
```
prototype/
├── Fuel Your Trek · Sabbia.html      ← standalone apribile (Safari iPhone incluso)
└── fuel-your-trek/
    ├── Fuel Your Trek · Pino.dc.html   (tema pino)   → importa KcalibroApp
    ├── Fuel Your Trek · Sabbia.dc.html (tema sabbia) → importa KcalibroApp
    ├── Fuel Your Trek · Sabbia.html    (bundle)
    ├── KcalibroApp.dc.html             (sorgente app — nome componente interno)
    ├── _ds/  (design system Vette e Baite)  assets/  screenshots/  support.js  uploads/
```
Due temi: **Pino** (verde) e **Sabbia** (chiaro).

## ✅ Conforme alle decisioni
- **Rebrand "Fuel Your Trek"** ovunque (welcome, paywall "Fuel Your Trek Premium",
  testo di condivisione). **Nessun uso di "FYT" nei testi**, **nessun "FYT Outdoor"**
  → rispetta le regole di marchio (`naming-fyt-analisi.md`).
- **Bilingue come deciso:** switch **IT/EN** predisposto + nota "English version in
  arrivo — testi in italiano" (struttura ora, EN dopo).
- **Confine free/premium corretto:** il free arriva a **S3 Risultato** (calorie +
  **macro** + **acqua/sali**); **S4 "Cosa mangiare" è "Anteprima Premium"** bloccata.
- **Feature di Riccardo presenti** nelle preview premium:
  - **GPX & timing barrette** (es. "Barretta carbo · ore 10:15 prima salita +600 m")
  - **Scoring barrette** (95/90/70/60) coerente con `categorie-alimentari.md`
  - **Diete/allergeni** (onnivoro/veg/vegano/senza latticini) + **"senza fornello"**
  - **Preset cammini** (Via degli Dei, Borghi Silenti, Briganti, Vandelli, Dolomiti)
  - **Importa GPX = Premium** in S2
- **Prezzi:** 4,99 €/mese · 29,99 €/anno · Pass 2,99 €. Disclaimer medico presente.

## 🔧 Rifiniture da fare in Claude Design
1. **Tagline welcome:** ancora *"Calibra le tue calorie da cammino"* (residuo del
   nome Kcalibro). Sostituire con qualcosa per FYT, es. *"Fai il pieno per il tuo
   cammino"* (evitare "calibra").
2. **Nome componente interno** ancora `KcalibroApp` (in `KcalibroApp.dc.html`):
   è interno, non visibile in UI. Rinominabile in Design quando comodo; lasciato
   così per non rischiare la resa.
3. **Tono:** continuare a bilanciare l'energia di "Fuel" con i valori
   *lenti/consapevoli* di Vette e Baite.

## Limiti attuali (attesi)
- È un **mockup visivo**: gli input non ricalcolano i numeri (sono d'esempio).
  La logica vera è pronta in `engine/fyt-calc.mjs`, da agganciare nell'app reale.
- Asset di brand (palette/font/logo/foto) ancora **interpretati** dal sito: per la
  versione definitiva servono gli originali di Vette e Baite.

## Pulizia effettuata sul repo
- Rinominata `prototype/Prototipo mobile Kcalibro 2/` → `prototype/fuel-your-trek/`.
- Rimossi i leftover Kcalibro (`Kcalibro.html`, `Kcalibro Sabbia.html`,
  `Kcalibro.dc.html`, `KcalibroApp v1.dc.html`) e l'iterazione superata
  `prototype/Prototipo mobile Kcalibro/`.

**Conclusione:** il prototipo FYT rappresenta correttamente brand, flusso e confine
free/premium aggiornati ed è pronto per i test utente. Restano due piccoli ritocchi
di copy/naming e, in seguito, l'aggancio del motore e gli asset di brand reali.
