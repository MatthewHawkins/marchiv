# MARCHIV

Marketing site for **MARCHIV** — a luxury handbag lending house in Prague
(Malá Strana). Members pay monthly to borrow authenticated designer bags,
swap at will, and may buy from the archive.

> *Borrowed, beautifully.*

## Status

The landing page is built. Everything else is planned but not implemented —
see [`docs/PLAN.md`](docs/PLAN.md) for the roadmap, infrastructure decisions
and data-sourcing research.

Routes that exist:

| Route         | State |
| ------------- | ----- |
| `/`           | Built — the homepage direction from the brand board |
| `/membership` | Built — the three tiers shown as the rooms they're named for, a comparison, what's included, and the questions people ask |
| anything else | Brand-styled 404 ("Not on the shelves"), so unbuilt links land somewhere deliberate rather than on a stock error page |

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

Node 20.9+ is required (Next.js 16).

## Stack

- **Next.js 16** (App Router, Turbopack, React 19) — one stack to carry the
  marketing site, the member portal, and later a mobile app over the same API.
- **TypeScript**, strict.
- **Plain CSS** — CSS Modules per component over a token layer. No utility
  framework: the design is bespoke enough (0.36em tracking, true-semicircle
  arch radii, a 120px display face) that utilities would be arbitrary values
  all the way down.
- **`next/font`** self-hosts Bodoni Moda, Cormorant Garamond and Jost, with
  `latin-ext` so Czech diacritics are covered when the CZ copy lands.

## Layout of the code

```
app/
  tokens.css        the brand foundations — colour, type, space, shape
  globals.css       reset and base elements only
  layout.tsx        fonts, metadata
  page.tsx          landing page composition
  not-found.tsx     brand-styled 404
components/
  Nav, Hero, Steps, Archive, ArchiveCard, Salon, SiteFooter
  ui/               Arch, Button, Kicker, StatusTag, TextLink, Wordmark
lib/
  types.ts          Bag, BagStatus, Tier, Membership
  archive.ts        test inventory
  memberships.ts    tiers, comparison terms, inclusions, FAQ
  format.ts         display formatting (refs, prices, status)
  routes.ts         the intended information architecture
public/images/      photography from the brand handoff
public/images/bags/ stand-in product shots + CREDITS.md
```

### Page width

Two tokens, and mixing them up indents content twice:

- `--max-page` (1296px) on an element **nested inside** a gutter-padded parent.
- `--max-shell` (1296px + two gutters) on an element that **carries the gutter
  itself**.

Get this right and every page's content sits on one vertical — nav, body and
footer — at any viewport width.

### The arch

The brand has exactly one shape: a rectangle whose top is a true semicircle
of radius `width / 2`. `components/ui/Arch.tsx` expresses it once, driven by
a single aspect-ratio variable:

```css
aspect-ratio: var(--arch-ar);
border-radius: 50% 50% 0 0 /
  calc(50% * var(--arch-ar)) calc(50% * var(--arch-ar)) 0 0;
```

Because the vertical radius is written as a percentage of height scaled by
the aspect ratio, the arc stays a true semicircle at any size. Pass `ratio`
as a prop for a fixed shape, or set `--arch-ar` from a class when it needs to
change across breakpoints (inline styles can't be overridden by a media
query). This reproduces every arch in the handoff exactly — hero `648px`,
cards `999px`, salon `264px`, step niche `60px`.

## Changing the brand

`app/tokens.css` is the whole design system. It is a transcription of the
brand foundations document, complete rather than minimal — the Malá Strana
Stucco palette is reserved for packaging and campaign work and is
deliberately unused on the site. Swapping a value there propagates
everywhere; no component hard-codes a colour or a type size.

## Deviations from the handoff

Three deliberate, all noted in the code:

1. **Salon headline max-width** — the handoff says 560px, but *"Come under
   the vault."* sets to 617px at 72px Cormorant, forcing a third line and
   breaking the couplet. Raised so the two-line setting holds.
2. **Hero copy below 768px** — the statement leaves the photograph and sets
   on plaster. Overlaid, the copy block covered 87% of the arch on a 390px
   screen, which buried the photography the brand is built on.
3. **Bag `Nº 0203`** — the mock labels its house `LADY DIOR`; recorded as
   `DIOR`, since the bag name already carries the line. Placeholder
   inventory either way.

The handoff's status-tag pill (tinted background, 6px 12px) is specified but
unused — the homepage mock sets status as bare tracked text. Add the pill
when the archive listing page lands.

## A note on the handoff assets

`facade-wide.jpg` shipped in the handoff's `assets/` folder and is described
in its README as "interior/exterior". It is neither — it is a **brand
moodboard for a different name**, headed "L' ARCHIVE | BRAND MOODBOARD", with
its own palette swatches and style notes. It has been removed from
`public/`, since anything in there is served publicly. The original is still
in the handoff bundle if it is wanted.

Two of the remaining interiors, `salon.jpg` and `vault.jpg`, are the same
room from the same angle. The Trezor tier therefore uses the garden salon,
which is both visually distinct and the room a top-tier member would
actually be received in.

## Test data

The four pieces on the homepage shelf are licensed stock photographs of real
bags (see `public/images/bags/CREDITS.md`). Each is **named after the bag
actually in its photograph** rather than after the four pieces the brand
board mocked up, so nothing on the shelf is mislabelled. One caveat: the
Dolce&Gabbana attribution is read from the silhouette and plaque shape, not
from legible lettering — verify it before it is anything but test data.

The membership figures under `terms` in `lib/memberships.ts` — swap counts,
delivery scope, salon access, buyout percentages — are working estimates
written to make the page concrete. None are agreed, and the buyout
percentages in particular should not be published until the utilisation and
insurance numbers in `docs/PLAN.md` are modelled.

## Not done yet

Placeholders that need real input before launch: product photography shot to
a consistent list on plaster backgrounds, the street address, prices,
inventory, a Trezor-tier piece on the shelf (none of the stock photography
was grail enough to carry it), and the choice of logo lockup — the handoff
carries four studies and one should be picked and refined before signage or
print.
