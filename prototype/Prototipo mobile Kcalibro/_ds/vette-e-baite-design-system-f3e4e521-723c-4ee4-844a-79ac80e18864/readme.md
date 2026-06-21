# Vette e Baite — Design System

> A token-driven design system for **Vette e Baite**, an Italian trekking
> cooperative. Slogan: **#portatorisaniditrekking** ("healthy carriers of
> trekking"). Everything here is consumable by design agents to produce
> on-brand interfaces, slides and assets.

---

## Brand & product context

**Vette e Baite** ("Peaks and Mountain Huts") is a **Società Cooperativa Sociale**
based in Bologna that organises guided outdoor experiences across Italy and abroad,
sold through a WooCommerce shop. It is a collective ("un collettivo di
*portatori sani di trekking*") that promotes frequenting the mountains
*consapevolmente* — consciously, at a slow pace ("a passo lento").

### Products / surfaces
This is essentially **one product: the marketing + booking website** (WordPress /
Elementor / WooCommerce), with these content areas:

- **Eventi** — Escursioni Giornaliere (day hikes), Trek Weekend, Ferrate e Alpinismo
  (via ferrata / alpinism), Trekking e Cammini (multi-day), Viaggi Estero (foreign
  trips, in partnership with Human Trip), Talk.
- **Corsi** — Corso di Escursionismo, Fit For Baite.
- **Noleggio Canoe** — canoe / SUP rental & paddle outings.
- **Shop / Merchandising** — "Vesti Vette e Baite" (felpe, t-shirt in organic
  cotton, technical wear, buff, mugs).
- **Chi Siamo, Carta Fedeltà (loyalty), Blog, F.A.Q., Contatti.**

Events carry availability states reused throughout the UI: **Confermato**,
**Ultimi posti**, **Lista d'attesa**, **Sold-out**.

### Sources
- Live site: **https://www.vetteebaite.it/** (primary reference).
- Partner for foreign trips: https://www.humantrip.it/
- Built in production with Elementor 3.23 + WooCommerce; Google Fonts via Elementor.
- Social: facebook.com/vetteebaite · instagram.com/vetteebaite

> ⚠️ No codebase or Figma was provided — only the public website. The website's
> images are hot-link protected and could not be downloaded into the project, and
> its exact CSS (colours/fonts) could not be read. See **Caveats** below.

---

## Content fundamentals

**Language:** Italian, warm and evocative; light, playful irony. English is sprinkled
in for event *naming* ("Hike & Dinner", "Hike & Beer", "Wild Canoa & SUP Trek",
"Stay tuned", "Sunset Paddle").

- **Voice = a collective, never an individual.** "noi siamo", "ci distinguiamo",
  "le nostre uscite". It speaks as *we*, inviting *you* along ("Diventa il prossimo",
  "vieni a celebrare con noi"). Friendly, peer-to-peer — not corporate.
- **Tone:** outdoorsy, romantic about nature, a little cheeky. Titles read like
  invitations and small stories: *"Dove la roccia tocca il cielo"*, *"La montagna
  vuota delle Alpi Liguri"*, *"Un nuovo giorno a metà tra due regioni"*.
- **Naming pattern:** `Format – Evocative subtitle`, e.g.
  *"Amaca Trek – Notte sotto alle stelle del Corno alle Scale"*.
- **Casing:** Section eyebrows and CTAs are often **UPPERCASE** ("LE NOSTRE USCITE",
  "DIVENTA IL PROSSIMO", "STAY TUNED"). Titles use sentence/Title case.
- **CTAs** are short, action-first verbs: *Scopri, Prenota, Iscriviti, Conosci,
  Diventa il prossimo*.
- **The hashtag** `#portatorisaniditrekking` is the signature — used as a giant
  headline and a sign-off. The `#` is rendered in an accent colour.
- **Emoji:** used sparingly and only socially (🏔️ 🥾) — never in formal product copy.
- **Values surface in copy:** *consapevole* (conscious), *a passo lento*, *ideali*,
  social cooperative, environmental care (CETS, organic cotton, AITR member).

---

## Visual foundations

A warm, earthy, **mountain-and-rifugio** palette — pine green + sand paper + a
terracotta accent — paired with a friendly crafted grotesk. The mood is natural,
hand-made, unpretentious; the opposite of cold tech minimalism.

- **Colour** (see `tokens/colors.css`): **Pine green** `--green-700 #1f472f` is the
  primary (forests, the logo's reversed mark sits on it). **Warm sand/paper**
  `--sand-100 #f4efe3` is the default page surface; cards are a near-white warm
  `--card-white`. **Terracotta clay** `--clay-500 #cc6b35` is the accent (sentieri,
  sunsets, the `#`). Supporting **amber** (membership/highlights), **lake blue**
  (canoe/SUP/acqua). Text is a warm near-black `--ink-900`.
- **Type** (`tokens/typography.css`): Display = **Bricolage Grotesque** (friendly,
  slightly quirky grotesque) for big headlines incl. the hashtag; Text = **Hanken
  Grotesk** (clean humanist sans). Tight tracking on display (−0.02em); generous
  line-height on body (1.5–1.65). Uppercase tracked **eyebrows** (0.16em) above
  most sections.
- **Imagery:** **full-bleed mountain photography** is the hero of nearly every
  surface — warm, natural, sunlit landscapes (no heavy filters, no B&W). Photos
  always carry a **bottom protection scrim** (`--scrim-bottom`) so white text and
  status pills read. No illustration system; no decorative gradients beyond the
  green hero wash and photo scrims.
- **Layout:** centred max-width containers (`--container-max 1200`,
  `--container-wide 1360`) with fluid gutters; generous vertical section rhythm
  (`--section-y`). Event cards in responsive auto-fill grids (3 across desktop).
  Alternating sand and pine-green bands give rhythm.
- **Cards:** warm white, **18px radius** (`--radius-lg`), 1px sand border + soft
  warm shadow (`--shadow-sm`/`md`). Photo sits flush at the top with overlaid date
  chip and status badge.
- **Corners:** generous. CTAs are **pills** (`--radius-pill`); cards `lg`; inputs `md`.
- **Buttons / hover:** primary = pine fill, accent = terracotta fill, secondary =
  green outline. Hover **lifts** (`translateY(-2px)`) and darkens the fill; press
  **shrinks** slightly (`scale(0.97)`). Cards lift `-4px` and deepen shadow on hover.
- **Shadows:** soft, warm-tinted (rgba of `--ink-900`), never harsh black.
- **Motion:** quick, gentle ease-out (`--ease-out`, 140–220ms). Fades and small
  lifts; no bounces, no infinite loops.
- **Transparency / blur:** the sticky header uses a translucent sand background with
  `backdrop-filter: blur`; the booking modal scrim blurs the page behind.
- **Focus:** soft 3px ring in brand green/clay (`--ring-brand` / `--ring-accent`).

---

## Iconography

The production site is Elementor (`e_font_icon_svg`) and uses a lightweight
**line-icon** vocabulary (location pins, clocks, calendars, cart, social glyphs) —
no custom illustrated icon set, no emoji in product UI.

- **In this system** icons are a **substitute simple 2px stroked line set** defined
  inline in `ui_kits/website/components.jsx` (`window.VEBIcons`: cart, user, menu,
  chevron, arrow, pin, clock, trail, elevation, calendar, social). They are
  Lucide-adjacent in weight/feel. ⚠️ This is a substitution — the originals could
  not be extracted. Swap for Lucide via CDN, or the brand's real icons, if needed.
- **Logos / imagery** reference the live `vetteebaite.it` CDN directly (the colour
  and white wordmarks, hero, event photos, partner logos). They render in a normal
  browser but are **not** localised — see Caveats.
- **Emoji:** only social/incidental (🏔️ 🥾); avoid in formal copy.

---

## Index / manifest

**Root**
- `styles.css` — global entry (consumers link this). `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `effects.css`, `base.css`.
- `readme.md` — this file. · `SKILL.md` — Agent-Skills wrapper.

**Components** (`components/`, namespace `window.VetteEBaiteDesignSystem_f3e4e5`)
- `core/` — **Button**, **StatusBadge**, **Tag**, **Eyebrow** (`core.card.html`)
- `event/` — **EventCard**, **SectionHeading** (`event.card.html`)
- `forms/` — **Input**, **NewsletterForm** (`forms.card.html`)

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- Colors: pine, sand, accents, event status, semantic surfaces
- Type: display, body/headings, eyebrow & labels
- Spacing: scale, radii, shadows
- Brand: logo, voice & slogan, imagery & scrim

**UI kit** (`ui_kits/`)
- `website/` — interactive home → event detail → booking flow. See its `README.md`.

---

## Caveats — please help me iterate

I built this from the **public website only** (no codebase / Figma), and the site
actively blocks asset extraction. The structure, content, voice and component
behaviour are solid, but three foundations are **informed interpretations**, not
verified brand truth:

1. **Colours** — the pine-green / sand / terracotta palette is my interpretation
   (anchored only on the white-logo-on-dark fact). Likely close, but exact brand
   hex values are unconfirmed. *Please share the official palette.*
2. **Fonts** — Bricolage Grotesque + Hanken Grotesk are **substitutes**; the real
   Google Fonts used by Elementor couldn't be read. *Please confirm or send the
   real font families / files.*
3. **Logo & imagery** — referenced via the live CDN (hot-link protected, so they
   render in a browser but aren't localised, and couldn't be inspected here).
   *Please upload the official logo files (SVG/PNG) and any approved photography.*

Tell me which of these to correct first and I'll re-theme the whole system from the
tokens outward — it's a one-file change to retheme.
