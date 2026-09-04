# favourite-holomem

A little fan page for showcasing my favourite Hololive talents. Click on a member's box and a profile popup opens up with their full body art, name, and a bio. Background's got a blue gradient with some glowing dots drifting in and out, and there's a slideshow-style arrow nav so you can flip between members without closing the popup.

Built with plain HTML, CSS, and JS. no frameworks, no build step, nothing to install.

## What's in here

- `index.html` – the page structure
- `style.css` – all the styling (gradient background, glass cards, modal, animations)
- `script.js` – the member data and all the interactive bits (opening/closing the modal, cycling between members, switching photos)

## Running it

Just open `index.html` in a browser. That's it. If you want live-reload while editing, any local server works fine too (e.g. VS Code's Live Server extension, or `python3 -m http.server`).

## Adding your own images

Right now every photo slot is an empty dashed box on purpose — I didn't include any actual character art. To drop own images in:

1. Put image files somewhere in the project folder (an `images/` folder is a good idea).
2. In `script.js`, find the member to update.
3. In the grid card and modal markup (in `index.html`/rendered via `script.js`), swap the placeholder `<div class="card-photo">` or `<div class="fullbody-placeholder">` contents for an `<img src="images/whoever.png" alt="...">`.

Each member already has 3 photo slots wired up in the popup gallery (the little numbered thumbnails under the main image) — just point each one at a different file if multiple pics.

## Customizing

- **Member list / bios / colors**: all in the `members` array at the top of `script.js`. Each member has their own `accent` color that tints their card glow and popup theme, so tweak those however.
- **Number of background dots**: `DOT_COUNT` near the top of `script.js`.
- **Colors / fonts / spacing**: `:root` variables at the top of `style.css`.

## Browser support

Uses `backdrop-filter` for the blur effect, which is supported in all modern browsers (Chrome, Edge, Firefox, Safari). Older browsers will still work, just without the blur.

## License

MIT — see `LICENSE`. Do whatever you want with it.
