# Kcalibro — Documentazione di progetto

> App per escursionisti: calcola il **consumo calorico personalizzato** di un
> trekking (dati biometrici + percorso) e propone **cosa mangiare** ottimizzando
> peso e — in futuro — ingombro nello zaino. Progetto ideato da Riccardo, guida
> alpina. Nome di lavoro: **Kcalibro** (da validare).
>
> Mercato: Italia/Europa · Pubblico: escursionisti singoli (B2C) · Modello: freemium.

## Stato

Fase di **specifiche e requisiti** per alimentare un prototipo in **Claude Design**.
La parte tecnica di implementazione è volutamente esclusa.

## Indice dei documenti (`docs/`)

| File | Cosa contiene |
|---|---|
| [`PRD.md`](./PRD.md) | Documento principale: contesto, **analisi di mercato**, personas, scope MVP, requisiti **free vs premium**, naming, **prezzi**, categorie, **fonti dati** (OpenFoodFacts/CREA/GS1, allergeni) |
| [`domande-per-riccardo.md`](./domande-per-riccardo.md) | 14 domande discorsive per definire i **contenuti** con Riccardo |
| [`categorie-alimentari.md`](./categorie-alimentari.md) | **Tabella categorie** con kcal/100 g, densità, efficienza peso (kcal/kg) e volume (kcal/L) |
| [`wireframe.md`](./wireframe.md) | **Wireframe testuali** schermata-per-schermata (S0–S6), inclusi gli schermi premium bloccati |
| [`formule-calcolo.md`](./formule-calcolo.md) | Bozza **modello di calcolo** (Pandolf + Mifflin-St Jeor) per la futura parte tecnica |
| [`copy-microtesti.md`](./copy-microtesti.md) | **Testi UI** in italiano per ogni schermata |

## Le 3 idee chiave

1. **Italia/Europa prima** — i competitor (Backcountry Foodie, Packstack) sono USA/inglese.
2. **Ottimizzare lo spazio, non solo il peso** — nessuno lo fa → differenziatore premium.
3. **Freemium integrato** — calcolo gratis + categorie; menu concreto, lista spesa e ingombro in premium.

## Prossimi passi

1. Sottoporre a Riccardo le **domande** (`domande-per-riccardo.md`) e validare le linee guida nutrizionali con un nutrizionista.
2. Costruire il **prototipo** in Claude Design dai `wireframe.md` + `copy-microtesti.md`.
3. Test con clienti reali di Riccardo (comprensibilità + willingness-to-pay).
4. Solo dopo: parte tecnica, partendo da `formule-calcolo.md` e dalle fonti dati del PRD §14.
