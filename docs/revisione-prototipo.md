# Revisione prototipo Kcalibro vs specifiche

> Confronto del prototipo `prototype/Kcalibro.html` (export Claude Design) con
> `wireframe.md`, `copy-microtesti.md` e `categorie-alimentari.md`.
> Esito: **molto fedele alle specifiche**, pronto come prototipo dimostrativo.

## Cos'è il file
HTML autoconsistente "a bundle": contiene l'app compressa (asset base64/gzip +
font) e la ricostruisce nel browser via JavaScript. Funziona in qualsiasi browser
moderno, **Safari iPhone incluso**. Non è codice modificabile a mano: per cambiarlo
si rigenera in Claude Design.

## Copertura schermate (S0–S6)
Tutte presenti e coerenti con il wireframe:
- **S0 Welcome** — "Kcalibro · Calibra le tue calorie da cammino", CTA *Inizia* / *Accedi*. ✓
- **S1 Profilo** — sesso, età, altezza, peso + allenamento opzionale; nota privacy "restano sul dispositivo". ✓
- **S2 Percorso** — distanza, dislivello, durata, terreno, peso zaino + avanzate (passo, quota, stagione) + *Importa GPX · Presto*. ✓
- **S3 Risultato** — 4.180 kcal (intervallo 3.760–4.600), ~2.090/giorno, acqua 2,5–3 L, "Come l'abbiamo calcolato" (Pandolf + Mifflin-St Jeor), disclaimer ±10%. ✓
- **S4 Cosa mangiare** — obiettivo 2.090 kcal, macro 55/30/15, categorie con grammi/kcal, peso cibo ~520 g/giorno, tip densità calorica, paywall. ✓
- **S5 Riepilogo** — 18 km/2 gg, 4.180 kcal, ~1,0 kg cibo, 5–6 L acqua, testo condivisibile, *Condividi*/*Salva*. ✓
- **S6 Premium** — menu Giorno 1, lista spesa, spazio zaino; prezzi 4,99 €/mese · 29,99 €/anno + *Pass Cammino* 2,99 €. ✓

## Coerenza numeri e testi
- Numeri allineati a `categorie-alimentari.md` e al wireframe (kcal, macro, grammi per categoria, volume ~1,1 L, peso ~1,0 kg).
- Copy in italiano fedele a `copy-microtesti.md`, tono semplice "da guida".

## Extra positivi (oltre le specifiche)
- **Disclaimer medico/nutrizionale** esplicito.
- **Due temi visivi** "Bosco / Pietra" per testare lo stile.
- GPX marcato *Presto*; toast "Sto calcolando il tuo piano…".

## Limiti attuali (attesi per un prototipo di design)
- È un **mockup visivo**: gli input non ricalcolano i risultati (i numeri sono
  d'esempio, fissi). Nessuna logica Pandolf/Mifflin reale dietro.
- Nessun collegamento a database alimenti (coerente: quello è fase tecnica, §14).

## Suggerimenti per la prossima iterazione
1. **Collegare gli input al calcolo** (BMR + Pandolf da `formule-calcolo.md`) per
   un prototipo "vivo".
2. Verificare **contrasto e dimensioni tap target** su mobile (accessibilità).
3. In S4, valutare di mostrare anche la **densità calorica per categoria** come
   micro-badge educativo.
4. Quando si passa al premium reale: agganciare un set di prodotti da
   `OpenFoodFacts` + curazione (vedi §14 del PRD).

**Conclusione:** il prototipo rappresenta correttamente il flusso e il valore
dell'app; va bene per test utente e demo. Le evoluzioni sono "renderlo
funzionante" e collegare i dati reali.
