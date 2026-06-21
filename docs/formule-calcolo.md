# Bozza modello di calcolo (per la futura parte tecnica)

> Riferimento per quando si passerà all'implementazione. Formule **verificate su
> fonti pubbliche** (Pandolf, Santee, Mifflin-St Jeor). I numeri d'esempio sono
> illustrativi; i parametri (fattori terreno, uplift, euristiche acqua/macro) vanno
> tarati e validati con un nutrizionista prima del lancio. Unità SI / metriche.

---

## 1. Metabolismo basale — Mifflin-St Jeor (BMR)

```
BMR = 10·peso(kg) + 6.25·altezza(cm) − 5·età(anni) + s
  s = +5   (uomo)
  s = −161 (donna)
```
Risultato in **kcal/giorno**. Usato per la quota "a riposo" delle ore non in marcia.

---

## 2. Consumo in marcia — equazione di Pandolf (load carriage)

Potenza metabolica in **watt**:

```
M = 1.5·W + 2·(W+L)·(L/W)² + η·(W+L)·(1.5·v² + 0.35·v·G)
```
- `W` = peso corpo (kg)
- `L` = peso zaino (kg)
- `v` = velocità (m/s)
- `G` = pendenza (%) — positivo in salita
- `η` = fattore terreno (adimensionale)

### 2.1 Fattori terreno η (mappati ai 3 livelli dell'app)
| Livello UI | Esempio | η |
|---|---|---|
| Battuto | strada/sentiero compatto | ~1.0 |
| Misto | sterrato, sentiero sconnesso | ~1.2 |
| Impervio | pietraia, erba alta, fango | ~1.5 |
*(In letteratura: asfalto 1.0, sterrato 1.1, boscaglia leggera 1.2, fitta 1.5, sabbia ~2.1, neve variabile.)*

### 2.2 Correzione discesa — Santee et al. (2003)
Per `G < 0` Pandolf sottostima: sottrarre un fattore di correzione `CF`:
```
CF = η · [ (G·(W+L)·v)/3.5  −  ((W+L)·(G+6)²)/W  +  (25 − v²) ]
M_corretto = M − CF
```
Valida a v ≥ ~1.12 m/s e carichi ≤ ~27 kg; tende a sovra-correggere oltre il −12% di pendenza → applicare con clamp.

### 2.3 Conversione in calorie
```
kcal_marcia = M(watt) · 0.01433 · minuti_di_marcia
```
*(1 W ≈ 0.01433 kcal/min.)*

### 2.4 Stima velocità e tempo
Se l'utente dà i **giorni** e non il passo: stimare `v` da distanza/dislivello con
regola tipo **Naismith/Tobler** (es. ~4 km/h in piano + tempo extra per dislivello),
oppure chiedere il passo medio nelle opzioni avanzate. Pendenza media:
`G ≈ (dislivello_m / distanza_m) · 100`.

---

## 3. Fabbisogno calorico giornaliero

```
kcal_giorno = kcal_marcia_giorno
            + BMR · (ore_non_marcia / 24)
            + (uplift opzionale)
```
- **Uplift:** Pandolf sottostima del 12–33% nei carichi/contesti reali → opzione di
  margine (+15% default) per non sotto-alimentare. Esporre come "stima prudente".
- Mostrare in UI un **range ±10%** (onestà sul margine d'errore).

---

## 4. Da calorie a cibo

### 4.1 Ripartizione macro (default sforzo prolungato, da validare)
| Macro | Quota kcal | kcal/g |
|---|---|---|
| Carboidrati | ~55% | 4 |
| Grassi | ~30% | 9 |
| Proteine | ~15% | 4 |

Grammi macro = `kcal_macro / kcal_per_grammo`.

### 4.2 Grammi per categoria
Dato il target kcal e una **distribuzione tra categorie** (vedi
[`categorie-alimentari.md`](./categorie-alimentari.md)):
```
grammi_categoria = kcal_assegnate_categoria / (kcal_per_100g / 100)
peso_cibo_totale = Σ grammi_categoria
```

### 4.3 Volume / ingombro (premium)
```
volume_litri = Σ ( grammi_categoria / densità_categoria(g/L) )
```
Metrica di efficienza spazio: `kcal/L` (più alta = meno ingombro). Permette di
suggerire sostituzioni (es. liofilizzato → grassi densi) che riducono i litri a
parità di calorie.

---

## 5. Acqua (euristica)
```
acqua_giorno ≈ base(2 L) + 0.5–1 L per ora di marcia intensa  (regolata da temperatura/quota)
```
Aggiungere nota su **sali/elettroliti** per uscite lunghe o calde. Valori da validare.

---

## 6. Pseudocodice (sintesi)
```
BMR        = mifflin(sesso, peso, altezza, eta)
v, G, t    = derivaDaPercorso(distanza, dislivello, giorni|passo)
M          = pandolf(W, L, v, G, etaTerreno)
if G < 0: M = max(M - santee(...), 0)
kcalMarcia = M * 0.01433 * t_min
kcalGiorno = kcalMarcia/giorni + BMR*(oreRiposo/24)
kcalGiorno *= (1 + upliftOpzionale)
macro      = ripartisci(kcalGiorno)        # 55/30/15
perCat     = grammiPerCategoria(kcalGiorno, distribuzione)
pesoCibo   = somma(perCat.grammi)
volume     = somma(perCat.grammi / densita)   # premium
acqua      = euristicaAcqua(t, temp, quota)
```

---

## 7. Riferimenti
- Pandolf et al. (1977) — load carriage equation.
- Santee et al. (2003) — correzione discesa (grade negativo).
- Mifflin, St Jeor et al. (1990) — BMR.
- Tarare/validare i parametri con dati reali e con un nutrizionista prima del lancio.
