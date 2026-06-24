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
| [`naming-fyt-analisi.md`](./naming-fyt-analisi.md) | **Analisi naming** "Fuel Your Trek" (mercato, SEO, marchio) + regole d'uso |
| [`brief-aggiornamento-design.md`](./brief-aggiornamento-design.md) | **Brief per Claude Design**: cosa cambiare nel prototipo |
| [`../engine/`](../engine/) | **Motore di calcolo** JS (Pandolf + Mifflin-St Jeor) — `node engine/demo.mjs` |
| [`domande-per-riccardo.md`](./domande-per-riccardo.md) | Le 14 domande originali (✅ già risposte) |
| [`categorie-alimentari.md`](./categorie-alimentari.md) | **Tabella categorie** (kcal/100 g, densità, kcal/kg, kcal/L) + **scoring barrette & timing** |
| [`wireframe.md`](./wireframe.md) | **Wireframe testuali** schermata-per-schermata (S0–S6), free + premium preview |
| [`copy-microtesti.md`](./copy-microtesti.md) | **Testi UI** in italiano per ogni schermata |
| [`formule-calcolo.md`](./formule-calcolo.md) | Bozza **modello di calcolo** (Pandolf + Mifflin-St Jeor) |
| [`revisione-prototipo.md`](./revisione-prototipo.md) | Revisione del prototipo Claude Design vs specifiche |

Prototipo Claude Design: cartella [`../prototype/`](../prototype/).

## Le 3 idee chiave

1. **Bilingue IT+EN, mercato vuoto** — i competitor (Backcountry Foodie, Packstack) sono USA/inglese.
2. **Ottimizzare lo spazio, non solo il peso** — nessuno lo fa → differenziatore premium.
3. **Freemium** — gratis: **calorie + macro + acqua**; premium: menu concreto, lista spesa, ingombro, GPX/timing, diete.

## Prossimi passi

1. Finire il **prototipo** in Claude Design (ri-branding FYT) e validare le linee guida nutrizionali con un nutrizionista.
2. Procurare a Claude Design gli **asset di brand reali** di Vette e Baite (palette, font, logo, foto) — vedi caveat del design system.
3. Test con clienti reali di Riccardo (comprensibilità + willingness-to-pay); lancio alla fiera *Passo dopo passo*.
4. Solo dopo: parte tecnica, partendo da `formule-calcolo.md` e dalle fonti dati del PRD §14.
