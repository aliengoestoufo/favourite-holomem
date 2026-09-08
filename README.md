# My Favourite Hololive Members

A fan page covering every hololive generation and unit. no branch grouping anymore (Gen 0 through holoX, Indonesia, Myth through Justice, ReGLOSS, FLOW GLOW), since hololive itself has moved away from splitting talent into separate branches. Nav is a floating glass capsule pinned to the top center of the screen. It stays put while you scroll, and each pill jumps you straight to that section. Click any member's box and a profile popup opens with their full body art, name, and a bio. Background is a soft white field with big blurred blue circles drifting around slowly, and there's a slideshow-style arrow nav so you can flip between every member without closing the popup. A glass "back to top" button appears bottom-right once you've scrolled down a bit.

Built with plain HTML, CSS, and JS. No frameworks, no build step, nothing to install.

## What's in here

- `index.html` – the page structure
- `style.css` – all the styling (blob background, glass nav/cards/modal, animations)
- `script.js` – the member data and all the interactive bits (nav pills, modal, cycling between members, back-to-top)

## Running it

Just open `index.html` in a browser. That's it. If you want live-reload while editing, any local server works fine too (e.g. VS Code's Live Server extension, or `python3 -m http.server`).

Each member already has 3 photo slots wired up in the popup gallery (the little numbered thumbnails under the main image).

## Browser support

Uses `backdrop-filter` for the glass effect, which is supported in all modern browsers (Chrome, Edge, Firefox, Safari). Older browsers will still work, just without the blur — the nav and cards will look like plain translucent panels instead.

## License

MIT — see `LICENSE`. Do whatever you want with it.
