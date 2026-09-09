# My Favourite Hololive Members

A fan page covering every hololive generation and unit. No branch grouping (Gen 0 through holoX, AREA15/HOLORO/holoH3RO for Indonesia, Myth through Justice, ReGLOSS, FLOW GLOW), since hololive itself has moved away from splitting talent into separate branches. The nav is a floating glass capsule pinned to the top center. It stays put while you scroll, has a soft glowing edge, and a light-catching shimmer that follows your cursor around inside it. A slowly-spinning glow ring sits above the headline, ready for a real logo. Each section heading (and each card) carries a small flag badge — 🇯🇵 for the Japan-based generations, 🇮🇩 for the Indonesia units, 🌐 for English. Click any member's box and a profile popup opens with their full body art, name, and a bio. Background is a soft white field with big blurred blue circles drifting around slowly. A glass "back to top" button appears bottom-right once you've scrolled down a bit, and the whole page uses a custom curvy cursor instead of the default arrow.

Built with plain HTML, CSS, and JS — no frameworks, no build step, nothing to install.

This project was made entirely by me.

All rights reserved. No part of this project — code, design, or content — may be copied, modified, redistributed, or reused in any form without my explicit permission.

## Browser support

This leans on some newer CSS: `backdrop-filter` for all the glass panels, `color-mix()` for the nav pill hover colors, and `mask-image` for the fade at the edges of the nav. All are supported in current Chrome, Edge, Firefox, and Safari. On older browsers the glass panels will look like plain translucent boxes and the hover color-mixing will fall back to the browser's default, but nothing will break.

