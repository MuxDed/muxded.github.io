---
name: Mikhail Dyuldin
description: One engineer's departures board. Offer, record and proof posted as split-flap rows.
colors:
  board: "#0b0c0e"
  flap: "#1b1d21"
  seam: "#060708"
  rule: "#25282d"
  ink: "#ecebe4"
  body: "#b9b8b0"
  dim: "#8a8b86"
  amber: "#f4c430"
  amber-hi: "#ffd659"
typography:
  display:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "calc(clamp(30px, calc((100vw - 2 * var(--gutter)) / 10), 64px) * 1.12)"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "calc(clamp(19px, calc((100vw - 2 * var(--gutter)) / 16), 30px) * 1.12)"
    fontWeight: 700
    lineHeight: 1
  action:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(24px, 3.1vw, 44px)"
    fontWeight: 600
    lineHeight: 1.1
  title:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "25px"
    fontWeight: 600
    lineHeight: "30px"
    letterSpacing: "0.02em"
  figure:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: "30px"
  status:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "30px"
    letterSpacing: "0.1em"
  code:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: "30px"
    letterSpacing: "0.08em"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.52
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  focus: "2px"
  button: "4px"
  tile: "7%"
spacing:
  gutter: "clamp(20px, 4.45vw, 64px)"
  tile-gap: "10%"
  row-y: "26px"
  col-gap: "32px"
  section: "clamp(120px, 14vw, 200px)"
  section-final: "clamp(140px, 16vw, 240px)"
  gate-top: "64px"
components:
  tile-large:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.tile}"
    width: "clamp(30px, calc((100vw - 2 * var(--gutter)) / 10), 64px)"
    height: "calc(var(--tile) * 1.44)"
  tile-small:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.tile}"
    width: "clamp(19px, calc((100vw - 2 * var(--gutter)) / 16), 30px)"
    height: "calc(var(--tile) * 1.44)"
  tile-amber:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.amber}"
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.board}"
    rounded: "{rounded.button}"
    padding: "18px 24px 18px 28px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hi}"
    textColor: "{colors.board}"
  gate-mail:
    textColor: "{colors.amber}"
    typography: "{typography.action}"
  gate-mail-hover:
    textColor: "{colors.amber-hi}"
  row-code:
    textColor: "{colors.dim}"
    typography: "{typography.code}"
    width: "64px"
  row-item:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    width: "330px"
  row-detail:
    textColor: "{colors.body}"
    typography: "{typography.body}"
  row-figure:
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    width: "230px"
  row-status:
    textColor: "{colors.amber}"
    typography: "{typography.status}"
    width: "140px"
  row-status-quiet:
    textColor: "{colors.dim}"
  label:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
---

# Design System: Mikhail Dyuldin

## Overview

**Creative North Star: "The Departures Board"**

The whole site is one engineer's departures board. The offer, the shipped record and the proof are posted as ruled board rows; the name and the availability status are spelled in split-flap tiles that cycle through characters before settling. Behind everything, a dim full-viewport board keeps flipping its own rows and thins out as the visitor scrolls, until a single row remains at the final section: the next departure is the visitor's project, and the gate is the email address.

The world is dark, flat and dense in the way a real station board is: two inks on black, one type family, hard horizontal rules, no imagery. Personality comes from the mechanism (tiles, seams, flips, columns) rather than from decoration. Amber is the signal colour of the board and is spent only on status and on the action.

**Key Characteristics:**
- Two inks on board black: flap white for characters, signal amber for status and the action only.
- One family, Archivo: condensed uppercase (Archivo Narrow) for everything that lives on the board, normal-width Archivo for short prose.
- Split-flap tiles with a hairline seam across the middle, sized from the viewport.
- Content is tabular: ruled rows with CODE / ITEM / DETAIL / (FIGURE) / STATUS columns.
- A living background board that converges to one row as the page ends.
- Flat: no shadows, no gradients except the background board's edge mask.

## Colors

A near-black two-ink palette with one warm signal colour; every neutral is a step on the same cool-black to warm-white axis.

### Primary
- **Signal Amber** (`amber`): the board's status lamp. Used for STATUS column values, the AVAILABLE FOR CONTRACT tiles, the YOUR PROJECT tiles, the gate email link, the primary button fill, focus rings and text selection. Never used for decoration or for headings that are not a status or the action.
- **Lit Amber** (`amber-hi`): hover state of the amber action (button fill, gate email link). Never a resting colour.

### Neutral
- **Board Black** (`board`): page ground, the strip's background, button label colour, selection text.
- **Flap Grey** (`flap`): tile face, one step lighter than the board so tiles read as physical plates.
- **Seam Black** (`seam`): the hairline that cuts every tile across its middle; darker than the board.
- **Board Rule** (`rule`): 1px horizontal rules between rows, under the strip, above the gate; also the scrollbar thumb.
- **Flap White** (`ink`): tile characters, row items and figures, strong values (facts, strip time).
- **Body Grey** (`body`): prose: row detail, lede, closing line.
- **Dim Grey** (`dim`): labels, column headers, row codes, quiet statuses, background-board characters.

### Named Rules
**The Signal Rule.** Amber marks status or the action, nothing else. If a piece of amber would not answer "is he available?" or "how do I reach him?", it is the wrong colour.

**The Two Ink Rule.** Characters are flap white or amber; prose steps down to body grey and meta to dim grey. No third hue enters the board.

## Typography

**Display Font:** Archivo Narrow (with Arial Narrow, sans-serif), self-hosted, weights 500 to 700.
**Body Font:** Archivo (with system-ui, sans-serif), self-hosted, weights 400 to 500.

**Character:** One family in two widths. The condensed cut carries the board: uppercase, tracked, mechanical. The normal width carries the few sentences of prose so they read as human voice beside the board. Tabular numerals are on site-wide.

### Hierarchy
- **Display** (Narrow 700, glyph at 1.12 x tile width, tile width clamp(30px, content-width / 10, 64px), line-height 1): large tiles for the name and NEXT DEPARTURE / YOUR PROJECT.
- **Headline** (Narrow 700, glyph at 1.12 x tile width, tile width clamp(19px, content-width / 16, 30px)): small tiles for section heads (SERVICES, SHIPPED, TALKS, NOW, ORIGIN), the role line (capped at 25px tiles) and the status value.
- **Action** (Narrow 600, clamp(24px, 3.1vw, 44px), 1.1): the gate email address.
- **Title** (Narrow 600, 25px / 30px, 0.02em, uppercase): row ITEM cells. 21px on small screens.
- **Figure** (Narrow 700, 21px / 30px, uppercase): row FIGURE cells. 17px on small screens.
- **Status** (Narrow 700, 16px / 30px, 0.1em, uppercase): row STATUS cells, right-aligned. 14px on small screens.
- **Code** (Narrow 700, 15px / 30px, 0.08em): row CODE cells, three-letter codes.
- **Lede** (Archivo 400, clamp(18px, 1.5vw, 21px), 1.52, max 38ch): the one hero paragraph.
- **Body** (Archivo 400, 17px / 26px in rows, 1.55 elsewhere, max 60ch): row details and short prose. 16px / 25px on small screens.
- **Label** (Narrow 600, 13px, 0.14em, uppercase): strip, field labels (Status, Gate, From, Mode, Work), column headers (12px), footer.
- **Button** (Narrow 700, 17px, 0.08em, uppercase).

### Named Rules
**The Board Case Rule.** Everything posted on the board is uppercase Archivo Narrow; anything that reads as a sentence is sentence-case Archivo. Never set prose in the narrow cut or board items in the normal width.

**The Shared Line Rule.** Board row cells share a 30px line so CODE, ITEM, FIGURE and STATUS align on one baseline; DETAIL is offset 2px down (28px top padding) to sit on the same line. On small screens DETAIL drops to its own line, 6px below the first.

**The Ragged Edge Rule.** Prose (lede, row details, closing line) uses pretty wrapping so no line ends on a lone word; row ITEMs use balanced wrapping so a two-line item splits evenly.

## Layout

A single centred column, max 1440px, with a fluid side gutter of clamp(20px, 4.45vw, 64px). Every section is a `wrap` above the fixed background board (z-index 1 over 0).

- **Strip:** a thin header row, three labels spread (DEPARTURES / CONTRACT ENGAGEMENTS / DUBLIN hh:mm), 32px top and 22px bottom padding, 1px rule beneath, opaque board background.
- **Hero:** a two-column grid (fluid left, auto right; 48px column gap) filling the viewport under the strip. Left: name in large tiles over two rows, role in small tiles, lede. Right: STATUS label, amber status tiles, a facts list (72px label column). Bottom row spans both: the gate.
- **Gate:** a ruled row (1px rule above, 64px margin above, 40px / 56px padding) holding the GATE label, the amber email link and the primary button pushed to the far right.
- **Boards:** each content section starts clamp(120px, 14vw, 200px) below the last, a small-tile heading 40px above a full-width ruled table.
- **Final:** clamp(140px, 16vw, 240px) top padding, large tiles, an unruled gate, a closing line, then the footer with a rule 40px from its top.

### Board row table
| Column | Width | Style |
|---|---|---|
| CODE | 64px | dim code type |
| ITEM | 330px | ink title type, flaps |
| DETAIL | fluid, max 60ch | body grey prose, slides in |
| FIGURE (SHIPPED, TALKS only) | 230px | ink figure type, flaps |
| STATUS | 140px, right-aligned, no wrap | amber status type, flaps; dim when quiet |

Cells are padded 26px top and bottom with 32px to the right (none on the last column). Rows are separated by 1px rules, with a closing rule under the last row. Column headers are dim labels at 12px.

### Responsive (max-width 900px)
- Hero collapses to one column with 32px top padding, a 26px row gap and no forced viewport height. The status block moves after the gate (name, role, lede, gate, status). The role line and lede sit 18px apart.
- The facts list sits 16px below the status tiles, with 8px between items.
- The gate loses its top margin and is padded 22px / 40px with a 14px gap. The button sits left.
- The strip drops its middle label.
- Tables drop their header row; each row becomes a three-column grid (auto / 1fr / auto, 14px gap): CODE, ITEM and STATUS share the first line, DETAIL and FIGURE span full width beneath. Rows are padded 22px / 24px.
- Tile sizes need no breakpoint: they are derived from content width with clamped floors (30px large, 19px small).
- Background board rows tighten from 30px to 22px apart.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes from three tonal steps (seam darker than board, board, flap lighter than board) and from layering: the dim background board sits fixed behind the content at 16% opacity, faded further toward the left by a horizontal mask (25% to 60% to full), so text on the left half reads over near-black.

### Named Rules
**The Plate Rule.** A tile is a plate one tonal step above the board with a seam through it. It is never lifted with a shadow, border or glow.

## Shapes

Square-shouldered and mechanical. Tiles are 1 : 1.44 rectangles with corners at 7% of the tile width, a seam of max(1px, 2% of tile width) across the exact middle, and gaps of 10% of tile width between tiles and between words (a word gap is a blank tile). The primary button has a 4px radius; focus rings have a 2px radius. Everything else (rules, strip, rows, gate) is straight 1px horizontal lines; there are no vertical rules, cards or boxes.

## Components

### Split-flap tiles (signature)
The defining element. Text marked to flap is split into words and characters; inside a tile group each character gets its own plate, outside one (table cells) characters flip as bare type.
- **Shape:** see Shapes; size set by the large or small tile scale.
- **Colour:** flap face, flap white characters; amber characters in the amber variant.
- **Reveal:** when the row enters view (15% visible, 6% bottom inset) each cell cycles 3 to 7 random characters (A-Z, 0-9) at 55ms intervals before landing on its target. Cells start staggered left to right at 26ms each plus up to 40ms jitter. Every flip is a 90ms rotateX(-75deg) to flat, from 35% opacity.
- **Accessibility:** the visual cells are hidden from assistive tech; the original text is kept as a visually hidden copy, or carried by the parent's aria-label.

### Board rows
Ruled table rows following the board row table above. ITEM, FIGURE and STATUS flap; DETAIL slides in.
- **Status values:** BOOKING and LANDED and HELD in amber; IN PROGRESS, DEPARTED and years in dim (quiet).

### Primary button
- **Shape:** gently squared (4px), padding 18px 24px 18px 28px, a 20px square arrow icon 12px after the label.
- **Default:** amber fill, board-black uppercase narrow label.
- **Hover (fine pointer only):** fill to lit amber, arrow nudges 3px right (200ms).
- **Active:** scales to 0.97 (160ms).
- **Focus:** 2px amber outline, 4px offset.

### Gate email link
The address itself is the primary action, set large in amber action type, wrapping anywhere. Hover draws a 2px amber underline from the left (260ms) and lifts the colour to lit amber.

### Labels and facts
Dim tracked uppercase labels name fields the way a board labels columns: STATUS, GATE, and a facts list (FROM / MODE / WORK) whose values are 17px Archivo 500 in flap white.

### Strip (navigation)
The only header. No links; a live Dublin clock (24-hour, Europe/Dublin, refreshed every 15s) sits at the right in flap white.

### Background board
A fixed, pointer-inert layer of small 22 x 32px dim tiles (22px glyphs, 2px gaps), one row per ~62px of viewport height (minimum 5), filled with payment and flight departure lines.
- **Live:** every 1.4s a random visible row re-flips to a new line, characters staggered 18ms apart; the chance of an update drops as scroll progress rises, and updates stop when the page is hidden. The latest write wins: a scheduled flip whose target has since changed is dropped, so overlapping updates never leave mixed text.
- **Converge:** rows kept = max(1, round(n x (1 - progress)^1.6)), kept symmetrically around the centre row. Removed rows fade to 0 and compress to 60% height over 900ms.
- **Final row:** when one row remains it rises to 40% opacity (other rows sit at 16%) and flips to NEXT YOUR PROJECT GATE 1 BOARDING. On every scroll it is moved into the empty band above the final board: the centre of the final section's top padding, kept at least 24px inside the viewport. Scrolling back restores its line.
- Rebuilt on resize (200ms debounce).

### Motion grammar
- One easing for everything that moves: cubic-bezier(0.23, 1, 0.32, 1). Colour-only changes (button fill, link colour) use plain ease.
- Flips 90ms; flip cadence 55ms; UI state 160 to 260ms; prose reveals 700ms; background rows 900ms.
- Prose (row details, lede, facts, closing line) slides in: from 14px down, transparent and clipped from below, to settled over 700ms, staggered 70ms per table row plus 80ms.
- Motion only runs when JavaScript runs; without it everything is shown settled.
- **Reduced motion:** no flips, no cycling, no slide-ins; text is set directly, the background board does not update on a timer, and row fades shorten to 300ms.

## Do's and Don'ts

### Do:
- **Do** post new content as board rows with a three-letter CODE, an uppercase ITEM, a prose DETAIL and a STATUS.
- **Do** spend amber only on status values and on the email action.
- **Do** size tiles from the content width with the existing clamps (large: /10, 30 to 64px; small: /16, 19 to 30px) rather than fixed sizes.
- **Do** keep the seam on every tile, including the background board.
- **Do** keep the flip reveal accessible: visual cells hidden, real text available to assistive tech, settled text under reduced motion.
- **Do** keep 1px board-rule horizontals as the only dividers.

### Don't:
- **Don't** introduce a third ink or a second accent hue.
- **Don't** add shadows, glows or borders to tiles or containers.
- **Don't** set sentences in uppercase narrow type or board items in normal-width Archivo.
- **Don't** wrap content in cards; the board is rows, not tiles of projects.
- **Don't** move anything on a curve other than the house ease-out (plain ease is kept for colour changes only), or add motion that is not a flip, a slide-in, a row fade or a button press.
