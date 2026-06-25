# Landing di validazione — Fuel Your Trek

Pagina statica per il **Test A** (disponibilità a pagare) e **Test B** (acquisizione
da freddo) — vedi `docs/validation-plan-3-test.md`. Singolo file `index.html`, nessuna
dipendenza.

## Cosa personalizzare prima di pubblicare
1. **Link di pagamento** — cerca `REPLACE_WITH_PAYMENT_LINK` e `REPLACE_WITH_PREMIUM_LINK`
   in `index.html` e sostituiscili con i tuoi **Stripe Payment Link** o **Gumroad**.
2. **Analytics/Pixel** — incolla lo snippet (Plausible/GA4 + Meta Pixel) nel `<head>`
   dove indicato (per misurare CR e CPA del Test B).
3. (Opzionale) testi/prezzi.

## Come pubblicare su Netlify (gratis)
- **Drag & drop:** app.netlify.com → *Add new site → Deploy manually* → trascina la
  cartella `landing/`. Online in ~10 secondi.
- **Da repo:** collega `maucarle/netlify`, **Publish directory = `landing`**, branch a scelta.

## Form lista d'attesa
Il form usa **Netlify Forms** (`data-netlify="true"`): se deployi su Netlify funziona
**senza backend**: le iscrizioni compaiono in *Site → Forms*. Su altri host, sostituisci
l'`action` del form con il tuo servizio (es. Mailchimp/Tally).

> Nota: questa landing serve a **validare**, non è il prodotto. Tienila separata dal
> prototipo dell'app (`prototype/`).
