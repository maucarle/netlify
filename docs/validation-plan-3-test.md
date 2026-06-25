# Piano dei 3 test di validazione (prima di appaltare lo sviluppo)

> Obiettivo: spendere **poche centinaia di euro e ~3 settimane** per decidere, con
> dati reali, se **procedere** col build nativo iOS+Android, **pivotare** il modello
> (B2B/kit) o **ridimensionare** a strumento gratuito. Nasce dal pre-mortem e dalla
> direzione di Riccardo (`business-model-partnership.md`). **Nessun investimento
> grande prima di superare questi gate.**

## Perché questi 3 test
I 3 rischi a più alto Probabilità×Impatto del pre-mortem sono: **(1)** distribuzione
solo dalla bolla di Riccardo, **(2)** il free risolve già il bisogno (premium debole),
**(3)** frequenza/stagionalità basse. Ogni test attacca uno di questi con una metrica
go/no-go.

---

## TEST A — Disponibilità a pagare (pre-vendita reale)
**Domanda:** qualcuno paga davvero? (rischio #2 + #4 build prematuro)

**Setup**
- **Landing page** (cartella `landing/` in questo repo, pronta da deployare) con:
  promessa, 3 schermate del prototipo, sezione premium "value stack", e **CTA di
  acquisto reale**.
- **Pagamento vero** con strumento no-code: **Gumroad** o **Stripe Payment Link**.
  Due offerte:
  - **Pass Cammino — 2,99 €** (sblocco singolo, hook).
  - **Founder Premium — 19,99 € / anno** (early-bird, “rimborsabile se non lanciamo”).
- Esposizione: comunità di Riccardo **+ almeno 2 community/influencer partner**
  (così si testa anche fuori dalla bolla).

**Metriche & gate**
| Metrica | Verde (procedi) | Giallo (itera) | Rosso (stop/pivot) |
|---|---|---|---|
| % visitatori → acquisto (qualsiasi) | ≥ 4% | 1,5–4% | < 1,5% |
| N. paganti assoluti in 2 settimane | ≥ 30 | 10–29 | < 10 |
| Mix Pass vs Founder | informativo (atteso: Pass > Founder) | — | — |

> Regola d'oro: contano i **pagamenti**, non i tap o i "mi piace". Se < 10 persone
> pagano 2,99 €, **non si appalta** la app.

---

## TEST B — Motore di acquisizione fuori dalla bolla
**Domanda:** si acquisiscono utenti oltre Riccardo a costo sostenibile? (rischio #1)

**Setup**
- **100–300 €** di ads (Meta/IG + Google) verso la **stessa landing**, targetizzando
  **pubblico freddo** (interessi: trekking, cammini, escursionismo, ultralight),
  **non** i follower di Vette e Baite.
- Strumentare: **clic → landing → acquisto/iscrizione**; pixel Meta + UTM.
- Misurare anche il **tasso di condivisione** (la funzione “Condividi” genera ritorni?).

**Metriche & gate**
| Metrica | Verde | Giallo | Rosso |
|---|---|---|---|
| Costo per lead (iscrizione/waitlist) | ≤ 1,5 € | 1,5–4 € | > 4 € |
| Costo per acquisto (CPA) vs prezzo | CPA ≤ valore primo acquisto | ~pari | CPA ≫ valore |
| Landing CR (cold) | ≥ 8% | 4–8% | < 4% |

> Se il CPA da freddo è molto sopra il valore e le condivisioni ~0: la app è un
> **servizio per la community di Riccardo**, non un prodotto scalabile a pagamento
> → trattarla come tale (free + B2B/affiliazione).

---

## TEST C — Modello & frequenza (qual è il vero business)
**Domanda:** quale modello regge la frequenza d'uso reale? (rischio #3)

**Setup (a costo ~0)**
- **Micro-survey** post-iscrizione (3 domande): quante volte/anno pianifichi cibo per
  un trek? pagheresti un abbonamento o preferisci una tantum? cosa ti farebbe tornare?
- **Outreach influencer/gestori:** contattare 8–10 pagine/community e proporre
  **Premium gratis ↔ promozione** → misurare quante dicono sì (valida il canale di
  distribuzione di Riccardo).
- **Sondaggio B2B guide:** 5–10 guide/operatori — interesse a un pacchetto multi-profilo?
- **Interesse perk premium:** quale perk dello stack (nutrizionista/sconti/Fit for
  Baite/eventi) spinge di più all'abbonamento?

**Metriche & gate**
| Segnale | Verde | Rosso |
|---|---|---|
| Influencer/gestori che accettano (su ~10) | ≥ 4 | ≤ 1 |
| Preferenza dichiarata | abbonamento per i perk | solo una tantum, nessun perk attira |
| Guide interessate al B2B (su ~10) | ≥ 3 | 0 |

---

## Tabella di marcia (≈3 settimane)
| Settimana | Attività |
|---|---|
| **1** | Deploy landing + setup pagamento (Gumroad/Stripe) + pixel/UTM. Outreach iniziale influencer (Test C). |
| **2** | Lancio a community Riccardo + partner (Test A). Avvio ads freddo (Test B). Survey attiva (Test C). |
| **3** | Raccolta dati, chiusura, **decisione go/no-go**. |

## Strumenti & costi indicativi
- Landing: Netlify (gratis) — file in `landing/`.
- Pagamenti: Gumroad (fee ~10%) o Stripe Payment Links (gratis + commissione).
- Analytics: Plausible/GA4 + Meta Pixel (gratis).
- Ads: **100–300 €** totali. Tempo: ~3 settimane part-time.

## Decisione finale (matrice)
- **A verde + B verde/giallo** → **PROCEDI** con il build nativo (con i perk validati).
- **A verde + B rosso** → **PIVOT**: prodotto per la community/affiliazione, niente
  ads; monetizza con B2B-guide, kit, partnership (non subscription consumer di massa).
- **A giallo** → **ITERA** offerta/prezzo/copy e ripeti A su un secondo segmento.
- **A rosso** → **NON costruire la app nativa.** Tenere uno strumento gratuito leggero
  per la community e reindirizzare l'investimento (es. su contenuti/servizi V&B).

> Tutte le soglie sono **punti di partenza ragionevoli**, da tarare con Mauro/Riccardo
> prima del lancio dei test.
