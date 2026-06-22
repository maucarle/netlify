# FYT — Motore di calcolo

Modulo **JS puro, zero dipendenze** che implementa `docs/formule-calcolo.md`
(Pandolf + Santee + Mifflin-St Jeor → calorie, macro, acqua, peso e volume cibo).
Pensato per essere agganciato al prototipo quando diventerà funzionante.

## Uso

```js
import { computePlan } from "./fyt-calc.mjs";

const profile = { sesso: "U", peso: 72, altezza: 178, eta: 34 };
const route = { distanzaKm: 18, dislivelloM: 1100, giorni: 2,
                terreno: "misto", pesoZaino: 9, temperatura: 18, quotaM: 1200 };

const plan = computePlan(profile, route);
// plan.free    -> kcal, macro, acqua   (contenuto gratuito)
// plan.premium -> categorie, peso, volume/ingombro
```

Demo + sanity check: `node engine/demo.mjs`.

## Cosa restituisce

- **free**: `kcalTotali`, `kcalGiorno`, `range` (±10%), `macro` (g e kcal), `acquaGiornoL`.
- **premium**: `categorie` (grammi/kcal/litri), `pesoCiboGiornoG`, `pesoCiboTotaleG`,
  `volumeGiornoL` (ingombro).

## Parametri tarabili (da validare con un nutrizionista)

- `options.uplift` (default **0.15**) — margine perché Pandolf sottostima del 12–33%.
- `TERRAIN_FACTOR` (battuto/misto/impervio = 1.0/1.2/1.5).
- `MACRO_SPLIT` (55/30/15) e `DEFAULT_CATEGORY_MIX`.
- `CATEGORIES` (kcal/100 g e densità) — allineati a `docs/categorie-alimentari.md`.
- Stima tempo: regola di **Naismith** (12 min/km + 6 min/100 m D+).

> ⚠️ I numeri sono **stime**. I valori di default sono plausibili ma vanno calibrati
> su dati reali prima del lancio. La versione premium con **GPX** userà la pendenza
> reale segmento-per-segmento invece della pendenza media.
