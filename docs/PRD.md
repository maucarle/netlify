# Specifiche & Requisiti — App calcolo calorico e nutrizione per trekking

> Documento di prodotto (PRD) per il prototipo Claude Design. NON include
> implementazione tecnica (esplicitamente fuori scope per ora).
> Nome prodotto: **Fuel Your Trek (FYT)** — scelto con Riccardo per aprire al
> mercato estero (lancio bilingue). *Nota: il primo prototipo è ancora "Kcalibro";
> va ri-brandizzato in FYT.*
> 👉 Le risposte di Riccardo alle 14 domande sono raccolte in
> [`risposte-riccardo.md`](./risposte-riccardo.md).

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

Decisioni già prese (Mauro + Riccardo):
- **Nome:** **Fuel Your Trek (FYT)** (ritirato "Kcalibro": chiudeva all'estero).
- **Mercato/lingua:** **bilingue IT+EN dal lancio** — il mercato è vuoto, due
  lingue aprono un bacino molto più ampio. Alimenti europei.
- **Pubblico:** escursionisti singoli (B2C). Guide/gruppi (B2B) = roadmap futura.
- **Confine free/premium:** **FREE = calorie totali + ripartizione macro +
  acqua/giorno** (pacchetto base per massimizzare gli iscritti). **PREMIUM =**
  categorie/menu concreto, lista spesa, **GPX**, ingombro, diete/allergeni,
  timing barrette.
- **Peso vs ingombro:** ottimizzazione del **peso** ora; **ingombro/spazio**
  nello zaino come feature **premium** (è la leva differenziante).
- **Focus d'uso:** giornaliere → contenuto **free** (spuntini/pranzi);
  multi-giorno, soprattutto **in tenda**, → **premium** (pasti completi: massimo
  problema di peso e ingombro).

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
calorie consumerai**, **come ripartire i macro** e **quanta acqua** ti serve.
Poi, in premium, **cosa portare** (menu/categorie), ottimizzato su peso e ingombro.

**In scope (MVP, free):** input biometrici, input percorso (manuale: km +
dislivello+), stima calorica, **calorie totali/giorno**, **ripartizione macro**,
**fabbisogno acqua** (con cenno sali/elettroliti). Niente menu né categorie con
grammi: quelle sono premium.

**Premium (vedi §5):** categorie/menu concreto con grammi, lista spesa, **import
GPX** (calcolo più preciso + timing), ottimizzazione **ingombro/volume**, menu per
**diete e allergeni**, opzione **"senza fornello"**, percorsi salvati. **Roadmap:**
modalità **guide/gruppi** (B2B), integrazione wearable/health.

---

## 4. Requisiti funzionali — MVP (Free)

### 4.1 Profilo biometrico (input utente)
- Sesso, età, altezza, peso. (Opzionali: livello di allenamento/condizione fisica.)
- Persistenza minima (profilo locale) per non reinserire ogni volta.

### 4.2 Definizione percorso
- **Free (manuale):** distanza (km), dislivello positivo (m), durata o giorni,
  tipo di terreno (battuto / misto / impervio), peso zaino (kg, input chiave Pandolf).
- **Opzionali (migliorano la precisione):** ritmo/passo, **stagione/temperatura**
  e **quota media** → soprattutto per acqua e quota calorica (clima/ambiente).
- **Premium:** **import traccia GPX** → calcolo molto più preciso (dislivello reale,
  pendenze) e abilita il **timing delle barrette** sui tratti di salita.

### 4.2-bis Preferenze (opzionali, alimentano i menu premium)
- **Dieta:** onnivoro / vegetariano / vegano / senza latticini.
- **Allergeni:** checklist dei principali (14 UE).
- **Senza fornello:** flag che limita ai cibi reidratabili ad **acqua fredda**.

### 4.3 Stima del consumo calorico
- Calcolo con **Pandolf (load carriage) + Mifflin-St Jeor BMR**.
- Output: **kcal totali** del percorso e **kcal/giorno**.
- Mostrare un range (es. ±10%) per onestà sul margine di errore.

### 4.4 Fabbisogno nutrizionale — **è il cuore del FREE**
- **Calorie totali e per giorno** da coprire con il cibo.
- **Ripartizione macro** consigliata per sforzo prolungato (carbo/grassi/proteine).
- **Fabbisogno idrico/giorno** + cenno **sali/elettroliti** (in primo piano, varia
  con clima/stagione — punto sottolineato da Riccardo).
- Questi tre output (calorie + macro + acqua) sono il **pacchetto gratuito** che
  massimizza gli iscritti.

### 4.5 Suggerimento alimentare → **spostato in PREMIUM**
Le **categorie di cibo con grammi**, la **densità calorica** e il **peso totale**
del cibo NON sono più nel free: vivono in premium (vedi §5). Nel free se ne mostra
solo un **assaggio bloccato** (premium preview) come CTA.

### 4.6 Output / riepilogo (free)
- Schermata riassuntiva esportabile/condivisibile: **kcal, macro, acqua**.
  Tono semplice e rassicurante per il neofita.
- CTA verso premium ("vuoi il menu pronto, la lista della spesa e l'ottimizzazione
  dello zaino?").

---

## 5. Requisiti funzionali — Premium (da prototipare come "preview")

- **Categorie di cibo con grammi** (ex §4.5) + indicatore densità calorica.
- **Menu concreto multi-giorno:** colazione/pranzo/cena/snack con **prodotti
  reali europei** (liofilizzati EU, prodotti da supermercato IT, barrette,
  frutta secca) — grammi, kcal, peso. Struttura sulla **filosofia di Riccardo**:
  colazione buona → giornata leggera (tanti spuntini) → **cena abbondante**.
- **Lista della spesa** generata dal menu.
- **Import GPX** → calcolo calorie più preciso e **timing delle barrette**
  (quando assumerle prima dei tratti di salita).
- **Scoring barrette:** punteggio % di idoneità all'hiking e momento ottimale
  della giornata (vedi `categorie-alimentari.md`).
- **Ottimizzazione ingombro/volume** (packability): oltre al peso, stima dello
  **spazio** occupato → il differenziatore unico vs competitor.
- **Diete e allergeni:** menu per onnivoro/vegetariano/vegano/senza latticini,
  filtro allergeni; opzione **"senza fornello"** (solo reidratazione ad acqua fredda).
- **Profili e percorsi salvati**, storico, riutilizzo menu.
- **Consigli "firma Riccardo"** + contenuti di **nutrizionisti/dietisti** partner.

### 5.1 Roadmap B2B — guide/gruppi
Pacchetto per operatori: **più profili da un unico account** (prezzo per profilo
più conveniente del premium singolo), per creare menu personalizzati ai propri
clienti. Accesso previa **verifica del tesserino** di operatore del settore.

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

## 7. Domande per Riccardo — ✅ RISPOSTE RICEVUTE

> Tutte e 14 le domande hanno avuto risposta: vedi
> [`risposte-riccardo.md`](./risposte-riccardo.md) per la sintesi e i link alle
> risorse. Le decisioni che ne derivano sono già recepite in §0–§6 e §15.
> Elenco originale conservato sotto come riferimento.

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

Wizard lineare, mobile-first, pensato per il neofita (bilingue IT/EN):

1. **Onboarding / profilo** → sesso, età, altezza, peso.
2. **Il tuo percorso** → distanza, dislivello, giorni, terreno, peso zaino
   (+ opzionali stagione/quota; GPX = premium).
3. **Risultato (FREE)** → calorie totali + per giorno (con range), **macro**,
   **acqua/sali**. È il traguardo del flusso gratuito.
4. **Cosa mangiare (PREMIUM PREVIEW, bloccata)** → categorie con grammi + peso cibo.
5. **Riepilogo** → schermata condivisibile (kcal/macro/acqua) + CTA premium
   (menu + lista spesa + ingombro + GPX + diete).

Schermate "premium preview" bloccate per **categorie/menu, lista spesa,
ottimizzazione ingombro, GPX/timing barrette**, così da testare la disponibilità
a pagare.

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

---

## 11. Naming (proposte)

Criteri: corto, memorabile, evocativo di montagna/energia, pronunciabile in
italiano, idealmente utilizzabile anche in inglese per i viaggi internazionali
di Riccardo. **Tutti i nomi richiedono verifica di dominio e marchio prima della
scelta** (vedi domande per Riccardo).

| Nome | Idea | Pro | Contro |
|---|---|---|---|
| **Fuel Your Trek (FYT)** ✅ | "fai il pieno per il tuo trek", acronimo FYT | Internazionale, coerente col lancio bilingue e con le app sport-nutrition, brandizzabile | Inglese (meno "caldo" in IT); verificare dominio/marchio |
| **Kcalibro** | *kcal* + *calibro* ("calibra le tue calorie") | Distintivo, italiano, racconta la funzione | Chiude al mercato estero → **scartato** |
| **TrailFuel** | "carburante da sentiero" | Internazionale, chiaro | Generico, "molto americano", dominio probabilmente occupato |
| **Vetta** | la cima | Pulito, italiano | Parola comune → marchio/dominio difficili |

**Decisione (Mauro + Riccardo): ✅ "Fuel Your Trek".** Apre al mercato estero,
coerente col lancio bilingue.

**Regole d'uso del marchio** (da analisi di mercato →
[`naming-fyt-analisi.md`](./naming-fyt-analisi.md)):
- Nei **testi** si scrive sempre **"Fuel Your Trek"** per esteso.
- **"FYT" solo come monogramma del logo**, mai come stringa testuale (in IT si legge
  "Fit"/"Fight" → typo).
- **🚫 Mai "FYT Outdoor":** collide con i bersagli softair **TMC "FYT outdoor"** che
  saturano la SEO italiana → cannibalizzazione.
- **Marchio descrittivo** → tutela debole: serve un **logo figurativo forte**
  (è ciò che si deposita); registrare domini `fuelyourtrek.it/.com`; **SEO locale**
  (non competere su "nutrizione in quota").
- **Tono di copy:** bilanciare l'energia di "Fuel" con i valori *lenti/consapevoli*
  di Vette e Baite.

*Restano da fare (esterni): verifica dominio/marchio (UIBM/EUIPO, Classi 39/41/9) e
ri-branding del prototipo (oggi ancora "Kcalibro").*

---

## 12. Modello di prezzo (ipotesi da validare)

**Ancoraggio competitivo:** Backcountry Foodie ~36–72 $/anno (≈ 33–66 €), tutto
a pagamento; Packstack core gratis. Il consumatore italiano è più sensibile al
prezzo: posizionarsi **leggermente sotto** i competitor USA, con un **free
generoso** che fa da acquisizione.

| Piano | Prezzo (ipotesi) | Cosa include |
|---|---|---|
| **Free** | 0 € | Calcolo calorico personalizzato, **ripartizione macro**, **fabbisogno acqua/sali**, 1 percorso alla volta (non salvato). *Le categorie/menu con grammi NON sono incluse (premium).* |
| **Pass Cammino** (one-time) | **2,99 €** sblocco singolo | Per il neofita occasionale: menu concreto + lista spesa + ottimizzazione peso per *un* trekking. Converte chi non vuole abbonarsi |
| **Premium** (abbonamento) | **4,99 €/mese** o **29,99 €/anno** | Menu concreti illimitati, lista spesa, ottimizzazione **ingombro**, diete/allergie, percorsi salvati e storico, contenuti "firma Riccardo" |
| **Pro / Guida** (roadmap B2B) | **~99–149 €/anno** | Pianificazione per gruppi, profili multipli, ripartizione carico, branding per la guida |

**Logica:** il *Pass Cammino* abbassa la barriera (micro-acquisto) e fa da ponte
verso l'abbonamento; l'**annuale scontato (~50%)** spinge la fidelizzazione;
il piano **Pro** monetizza il canale guide in futuro. Prezzi da validare con
test sulla disponibilità a pagare dei clienti reali di Riccardo (§9).

---

## 13. Categorie alimentari (bozza tassonomia MVP)

Tassonomia per il suggerimento §4.5. Per ogni categoria: ruolo nutrizionale,
esempi tipici reperibili in Italia/EU, densità calorica indicativa (kcal/100 g)
e nota su peso/packability. **Da validare con Riccardo** (cosa usano davvero sui
suoi trekking) e con un nutrizionista per i valori.

| Categoria | Ruolo | Esempi IT/EU | kcal/100 g | Note |
|---|---|---|---|---|
| **Carboidrati rapidi** | Energia immediata durante lo sforzo | Gel, gelatine, frutta disidratata, barrette energetiche, miele | ~300–400 | Pratici "in marcia"; attenzione al peso/zuccheri |
| **Carboidrati lenti** | Base energetica dei pasti | Cous cous/riso/pasta (anche liofilizzati), gallette, crackers, pane di segale | ~350–400 | Versioni disidratate = leggere; alcune richiedono fornello |
| **Grassi calorico-densi** ⭐ | Massima energia per grammo (chiave "ultralight") | Frutta secca (noci, mandorle), burro di arachidi, cioccolato fondente, olio EVO in tubetto, formaggio stagionato | ~500–700 | I migliori per risparmiare peso; saziano |
| **Proteine** | Recupero muscolare | Bresaola/carne secca, tonno in busta, legumi disidratati, formaggio, proteine in polvere | ~250–400 | Importanti nei multi-giorno |
| **Pasti pronti / liofilizzati** | Cena calda completa | Piatti liofilizzati EU (es. marche outdoor europee) | variabile | Leggeri ma voluminosi e costosi; richiedono acqua calda |
| **Snack salati / reintegro sali** | Sodio e palatabilità | Crackers, salatini, olive, frutta secca salata, parmigiano | ~400–550 | Combattono l'"affaticamento da dolce", reintegrano sodio |
| **Idratazione & integratori** | Acqua, elettroliti, energia liquida | Sali/elettroliti, maltodestrine, tè/caffè/orzo solubile | n/a | Non solo cibo: gestione acqua e sali |

⭐ I **grassi calorico-densi** sono la leva educativa principale: a parità di
calorie pesano molto meno → cuore del messaggio "ottimizza il peso".

---

## 14. Fonti dati per il database alimenti (valori nutrizionali, allergeni, peso, volume)

Da dove prendere i dati di prodotto. Sintesi per tipo di dato.

### 14.1 Prodotti confezionati (marca, kcal, macro, **allergeni**, peso netto)
- **OpenFoodFacts** ⭐ — fonte consigliata per il lancio. >3 mln prodotti, 200+
  Paesi, buona copertura Italia/EU. API gratuita, senza autenticazione. Include
  ingredienti, **allergeni** (tag EU), nutrienti, Nutri-Score/NOVA, immagini,
  **quantità/peso netto**, barcode (utile per scansione futura).
  ⚠️ **Licenza ODbL/DbCL (share-alike):** uso commerciale OK, ma i *miglioramenti*
  al DB vanno ricondivisi. Dato crowd-sourced → qualità variabile, va validato.
- **API commerciali** (alternativa/integrazione a pagamento):
  - **FatSecret Platform** — migliore copertura **europea/multilingua** (26 lingue,
    58 Paesi), allergeni e diete. Ha tier gratuito d'ingresso.
  - **Edamam** (~299 $/mese), **Spoonacular** (~300 $/mese), **Nutritionix**
    (~1.850 $/mese, focus USA). Più cari, meno necessari all'MVP.

### 14.2 Alimenti "generici"/sfusi (frutta secca, formaggi, pasta…)
- **CREA – Banca Dati Composizione Alimenti** (ex INRAN) — tabelle ufficiali
  **italiane**, consultabili online. Autorevoli per i valori nutrizionali base.
- **BDA-IEO** (studi epidemiologici) — file Excel su **donazione/licenza** il cui
  importo dipende dall'uso commerciale → da contattare per i diritti.
- **CIQUAL/ANSES** (Francia, aperto) e rete **EuroFIR** — utili per EU.
- **USDA FoodData Central** — gratis ma USA, fallback per generici.

### 14.3 Allergeni — quadro normativo
- Riferimento UE: **Reg. 1169/2011**, lista dei **14 allergeni** obbligatori.
  OpenFoodFacts già taggati su questa base → mappare su questi 14.

### 14.4 Volume/ingombro (la feature premium difficile)
**Nessun DB nutrizionale espone il volume in modo affidabile.** Opzioni:
- **GS1 / GDSN (Global Data Model)** — standard ufficiale con **dimensioni
  pacco** (altezza/larghezza/profondità, peso netto/lordo). È il sistema
  produttori↔retailer: richiede membership GS1 / accesso a un data pool → oneroso.
- **Approccio pragmatico consigliato per l'MVP/premium iniziale:**
  1. stima il volume da **peso × densità** per categoria (es. frutta secca,
     liofilizzati, barrette) — tabella di densità curata internamente;
  2. per i top-prodotti, **curazione manuale** delle dimensioni dalla confezione
     (schede prodotto retailer/produttore);
  3. il dato esatto via GS1 solo se/quando il volume diventa core a pagamento.

### 14.5 Strategia dati consigliata
- **MVP (free, categorie):** non serve un DB prodotti pieno — basta una
  **tabella curata di categorie** con kcal/100 g e densità medie (§13), derivabile
  da CREA/OpenFoodFacts.
- **Premium (menu concreti):** **OpenFoodFacts** come base prodotti EU + eventuale
  **FatSecret** per copertura/qualità, + **curazione manuale** di un set di
  prodotti "da trekking" (liofilizzati, barrette) con peso e **volume** stimato.
- Verificare le **licenze** (ODbL share-alike; donazione BDA) prima di pubblicare.

---

## 15. Indicazioni operative di Riccardo (sintesi)

Estratto dalle risposte ([`risposte-riccardo.md`](./risposte-riccardo.md)) con
impatto diretto su contenuti e prototipo.

### 15.1 Filosofia alimentare "firma Riccardo" (valore distintivo)
> Colazione buona → **giornata leggera** con tanti piccoli spuntini → **cena
> abbondante** la sera per compensare. Ideale con pernotto in struttura; in tenda
> più difficile (qui contano peso/ingombro). Acqua e sali in primo piano. **No gel**:
> preferire cibi solidi. Frutta fresca solo per le giornaliere (deperibile).

### 15.2 Preset cammini (per i percorsi pronti)
- **Italia:** Via degli Dei, Cammino dei Borghi Silenti, Cammino dei Briganti,
  Via Vandelli, tour multi-giorno in Dolomiti e sulle Alpi.
- **Estero:** trekking d'**alta quota** e in **ambienti umidi** (Sud-est asiatico).
- **Escludere** i cammini lunghissimi tipo Santiago (letteratura satura, pubblico
  ridotto). Assunto: ciò che funziona per una settimana vale anche per un mese.

### 15.3 Cibi di riferimento (dettaglio in `categorie-alimentari.md`)
Barrette frutta secca / flapjack avena-zuccheri, **frutta disidratata**, frutta
secca → ottimi e biodisponibili. Sera: **liofilizzati** (pasta/riso) ad acqua →
alta densità calorica, basso peso/ingombro.

### 15.4 Business & lancio
- **B2B guide** (§5.1): pacchetti multi-profilo con verifica tesserino.
- **Volto/firma:** Riccardo disponibile; coinvolgere **nutrizionisti/dietisti**
  partner per contenuti approfonditi.
- **Canali di lancio:** fiera **"Passo dopo passo"** @ DumBO (Bologna, aprile);
  community Instagram (**Cammini d'Italia** → festival a settembre; **Yunca
  Festival**, Monte di Bibele).
