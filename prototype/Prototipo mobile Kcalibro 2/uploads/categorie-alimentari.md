# Tabella categorie alimentari — pronta per il prototipo

> Tabella operativa per il **suggerimento alimentare** (PRD §4.5) e per
> l'**ottimizzazione peso/ingombro**. I valori sono **indicativi e medi**, da
> validare con un nutrizionista; le densità andranno affinate con dati reali
> (OpenFoodFacts/CREA, vedi PRD §14). Servono come default sensati per far
> "funzionare" il prototipo e i calcoli dimostrativi.

## Come leggere le metriche

- **kcal/100 g** — densità calorica classica (più alta = più leggera a parità di calorie).
- **Densità media (g/L)** — quanto "pesa" un litro di quel cibo nello zaino (proxy del volume).
- **kcal/kg** = `kcal/100 g × 10` → **efficienza-PESO** (più alta = porti meno grammi).
- **kcal/L** = `kcal/kg × densità(g/L) / 1000` → **efficienza-VOLUME/INGOMBRO**
  (più alta = occupa meno spazio). *Questa è la metrica chiave per la futura
  feature ingombro.*

## Tabella

| Categoria | Ruolo | Esempi IT/EU | kcal/100 g | Macro prevalente | Densità (g/L) | kcal/kg (peso) | kcal/L (volume) |
|---|---|---|---|---|---|---|---|
| **Carboidrati rapidi** | Energia immediata in marcia | **Frutta disidratata** (fonte eccellente), barrette frutta secca / flapjack avena, miele | ~340 | Carboidrati | ~750 | 3.400 | ~2.550 |
| **Carboidrati lenti** | Base energetica dei pasti | Cous cous/riso/pasta (anche liofilizzati), gallette, crackers, pane di segale | ~370 | Carboidrati | ~500 | 3.700 | ~1.850 |
| **Grassi calorico-densi** ⭐ | Massima energia per grammo e per litro | Frutta secca (noci, mandorle), burro d'arachidi, **cioccolato fondente**, olio EVO in tubetto, formaggio stagionato | ~580 | Grassi | ~850 | 5.800 | ~4.930 |
| **Proteine** | Recupero muscolare | Bresaola/carne secca, tonno in busta, legumi disidratati, formaggio, proteine in polvere | ~320 | Proteine | ~550 | 3.200 | ~1.760 |
| **Pasti liofilizzati** | Cena calda completa | Piatti liofilizzati outdoor (marche EU) | ~400 | Misto | ~200 | 4.000 | ~800 |
| **Snack salati / sali** | Sodio + palatabilità | Crackers, salatini, olive, frutta secca salata, parmigiano | ~480 | Misto (grassi/carbo) | ~350 | 4.800 | ~1.680 |
| **Idratazione & integratori** | Acqua, elettroliti, energia liquida | Sali/elettroliti, maltodestrine, tè/caffè/orzo solubile | n/a | — | n/a | n/a | n/a |

## Insight chiave (il messaggio dell'app)

- **Grassi calorico-densi (cioccolato, frutta secca, olio): vincono su entrambi** —
  ~5.800 kcal/kg e ~4.930 kcal/L. Sono il cuore del consiglio "ottimizza zaino".
- **Pasti liofilizzati: trappola del volume.** Ottimi sul peso (~4.000 kcal/kg) ma
  pessimi sul volume (~800 kcal/L, i più ingombranti). → spiega perché l'app, in
  premium, ottimizzerà anche l'**ingombro**, non solo il peso.
- **Carboidrati lenti**: economici e versatili ma poco efficienti su peso e volume →
  da bilanciare con i grassi.

## Esempio di calcolo (dimostrativo)

Fabbisogno **3.000 kcal/giorno** coperto con mix tipico → ~**650–700 g** e
~**0,9–1,1 L** di cibo al giorno. Spostando 200 kcal dai liofilizzati ai grassi
densi si risparmiano ~**0,2 L** di zaino a parità di calorie: è esattamente il
tipo di ottimizzazione che l'app renderà visibile.

## Indicazioni di Riccardo (da recepire nei contenuti)

- **Frutta fresca:** solo per le **giornaliere** (alta deperibilità nei multi-giorno).
- **Sera (multi-giorno):** **liofilizzati** pasta/riso ad acqua → alta densità
  calorica, basso peso/ingombro: la soluzione cena d'elezione.
- **No gel:** preferire **cibi solidi** abbinati a buona idratazione.
- **Top snack:** barrette frutta secca / flapjack avena-zuccheri, **frutta
  disidratata**, frutta secca → calorici e biodisponibili.
- **Acqua/sali/elettroliti** in primo piano, in base a clima e stagione.

## Barrette: scoring & timing (feature premium)

Riccardo suggerisce una **declinazione dei tipi di barretta** con un **punteggio %
di idoneità all'hiking** e il **momento ottimale** della giornata. Bozza:

| Tipo barretta | Idoneità hiking | Quando | Perché |
|---|---|---|---|
| **Zuccheri/carbo rapidi** (gusto-energia) | ~70% | **Prima dello sforzo maggiore** (es. inizio salita) | Boost veloce a disponibilità immediata |
| **Flapjack avena + zuccheri** | ~90% | In marcia / spuntini | Energia mista rapida+lenta, saziante |
| **Frutta secca + frutta disidratata** | ~95% | Spuntini durante il giorno | Calorica, biodisponibile, grassi buoni |
| **Proteica** | ~60% | **Fine tappa / recupero** | Recupero muscolare, non per il boost in salita |

> Con la **traccia GPX** (premium) si conosce *quando* arriva la salita maggiore →
> l'app può indicare l'**orario preciso** in cui assumere la barretta giusta.
> *Percentuali indicative, da validare con nutrizionista.*

## Note d'uso per il prototipo

- Le **categorie con grammi** e il **peso totale** sono ora contenuto **premium**
  (il free mostra solo calorie + macro + acqua): usa `kcal/100 g` per stimare i
  grammi dato il target.
- Per la **preview ingombro premium**: usa `kcal/L` per mostrare il **volume**
  stimato e l'ottimizzazione.
- Tutti i numeri sono **placeholder credibili**: vanno marcati come "stima" in UI
  e raffinati con dati reali prima del lancio.
