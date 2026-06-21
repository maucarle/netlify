# Specifiche & Requisiti — App calcolo calorico e nutrizione per trekking

> Documento di prodotto (PRD) per il prototipo Claude Design. NON include
> implementazione tecnica (esplicitamente fuori scope per ora).
> Nome di lavoro: **TrailFuel** (da validare con Riccardo).

---

## Context

Riccardo, guida alpina e guida di viaggi, riceve quasi sempre dai partecipanti
ai suoi trekking — esperti e non — la stessa domanda: *"cosa porto da mangiare
per questo percorso, dato lo spazio nello zaino e il giusto apporto calorico in
rapporto a peso, età, ecc.?"*. L'idea è un'app che:
1. **stima il consumo calorico personalizzato** del percorso (dati biometrici + percorso),
2. **propone un'alimentazione** che copra quel fabbisogno,
3. **ottimizza peso e ingombro** nello zaino.

Obiettivo di questa fase: definire **specifiche e requisiti** (cosa fa l'app,
per chi, free vs premium, dati necessari, domande aperte da chiudere con
Riccardo) per alimentare un prototipo in Claude Design. La parte tecnica di
implementazione è volutamente esclusa.

Decisioni già prese con il committente:
- **Mercato:** Italia/Europa prima (lingua italiana, alimenti europei).
- **Pubblico:** escursionisti singoli (B2C). Guide/gruppi = roadmap futura.
- **Output menu:** all'MVP basta *target calorie/macro + categorie di cibo*;
  evoluzione verso menu concreto + lista spesa come livello **premium**.
- **Peso vs ingombro:** ottimizzazione del **peso** ora; **ingombro/spazio**
  nello zaino come feature **premium futura** (è la leva differenziante).

---

## 1. Analisi di mercato (sintesi)

**Cosa esiste già:**

| Prodotto | Cosa fa | Modello | Limiti per il ns. mercato |
|---|---|---|---|
| **Backcountry Foodie** (USA) | Dietista + calcolatore calorie + meal planner (250+ ricette, 1000+ prodotti) + lista spesa | A pagamento ~36–72 $/anno, no free reale | Inglese, database alimenti **USA**, niente ingombro |
| **Packstack** (USA) | Peso/base weight zaino + calcolatore calorie (Pandolf + Mifflin-St Jeor) | Core gratis, premium futuro | Focus attrezzatura, nutrizione debole, inglese |
| **Calcolatori web** (StepMassive, FarOut, FitCalcs, Omni, **Calcolo.online** IT) | Solo stima kcal/acqua del percorso | Gratis, single-purpose | Nessuna pianificazione menu, nessun account/personalizzazione |
| **LighterPack / Packwizard / MyPacks** | Liste attrezzatura e peso | Gratis | Zero nutrizione |
| **Eat This Much** | Meal planner generico per kcal/macro | Freemium | Non pensato per trekking |

**Standard tecnico di settore:** consumo calorico stimato con **equazione di
Pandolf (load carriage)** — pesa corpo, peso zaino, velocità, pendenza, fattore
terreno — combinata con **BMR Mifflin-St Jeor**. È l'approccio da adottare anche
noi (credibile e validato).

**Tre lacune = opportunità:**
1. **Italia/Europa scoperta** — competitor tutti USA/inglese, database alimenti USA.
2. **Ingombro/volume ignorato** — tutti ottimizzano solo il *peso* (kcal/grammo),
   nessuno lo *spazio* nello zaino. → futuro differenziatore premium.
3. **Manca un vero freemium integrato** che unisca calcolo personalizzato +
   proposta alimentare in un unico flusso pensato per il neofita.

**Posizionamento:** *"Il calcolatore nutrizionale per i cammini, in italiano,
firmato da una guida alpina"* — autorevolezza (Riccardo) + semplicità per il
non esperto + dati europei.

**Fonti consultate (giugno 2026):** Backcountry Foodie (backcountryfoodie.com),
Packstack (packstack.io), StepMassive, FarOut Guides, FitCalcs, Omni Calculator,
Calcolo.online, REI Expert Advice.

---

## 2. Personas (B2C)

- **Il neofita organizzato** — prima esperienza di trekking di più giorni; vuole
  una risposta semplice "quanto e cosa mangio". Target principale del free.
- **L'escursionista appassionato** — fa più uscite/anno, vuole ottimizzare peso e
  varietà, disposto a pagare per menu concreti e lista spesa. Target premium.
- **(Roadmap) La guida** — Riccardo & colleghi: pianifica per gruppi con profili
  diversi. Fuori MVP, ma le scelte di prodotto non devono precluderlo.

---

## 3. Concept & scope MVP

**Una frase:** inserisci i tuoi dati e il percorso → l'app ti dice **quante
calorie consumerai** e **quanto/che tipo di cibo portare** (target calorico,
macro e categorie alimentari), ottimizzato sul **peso**.

**In scope (MVP, free):** input biometrici, input percorso, stima calorica,
fabbisogno giornaliero, ripartizione macro, suggerimento categorie di cibo e
quantità/peso indicativo, fabbisogno acqua.

**Fuori scope MVP (→ premium/roadmap):** menu con prodotti reali + ricette +
lista della spesa; ottimizzazione **ingombro/volume**; pianificazione per
gruppi (guide); import GPX automatico; account multi-percorso salvati;
integrazione wearable/health.

---

## 4. Requisiti funzionali — MVP (Free)

### 4.1 Profilo biometrico (input utente)
- Sesso, età, altezza, peso. (Opzionali: livello di allenamento/condizione fisica.)
- Persistenza minima (profilo locale) per non reinserire ogni volta.

### 4.2 Definizione percorso (input manuale all'MVP)
- Distanza (km), dislivello positivo (m), durata stimata o giorni.
- Tipo di terreno (sentiero battuto / misto / impervio) → fattore terreno.
- Peso dello zaino (kg) — input chiave del modello Pandolf.
- (Opzionale) ritmo/passo medio, temperatura/stagione, quota media.

### 4.3 Stima del consumo calorico
- Calcolo con **Pandolf (load carriage) + Mifflin-St Jeor BMR**.
- Output: **kcal totali** del percorso e **kcal/giorno**.
- Mostrare un range (es. ±10%) per onestà sul margine di errore.

### 4.4 Fabbisogno nutrizionale
- **Target calorico giornaliero** da coprire con il cibo.
- **Ripartizione macro** consigliata per sforzo prolungato (es. carbo/grassi/proteine).
- **Fabbisogno idrico** indicativo (e cenno a sali/elettroliti).

### 4.5 Suggerimento alimentare (livello base)
- **Categorie di cibo** consigliate (es. carboidrati a rilascio rapido/lento,
  grassi calorico-densi, proteine, snack salati) con **quantità/peso indicativo**
  per raggiungere il target.
- Indicatore di **densità calorica** (kcal/100 g) come educazione dell'utente:
  regola pratica "punta ad almeno ~400–450 kcal/100 g per risparmiare peso".
- **Peso totale del cibo** stimato per il percorso (leva "ultralight").

### 4.6 Output / riepilogo
- Schermata riassuntiva esportabile/condivisibile (kcal, macro, acqua, peso cibo,
  categorie). Tono semplice e rassicurante per il neofita.
- CTA verso premium ("vuoi il menu pronto e la lista della spesa?").

---

## 5. Requisiti funzionali — Premium (roadmap, da prototipare come "preview")

- **Menu concreto multi-giorno:** colazione/pranzo/cena/snack con **prodotti
  reali europei** (liofilizzati EU, prodotti da supermercato IT, barrette,
  frutta secca) — grammi, kcal, peso.
- **Lista della spesa** generata dal menu.
- **Ottimizzazione ingombro/volume** (packability): oltre al peso, stima dello
  **spazio** occupato → il differenziatore unico vs competitor.
- **Preferenze e diete:** vegetariano/vegano, senza glutine, allergie, intolleranze.
- **Profili e percorsi salvati**, storico, riutilizzo menu.
- **(Roadmap successiva)** modalità **gruppo/guida** (B2B): N persone con profili
  diversi, somma fabbisogni, ripartizione carico tra zaini.
- **Consigli personalizzati "firma Riccardo"** (contenuti esperti / masterclass).

---

## 6. Dati e contenuti richiesti (da preparare, non tecnici)

- **Database alimenti europeo** (anche piccolo all'MVP): per categoria, con
  kcal/100 g, macro e — per il premium — peso confezione e volume/densità.
  Possibili fonti da valutare: prodotti liofilizzati EU, marche italiane,
  open data nutrizionali (es. CREA/INRAN, OpenFoodFacts) — *da validare licenze*.
- **Tabelle fattori terreno** e parametri del modello Pandolf (riferimenti pubblici).
- **Linee guida macro/idratazione** per sforzo prolungato — validate da Riccardo
  e/o da un nutrizionista (credibilità = asset del brand).
- **Copy in italiano** semplice, orientato al neofita.

---

## 7. Domande aperte per Riccardo (per definire i CONTENUTI)

Da chiudere prima/durante il prototipo:

**Percorso & uso**
1. L'app serve più per **giornaliere** o **multi-giorno** (rifugi/tenda)? Cambia
   l'enfasi su pasti vs snack e sul peso totale.
2. Tipi di cammino tipici dei suoi clienti (alpinismo leggero, cammini lunghi tipo
   Santiago, trekking himalayani, ciaspolate)? Definisce i preset.
3. Vuole l'**import GPX/percorso** o basta l'inserimento manuale di km/dislivello?

**Nutrizione**
4. Esiste una sua "filosofia alimentare" da montagna da codificare (es. cosa
   consiglia sempre / sconsiglia)? Diventa il valore distintivo.
5. Quali **categorie e cibi** vede più spesso usati/utili sui suoi trekking?
6. Quanto pesa il tema **idratazione/sali** nei suoi consigli?
7. Vincoli ricorrenti dei clienti: **diete** (veg, celiachia), allergie, cibo
   "no-cook" senza fornello?

**Business / contenuti**
8. Cosa deve restare **gratis** per attrarre, e cosa giustifica il **premium**?
   (Ipotesi attuale: free = calcolo + categorie; premium = menu concreto, lista
   spesa, ingombro.)
9. Vuole apparire come **volto/firma** dell'app (autorevolezza)? Apre a contenuti
   editoriali (consigli, masterclass).
10. Interessa un canale **guide/gruppi** (B2B) in futuro? Influenza le scelte di
    struttura dati dei profili.

**Localizzazione**
11. Solo italiano all'inizio o serve presto anche l'inglese per i suoi viaggi
    internazionali?

---

## 8. Flusso utente per il prototipo (Claude Design)

Wizard lineare, mobile-first, pensato per il neofita:

1. **Onboarding / profilo** → sesso, età, altezza, peso.
2. **Il tuo percorso** → distanza, dislivello, giorni, terreno, peso zaino.
3. **Risultato calorie** → kcal totali + kcal/giorno (con range) + acqua.
4. **Cosa mangiare** → target kcal/macro + categorie con quantità e **peso cibo**.
5. **Riepilogo** → schermata condivisibile + CTA premium (menu+lista+ingombro).

Schermate "premium preview" (bloccate) per menu concreto, lista spesa e
ottimizzazione ingombro, così da testare la disponibilità a pagare.

---

## 9. Metriche di successo (per validare il concept)

- % utenti che completano il wizard fino al riepilogo.
- % che tocca la CTA premium / si iscrive a waitlist premium.
- Feedback qualitativo dei clienti reali di Riccardo (test sul campo).

---

## 10. Verifica / prossimi passi

Questa fase produce un **documento**, non codice; la "verifica" è di prodotto:
1. **Review con Riccardo** delle domande §7 e validazione delle linee guida
   nutrizionali §6 (idealmente con un nutrizionista per credibilità).
2. **Conferma del confine free/premium** (§4 vs §5).
3. **Prototipo in Claude Design** sul flusso §8; test con utenti reali (clienti
   di Riccardo) per validare comprensibilità e percezione di valore.
4. Solo dopo: definizione della parte tecnica (modello di calcolo, database
   alimenti, piattaforma) — **fuori scope ora**.
