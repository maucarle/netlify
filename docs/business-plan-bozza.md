# Business plan — bozza (Fuel Your Trek)

> Prima stesura, da completare con i numeri di Mauro/Riccardo. I valori con `⟨…⟩`
> sono **placeholder da definire**. Coerente con `business-model-partnership.md`,
> `validation-plan-3-test.md` e il PRD. **Niente è validato finché non passano i 3 test.**

## 1. Sintesi (executive summary)
**Fuel Your Trek** è un'app per escursionisti che calcola il **consumo calorico
personalizzato** di un cammino e propone **cosa mangiare** (menu, peso e ingombro
nello zaino). Free: calorie + macro + acqua. Premium: menu concreto, lista spesa,
ottimizzazione ingombro, GPX, **+ una membership di perk** (nutrizionista, sconti
attrezzatura, programmi Fit for Baite, sconti eventi). Mercato di lancio Italia
(bilingue IT/EN), promosso via community/influencer outdoor e dalla rete di
Vette e Baite.

## 2. Problema
Chi fa trekking — soprattutto multi-giorno in tenda — sa di dover assumere
~2.000–3.000 kcal/giorno, ma **non sa tradurle in cibo reale**, leggero e poco
ingombrante. I tool esistenti sono calcolatori secchi (solo kcal) o piattaforme
USA a pagamento, in inglese e con database alimenti americano.

## 3. Soluzione & differenziatori
- Calcolo credibile (Pandolf + Mifflin-St Jeor) **+ traduzione in cibo** (il pezzo
  che manca agli altri).
- **Ottimizzazione dell'ingombro**, non solo del peso (unico sul mercato).
- **Italiano/europeo** + **firma di una guida** (Riccardo) + **nutrizionista**.
- Premium come **membership che si ripaga** (sconti su eventi/programmi/attrezzatura).

## 4. Mercato (TAM/SAM/SOM — da quantificare)
- **TAM:** escursionisti/camminatori IT (poi EU). ⟨stima da fonti: praticanti
  trekking in Italia⟩.
- **SAM:** chi fa **multi-giorno** e pianifica il cibo (segmento che paga). ⟨stima⟩.
- **SOM 12–18 mesi:** raggiungibile via community/influencer + rete V&B. ⟨stima⟩.
- *Nota pre-mortem:* segmento pagante in IT potenzialmente piccolo e stagionale →
  da verificare col Test B/C prima di investire.

## 5. Modello di ricavo (più flussi)
1. **Pass Cammino 2,99 €** (one-time) — hook consumer, adatto alla stagionalità.
2. **Abbonamento Premium** ⟨4,99 €/mese · 29,99 €/anno⟩ — membership con perk.
3. **B2B guide** ⟨99–149 €/anno⟩ — pacchetti multi-profilo (verifica tesserino).
4. **Affiliazione/partner attrezzatura** — commissioni + spazi banner.
5. **Revenue share Fit for Baite/BIS** — accesso scontato a programmi di prep. atletica.
6. **Lead-gen V&B** — l'app porta clienti a eventi, corsi e **trek guidati**.
7. **Pacchetto consulenze nutrizionista** — margine sul servizio.

## 6. Go-to-market / distribuzione
- **Non Riccardo-centrico:** premium gratis a **gestori community/influencer** in
  cambio di promozione (B2B2C).
- Lancio su eventi (**Passo dopo passo** @ DumBO) e community IG (Cammini d'Italia,
  Yunca Festival).
- Rete **Vette e Baite** come base + credibilità.
- SEO **locale/geografica** (non "nutrizione in quota") — vedi `naming-fyt-analisi.md`.

## 7. Struttura dei costi
- **Sviluppo nativo iOS+Android** (appalto) — ⟨€ una tantum⟩ + manutenzione ⟨€/anno⟩.
- **Backend/API + database alimenti** (OpenFoodFacts gratis; eventuale FatSecret).
- **Contenuti**: nutrizionista, copy, foto, validazione valori.
- **Marketing/social** — ⟨budget⟩.
- **Legale**: deposito **marchio figurativo** + domini (`fuelyourtrek.it/.com`).

## 8. Unit economics (da compilare dopo i test)
- **CAC** (da Test B): ⟨€/utente da freddo⟩.
- **Conversione free→pagante** (da Test A): ⟨%⟩.
- **ARPU/anno**: mix Pass + abbonamento + affiliazione ⟨€⟩.
- **LTV** e **LTV/CAC** (target > 3). ⟨calcolo⟩.
- **Break-even**: ⟨n. paganti necessari per coprire build + costi annui⟩.

## 9. Roadmap
1. **Ora — validazione (3 test, ~3 settimane):** landing + pre-vendita + ads + survey.
   *Gate:* go/no-go (`validation-plan-3-test.md`).
2. **Se GO — MVP nativo:** free completo + paywall, Pass + abbonamento, 1–2 perk
   attivi (nutrizionista o sconti). Pilota con community partner.
3. **Crescita:** GPX/timing, ingombro, diete/allergeni, più partner, EN, B2B guide.
4. **Scala:** mercato EU, espansione perk e affiliazioni.

## 10. Rischi & mitigazioni (dal pre-mortem)
| Rischio | Mitigazione |
|---|---|
| Distribuzione solo bolla Riccardo | Canale influencer/community (premium-to-manager); Test B |
| Free risolve già il bisogno | Premium = menu "dove comprare" + stack perk; Test A |
| Frequenza/stagionalità bassa | Pass 2,99 € + membership che si ripaga con sconti |
| Credibilità dati | Validazione nutrizionista integrata nel premium |
| Build prematuro brucia budget | **3 test prima** di appaltare lo sviluppo |
| Naming/SEO (FYT) | Regole marchio + logo figurativo + SEO locale |

## 11. Team
- **Mauro** — owner/prodotto. **Riccardo** (guida, Vette e Baite) — contenuti, volto,
  rete, partnership. **Nutrizionista/dietista** partner — credibilità. **BIS** —
  Fit for Baite. **Sviluppatore** — da appaltare (post-validazione).

## 12. Fabbisogno / investimento
- Validazione: **~300–500 €** (ads + tool) — adesso.
- Build + lancio MVP (se GO): ⟨€⟩ — solo dopo i gate.

> Documento vivo: aggiornare i `⟨placeholder⟩` man mano che arrivano i dati dei test
> e gli accordi con i partner.
