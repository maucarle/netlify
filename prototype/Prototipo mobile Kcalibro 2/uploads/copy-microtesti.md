# Copy & microtesti UI (italiano)

> Testi pronti per ogni schermata del [`wireframe.md`](./wireframe.md). Tono:
> semplice, diretto, incoraggiante, "da guida" — niente gergo tecnico in UI.
> Si dà del **tu**. `{placeholder}` = valore dinamico.
>
> ⚠️ **Aggiornato (decisioni Riccardo):** nome **Fuel Your Trek (FYT)**; lancio
> **bilingue IT+EN** (servirà la versione EN di ogni stringa); il **free** arriva
> fino a **S3** (calorie + macro + acqua). **S4 "Cosa mangiare" è premium preview
> bloccata** (non più gratis).

---

## S0 — Welcome
- **Titolo:** Fuel Your Trek
- **Tagline:** Calibra le tue calorie da cammino.
- **Sottotitolo:** Scopri quante calorie consumi e cosa mettere nello zaino.
- **CTA primaria:** Inizia
- **Link:** Hai già un profilo? Accedi

## S1 — Profilo
- **Titolo:** Il tuo profilo
- **Sottotitolo:** Servono pochi dati per personalizzare il calcolo.
- **Label:** Sesso · Età · Altezza · Peso
- **Opzionale:** Livello di allenamento (Basso / Medio / Alto)
- **Helper allenamento:** Aiuta a stimare meglio il consumo. Puoi saltarlo.
- **CTA:** Continua
- **Errori:** "Inserisci un'età tra 14 e 99." · "Controlla altezza e peso."

## S2 — Percorso
- **Titolo:** Il tuo percorso
- **Sottotitolo:** Inserisci i dati del cammino. Bastano distanza e dislivello.
- **Label:** Distanza (km) · Dislivello positivo (m) · Durata (giorni) · Peso zaino (kg)
- **Terreno:** Battuto / Misto / Impervio
- **Helper terreno:** Più il terreno è difficile, più consumi a parità di passo.
- **Helper zaino:** Il peso che porti incide molto sul consumo.
- **Avanzate (opzionale):** Passo medio · Stagione · Quota media
- **CTA:** Calcola
- **Futuro:** Importa traccia GPX

## S3 — Risultato calorie
- **Titolo:** Quanto consumi
- **Valore:** {kcal_totali} kcal totali
- **Range:** tra {min} e {max} kcal
- **Riga giorno:** Al giorno: ~{kcal_giorno} kcal
- **Riga acqua:** Acqua: ~{acqua_min}–{acqua_max} L al giorno
- **Macro (free):** Carboidrati {c}% · Grassi {g}% · Proteine {p}%
- **Riga sali:** Reintegra **sali/elettroliti** se fa caldo o sudi molto.
- **Espandibile "Come l'abbiamo calcolato":** Usiamo modelli riconosciuti (Pandolf
  e Mifflin-St Jeor) su peso, zaino, dislivello e terreno. È una **stima** (±10%):
  usala come guida, non come valore esatto.
- **CTA primaria:** Vedi riepilogo · **CTA secondaria (premium):** Cosa mangio? 🔒

## S4 — Cosa mangiare  🔒 *premium preview (bloccata)*
- **Titolo:** Cosa mangiare
- **Riga target:** Obiettivo: {kcal_giorno} kcal al giorno
- **Macro:** Carboidrati {c}% · Grassi {g}% · Proteine {p}%
- **Intestazione lista:** Per categoria, al giorno:
- **Voce categoria:** {categoria} · ~{grammi} g · {kcal} kcal
- **Riga peso:** Peso del cibo: ~{peso} g al giorno
- **Tip educativo:** 💡 Punta a cibi sopra ~450 kcal/100 g: a parità di energia
  pesano meno nello zaino.
- **Blocco premium:** Vuoi il **menu pronto** giorno per giorno, la **lista della
  spesa** e l'ottimizzazione dello **spazio**?
- **CTA primaria:** Scopri Premium · **CTA secondaria:** Vedi riepilogo

## S5 — Riepilogo
- **Titolo:** Il tuo piano · {distanza} km · {giorni} gg
- **Righe:** 🔥 {kcal_totali} kcal · 🎒 ~{peso_cibo} di cibo · 💧 ~{acqua_tot} L acqua
- **Macro:** Carbo {c} · Grassi {g} · Proteine {p}
- **CTA:** Condividi · Salva
- **Spinta premium:** Passa a Premium per il menu giorno-per-giorno e la lista della spesa.
- **Testo di condivisione:** "Il mio piano nutrizionale per {distanza} km e
  {dislivello} m di dislivello: {kcal_totali} kcal e ~{peso_cibo} di cibo. Calcolato con Fuel Your Trek 🏔️"

## S6 — Premium (paywall)
- **Titolo sezione:** Sblocca Fuel Your Trek Premium
- **Benefici:**
  - Menu pronti giorno per giorno con prodotti reali
  - Lista della spesa automatica
  - Ottimizzazione dello **spazio** nello zaino, non solo del peso
  - Diete e allergie, percorsi salvati, consigli della guida
- **Opzione A:** Premium — 4,99 €/mese · 29,99 €/anno (risparmi ~50%)
- **Opzione B:** Solo questo cammino — 2,99 €
- **CTA:** Sblocca con Premium · Sblocca questo cammino
- **Rassicurazione:** Disdici quando vuoi. Nessun rinnovo nascosto.
- **Stati bloccati (overlay):** 🔒 Disponibile con Premium

---

## Microtesti trasversali
- **Caricamento:** Sto calcolando il tuo piano…
- **Stato vuoto profilo:** Inserisci i tuoi dati per iniziare.
- **Errore generico:** Qualcosa è andato storto. Riprova.
- **Offline:** Sei offline: il calcolo funziona, il salvataggio riprenderà più tardi.
- **Disclaimer (footer):** Le stime sono indicative e non sostituiscono il parere
  di un medico o nutrizionista.
- **Salvataggio ok:** Piano salvato.
- **Unità:** km · m · kg · L · kcal (sistema metrico).
