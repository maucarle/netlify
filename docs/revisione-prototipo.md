# Revisione prototipo Fuel Your Trek vs specifiche

> Verifica del prototipo **Fuel Your Trek** (export Claude Design, design system
> Vette e Baite) in `prototype/fuel-your-trek/` rispetto a `wireframe.md`,
> `copy-microtesti.md`, `categorie-alimentari.md` e alle decisioni di prodotto.
> Esito: **molto allineato alle specifiche aggiornate**.

## Struttura del prototipo (aggiornata — export Design + pulizia)
```
prototype/
├── Fuel Your Trek · App completa.html  ← STANDALONE da inviare a Riccardo
└── fuel-your-trek/
    ├── Fuel Your Trek · Pino.dc.html   (tema pino)   → importa FuelYourTrekApp
    ├── Fuel Your Trek · Sabbia.dc.html (tema sabbia) → importa FuelYourTrekApp
    ├── Fuel Your Trek · Sabbia.html    (bundle di tema)
    ├── FuelYourTrekApp.dc.html         (sorgente app — componente rinominato ✅)
    ├── _ds/  (design system Vette e Baite)  assets/  screenshots/  support.js  uploads/
```
Due temi: **Pino** (verde) e **Sabbia** (chiaro).

### ✅ Rifiniture risolte in questo export
- **Componente rinominato** `KcalibroApp` → **`FuelYourTrekApp`** (più nessun residuo "Kcalibro").
- **Tagline** aggiornata: niente più "Calibra…", ora **"Fai il pieno per il tuo cammino"**.
- **Standalone unico** `Fuel Your Trek · App completa.html` per la condivisione.
- Rimossi i leftover (`FuelYourTrekApp v1`, vecchio standalone di tema duplicato).

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

## 🔧 Rifiniture
1. ✅ ~~Tagline welcome~~ — risolto: ora "Fai il pieno per il tuo cammino".
2. ✅ ~~Nome componente interno KcalibroApp~~ — risolto: rinominato `FuelYourTrekApp`.
3. **Paywall "value stack" (S6e):** verificare/aggiungere in Design la schermata
   Membership & perk (nutrizionista, sconti attrezzatura, **Fit for Baite/BIS**,
   sconti eventi V&B) — vedi `wireframe.md`/`brief-aggiornamento-design.md`. "Fit for
   Baite" non risultava per nome nel sorgente: da confermare.
4. **Tono:** continuare a bilanciare l'energia di "Fuel" con i valori
   *lenti/consapevoli* di Vette e Baite.

## Limiti attuali (attesi)
- È un **mockup visivo**: gli input non ricalcolano i numeri (sono d'esempio).
  La logica vera è pronta in `engine/fyt-calc.mjs`, da agganciare nell'app reale.
- Asset di brand (palette/font/logo/foto) ancora **interpretati** dal sito: per la
  versione definitiva servono gli originali di Vette e Baite.

## Pulizia effettuata sul repo
- Cartella `prototype/fuel-your-trek/` con il nuovo export Design (componente
  `FuelYourTrekApp`), + standalone `Fuel Your Trek · App completa.html` per Riccardo.
- Rimossi i leftover: `FuelYourTrekApp v1.dc.html`, standalone di tema duplicato
  (`Fuel Your Trek · Sabbia.html` top-level), e — nelle iterazioni precedenti — tutti
  i file "Kcalibro".
- Tutto consolidato su **`main`** (Design pubblica lì; allineato al lavoro su doc/landing).

**Conclusione:** il prototipo FYT rappresenta correttamente brand, flusso e confine
free/premium aggiornati ed è pronto per i test utente. Restano due piccoli ritocchi
di copy/naming e, in seguito, l'aggancio del motore e gli asset di brand reali.
