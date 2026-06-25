# Brief per Claude Design — aggiornamento prototipo

> Una pagina con **cosa cambiare** nel prototipo rispetto alla prima versione
> ("Kcalibro"). Incolla questo file in Claude Design insieme a `wireframe.md` e
> `copy-microtesti.md` aggiornati.

## 1. Brand
- **Nome: da "Kcalibro" a "Fuel Your Trek".** Sostituire ovunque (welcome,
  paywall, testo di condivisione).
- **Regole d'uso (importanti):** nei **testi** scrivere sempre **"Fuel Your Trek"**
  per esteso; **"FYT" solo come monogramma del logo**, mai nei testi; **mai
  "FYT Outdoor"** (collide con prodotti softair → SEO). Vedi `naming-fyt-analisi.md`.
- **Bilingue IT + EN**: architettura con switch lingua e stringhe a chiave, ma per
  ora **popolare solo l'italiano** (EN dopo).
- **Tono:** energia di "Fuel" bilanciata coi valori *lenti/consapevoli* di Vette e Baite.
- Mantenere il **design system "Vette e Baite"** (temi Pino / Sabbia).

## 2. Confine free / premium (cambiato!)
- Il **flusso gratuito termina alla schermata Risultato (S3)** e mostra:
  **calorie totali + per giorno**, **ripartizione macro**, **acqua + sali**.
- La schermata **"Cosa mangiare" (S4) diventa PREMIUM PREVIEW bloccata**
  (prima era gratis): categorie con grammi mostrate sfocate + CTA di sblocco.
- Dopo S3 le CTA sono: **"Vedi riepilogo"** (free, → S5) e **"🔒 Cosa mangio?"**
  (premium, → S4).

## 3. Nuove schermate / contenuti premium
- **S6d — GPX & timing barrette**: caricamento traccia GPX + suggerimento
  dell'orario in cui assumere la barretta giusta prima della salita.
- **Scoring barrette**: tabella tipi di barretta con % idoneità hiking e momento
  della giornata (vedi `categorie-alimentari.md`).
- **Diete e allergeni**: selettore onnivoro / vegetariano / vegano / senza
  latticini + checklist allergeni; opzione **"senza fornello"** (acqua fredda).
- **Preset cammini** (italiani): Via degli Dei, Borghi Silenti, Briganti, Vandelli,
  tour Dolomiti/Alpi.

## 3-bis. Paywall "value stack" — S6e (NUOVO, direzione Riccardo)
Il premium non è solo feature dell'app: aggiungere una schermata **Membership & perk**
con questi elementi (preview bloccata):
- 🥗 **Consulenza nutrizionista** (online) — X sessioni
- 🎒 **Sconti** partner attrezzatura
- 🏋️ **Fit for Baite** (con BIS) scontato
- 🎟️ **−10% eventi Vette e Baite** ("l'abbonamento si ripaga")

Gerarchia prezzi: **Pass Cammino 2,99 € = CTA primaria (hook)**; abbonamento come
seconda opzione per chi vuole i perk. Vedi `business-model-partnership.md`.

## 4. Input percorso (S2)
- Free: distanza, dislivello+, giorni, terreno, peso zaino. Opzionali: stagione/
  temperatura, quota.
- **Importa GPX = premium** (etichetta dedicata, non più "Presto" generico).

## 5. Tono & firma (rev. post-review)
- Filosofia "firma Riccardo": colazione buona → giornata leggera (spuntini) →
  cena abbondante. Acqua/sali in primo piano. No gel, sì cibi solidi.
- **"Il consiglio di Riccardo" — teaser in S3 (free) + completo in S4 (premium):**
  in S3 una riga che invoglia ("mangia leggero di giorno, recupera la sera → in
  Premium"); in S4 il box completo della guida. Testi in `copy-microtesti.md` (S3/S4).
- **S5 invariato:** macro-pill + frase di condivisione, **senza elenco categorie**
  (le categorie sono premium → non si mostrano nel riepilogo gratuito).

## File da usare come fonte
- `wireframe.md` (flusso schermate aggiornato)
- `copy-microtesti.md` (testi IT aggiornati)
- `categorie-alimentari.md` (scoring barrette, contenuti premium)
- `risposte-riccardo.md` (contesto/decisioni, opzionale)
