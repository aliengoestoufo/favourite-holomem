# My Favourite Hololive Members

A fan page covering every hololive generation and unit — no branch grouping (Gen 0 through holoX, AREA15/HOLORO/holoH3RO for Indonesia, Myth through Justice, ReGLOSS, FLOW GLOW), since hololive itself has moved away from splitting talent into separate branches. The nav is a floating glass capsule pinned to the top center — it stays put while you scroll, has a soft glowing edge, and a light-catching shimmer that follows your cursor around inside it. A slowly-spinning glow ring sits above the headline, ready for a real logo. Each section heading (and each card) carries a small flag badge — 🇯🇵 for the Japan-based generations, 🇮🇩 for the Indonesia units, 🌐 for English. Click any member's box and a profile popup opens with their full body art, name, and a bio. Background is a soft white field with big blurred blue circles drifting around slowly. A glass "back to top" button appears bottom-right once you've scrolled down a bit, and the whole page uses a custom curvy cursor instead of the default arrow.

Built with plain HTML, CSS, and JS — no frameworks, no build step, nothing to install.

## What's in here

- `index.html` – the page structure
- `style.css` – all the styling (blob background, glass nav/cards/modal, cursor, animations)
- `script.js` – the member data and all the interactive bits (nav pills, cursor-following shimmer, modal, cycling between members, back-to-top)
- `hand_open.svg` / `hand_closed.svg` – the source cursor art, kept here for reference/editing (the page itself doesn't load these files — they're embedded directly inside `style.css`, see below)
- `LICENSE`, `README.md` – the usual

## Running it

Just open `index.html` in a browser. That's it. If you want live-reload while editing, any local server works fine too (e.g. VS Code's Live Server extension, or `python3 -m http.server`).

## Fonts

This uses a deliberate mix instead of just one or two:

- **Fredoka** — the big gradient headline, rounded and friendly but still readable at that size
- **Unbounded** — section headings and member card names, bold and a bit architectural for contrast against Fredoka
- **Space Grotesk** — nav pills and the small badge text in the popup, clean and a little technical
- **Manrope** — everything else (body copy, descriptions) — kept plain on purpose so the page doesn't get noisy
- **Flavors** — just the small decorative "hololive fan page" line above the headline, used sparingly since it's a lot of personality for a whole sentence
- **Hachi Maru Pop** — the ホロライブ katakana line under the header, picked for that rounded, cute look

A note on that: I couldn't embed the exact dafont file you linked — dafont fonts usually come with restrictive licenses and I can't host/verify one from here — so Hachi Maru Pop (a proper Google Font) was the closest cute/cool katakana-capable substitute.

## The cursor

`:root` in `style.css` (lines 15-16) defines two cursor variables — `--cursor-default` (open hand, for the regular cursor) and `--cursor-pointer` (closed fist, for anything clickable). These are your `hand_thin_small_open.svg` / `hand_thin_small_closed.svg` files, embedded directly as data URIs so the page doesn't need to load separate image files at runtime — the two `.svg` files kept in this folder are just for reference if you want to edit the artwork later. The hotspot — the two numbers right after the closing quote, e.g. `... 14 12, auto` — is set to roughly the center of the palm; nudge those two numbers if the click point feels off. If you'd rather have the plain system cursor back, delete the `cursor:` lines under `html,body` and the `a, button, .card, ...` rule near the top of the file.

## The logo

There's a slowly-spinning glowing ring (`.logo-mark` in `index.html`/`style.css`) sitting above the headline, on purpose left as a placeholder — hololive's actual logo is trademarked, so it's not something I can source or embed on your behalf. To drop your real one in:

1. Put your logo file in the project folder.
2. In `index.html`, find `<div class="logo-mark" aria-hidden="true"></div>` and add an image inside it: `<img src="logo.png" alt="hololive" style="width:100%; height:100%; object-fit:contain; position:relative; z-index:1;">`.
3. The spin animation is on the outer ring, so your logo will spin right along with it. Adjust the speed via `animation: logo-spin 26s linear infinite;` in `style.css` — bigger number = slower spin.

## Flags / region badges

Each section heading and card tag has a small circular badge instead of a plain dot — 🇯🇵 for the Japan-based generations, 🇮🇩 for the three Indonesia units, 🌐 for English. These are set per-section via the `flag` field in the `sections` array in `script.js`, so if a section ever needs to change (or you add a new one), just set its `flag` there.

## Images

Each member has 3 photo slots wired up in the popup gallery (the little numbered thumbnails under the main image).

## Customizing

- **Member list / groups / colors / flags**: all in the `sections` array at the top of `script.js`. Each section is a generation or unit — `id` (used for the `#anchor`), `label` (shown on the nav pill and section heading), `accent` (its theme color), `flag` (the little badge emoji), and `members`. Add, remove, or reorder freely — the nav, headings, and grids all render from this one array.
- **Bios**: each member currently gets a generic placeholder line — swap in real text via the `desc` field where the flat `members` list gets built partway down the file.
- **Alum / affiliate tags**: the second item in a member's array (e.g. `["Gawr Gura","alum"]`) — leave it off for currently active members.
- **Number / size of background blobs**: `BLOB_COUNT` and the size/color logic near the top of `script.js`.
- **Colors / fonts / spacing / cursor**: `:root` variables at the top of `style.css`.

## Browser support

This leans on some newer CSS: `backdrop-filter` for all the glass panels, `color-mix()` for the nav pill hover colors, and `mask-image` for the fade at the edges of the nav. All are supported in current Chrome, Edge, Firefox, and Safari. On older browsers the glass panels will look like plain translucent boxes and the hover color-mixing will fall back to the browser's default, but nothing will break.

