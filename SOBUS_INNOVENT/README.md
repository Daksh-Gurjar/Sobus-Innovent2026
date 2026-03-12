# Innovent Club Website

A professional, fast-loading, modern website for the **Innovent Club** — India's biggest grassroots Idea Competition.

---

## Quick Start

Just open `index.html` in any modern browser. No build tools or server required.

---

## File Structure

```
SOBUS_INNOVENT/
├── index.html              ← Main HTML entry point (semantic shell)
├── css/
│   └── styles.css          ← Full design system & all section styles
├── js/
│   └── script.js           ← Renders content from data/ into the DOM
├── data/
│   └── content.js          ← ★ ALL EDITABLE CONTENT IS HERE ★
└── assets/
    └── images/
        ├── README.md       ← Image placement guide
        ├── favicon.png
        ├── hero-bg.jpg
        ├── about-illustration.jpg
        ├── gallery/        ← gallery-1.jpg … gallery-6.jpg
        └── team/           ← member-1.jpg … member-4.jpg
```

---

## How to Update Content

### Change Website Text / Section Content
→ Edit **`data/content.js`** only. All text, headings, stats, and descriptions are there.

### Change the Registration Link (Google Form)
→ In `data/content.js`, update `SITE_CONFIG.registrationLink`:
```js
registrationLink: "https://forms.gle/YOUR_NEW_FORM_ID",
```

### Add / Remove Event Topics
→ In `data/content.js`, edit the `TOPICS.topics` array.

### Add / Edit Team Members
→ In `data/content.js`, edit the `TEAM.members` array. Add photos to `assets/images/team/`.

### Add Gallery Images
→ Place images in `assets/images/gallery/`, then update `GALLERY.images` in `data/content.js`.

### Update Stats
→ In `data/content.js`, edit the `ABOUT.stats` array.

---

## Features

- ✅ Dark professional UI with gradient design system
- ✅ Smooth scroll-reveal animations
- ✅ Animated stat counters
- ✅ Mobile-first responsive (desktop / tablet / mobile)
- ✅ Hamburger nav for mobile with full-screen overlay
- ✅ Active nav link tracking
- ✅ Lazy image loading with placeholder fallback
- ✅ Scroll-to-top button
- ✅ Full accessibility (aria labels, semantic HTML, skip link)
- ✅ SEO meta tags + Open Graph
- ✅ Zero framework dependencies

---

## Technologies

| Layer | Tech |
|-------|------|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JS (ES6+) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Inter via Google Fonts |
