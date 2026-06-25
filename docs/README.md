# Fuel Your Trek (FYT) — Documentazione di progetto

> App per escursionisti: calcola il **consumo calorico personalizzato** di un
> trekking (dati biometrici + percorso) e, in premium, propone **cosa mangiare**
> ottimizzando peso e ingombro nello zaino. Progetto ideato da Riccardo (guida
> alpina, cooperativa **Vette e Baite**).
>
> **Nome:** **Fuel Your Trek** (nei testi per esteso; "FYT" solo nel logo, mai
> "FYT Outdoor" — vedi `naming-fyt-analisi.md`) · **Lingua:** bilingue **IT+EN**
> (struttura ora, EN dopo) · **Pubblico:** escursionisti singoli (B2C) ·
> **Modello:** freemium.
> *Nota: il primo prototipo è ancora "Kcalibro" → da ri-brandizzare.*

## Stato

Fase di **specifiche e requisiti** + **prototipo** in **Claude Design** (con design
system **Vette e Baite**). La parte tecnica di implementazione è ancora esclusa.
Le risposte di Riccardo alle 14 domande sono recepite nei documenti.

## Indice dei documenti (`docs/`)

| File | Cosa contiene |
|---|---|
| [`PRD.md`](./PRD.md) | Documento principale: contesto, **analisi di mercato**, personas, scope MVP, requisiti **free vs premium**, naming, **prezzi**, categorie, **fonti dati**, indicazioni operative di Riccardo (§15) |
| [`risposte-riccardo.md`](./risposte-riccardo.md) | **Risposte di Riccardo** alle 14 domande + decisioni + link risorse |
| [`business-model-partnership.md`](./business-model-partnership.md) | **Modello di business & partnership** (direzione Riccardo): distribuzione community/influencer, stack di valore premium, partner |
| [`validation-plan-3-test.md`](./validation-plan-3-test.md) | **Piano dei 3 test** pre-investimento (pre-vendita, acquisizione, modello) con soglie go/no-go |
| [`business-plan-bozza.md`](./business-plan-bozza.md) | **Bozza di business plan** (mercato, ricavi, costi, unit economics, roadmap, rischi) |
| [`naming-fyt-analisi.md`](./naming-fyt-analisi.md) | **Analisi naming** "Fuel Your Trek" (mercato, SEO, marchio) + regole d'uso |
| [`brief-aggiornamento-design.md`](./brief-aggiornamento-design.md) | **Brief per Claude Design**: cosa cambiare nel prototipo |
| [`../engine/`](../engine/) | **Motore di calcolo** JS (Pandolf + Mifflin-St Jeor) — `node engine/demo.mjs` |
| [`domande-per-riccardo.md`](./domande-per-riccardo.md) | Le 14 domande originali (✅ già risposte) |
| [`categorie-alimentari.md`](./categorie-alimentari.md) | **Tabella categorie** (kcal/100 g, densità, kcal/kg, kcal/L) + **scoring barrette & timing** |
| [`wireframe.md`](./wireframe.md) | **Wireframe testuali** schermata-per-schermata (S0–S6), free + premium preview |
| [`copy-microtesti.md`](./copy-microtesti.md) | **Testi UI** in italiano per ogni schermata |
| [`formule-calcolo.md`](./formule-calcolo.md) | Bozza **modello di calcolo** (Pandolf + Mifflin-St Jeor) |
| [`revisione-prototipo.md`](./revisione-prototipo.md) | Revisione del prototipo Claude Design vs specifiche |

Prototipo Claude Design: cartella [`../prototype/`](../prototype/) — file standalone
da **inviare a Riccardo**: `prototype/Fuel Your Trek · App completa.html`.
Landing di validazione (Test A/B): cartella [`../landing/`](../landing/).

## Le 3 idee chiave

1. **Bilingue IT+EN, mercato vuoto** — i competitor (Backcountry Foodie, Packstack) sono USA/inglese.
2. **Ottimizzare lo spazio, non solo il peso** — nessuno lo fa → differenziatore premium.
3. **Freemium** — gratis: **calorie + macro + acqua**; premium: menu concreto, lista spesa, ingombro, GPX/timing, diete.

## Stato & prossimi passi

**Fatto:** PRD + documenti di supporto, prototipo FYT (`prototype/fuel-your-trek/`),
motore di calcolo (`engine/`), strategia di Riccardo (`business-model-partnership.md`),
**piano dei 3 test** e **bozza business plan**, **landing di validazione** (`landing/`).

**Priorità ora — VALIDARE prima di costruire** (`validation-plan-3-test.md`):
1. **Test A (pre-vendita):** personalizzare e deployare `landing/` (link pagamento +
   analytics), esporla a community Riccardo + partner. Gate: paganti reali.
2. **Test B (acquisizione):** 100–300 € di ads da freddo → misurare CPA/CR.
3. **Test C (modello):** survey + outreach a influencer/gestori e guide (B2B).
4. **Solo se i gate sono verdi →** build nativo iOS+Android (appalto) partendo da
   `formule-calcolo.md` + `engine/` + fonti dati (PRD §14).

**In parallelo (esterni, di Mauro/Riccardo):** asset di brand reali per Design
(palette/font/logo/foto), verifica dominio+marchio "Fuel Your Trek", numeri dei
partner (consulenze nutrizionista, BIS, attrezzatura, eventi).
