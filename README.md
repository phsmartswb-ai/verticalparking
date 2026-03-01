# Vertipark – Vertical Rotary Car Parking

Marketing website for **Vertipark**, a vertical rotary car parking solution launching in Bengaluru. Built with vanilla HTML, CSS, and JavaScript.

## Repository

- **GitHub:** [phsmartswb-ai/verticalparking](https://github.com/phsmartswb-ai/verticalparking)

## Live / Demo

Open `vertipark-Main.html` in a browser (same folder as `styles.css` and `images/`). No build step or server required.

```bash
# From project root, e.g. open in default browser (macOS)
open vertipark-Main.html
```

Or use any static file server:

```bash
npx serve .
# or: python3 -m http.server 8000
```

## Project structure

```
.
├── vertipark-Main.html   # Main landing page (entry point)
├── styles.css            # All styles (extracted from inline CSS)
├── images/               # Local images (hero, showcase, before/after, etc.)
│   ├── hero-bg.jpg
│   ├── showcase-bg.jpg
│   ├── landowner-hero-bg.jpg
│   ├── hero-visual.jpg
│   ├── ba-before.jpg
│   └── ba-after.jpg
├── README.md
└── .gitignore
```

## Features

- Single-page marketing site: hero, problem, how it works, plans, app preview, landowners, FAQ, contact, legal
- Responsive layout (breakpoints at 900px and 600px)
- Mobile hamburger menu, back-to-top button, cookie consent banner
- SEO meta and Open Graph tags
- Images from Unsplash & Pexels (free to use); stored locally in `images/`

## Tech

- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (FAQ accordion, legal tabs, form submit, nav toggle)
- Fonts: Google Fonts (Bebas Neue, Syne, DM Sans)

## License

This project is **proprietary**. All rights reserved. It is not free to use. See [LICENSE](LICENSE) for full terms.
