# Assets — Images Folder

## Folder Structure

```
assets/
└── images/
    ├── favicon.png               ← Site favicon (32×32 or 64×64 PNG)
    ├── og-image.jpg              ← Social sharing preview (1200×630 JPG)
    ├── hero-bg.jpg               ← Hero background (optional, 1920×1080)
    ├── about-illustration.jpg    ← About section image (800×600)
    ├── innovent-flyer-english.png
    ├── innovent-flyer-marathi.png
    ├── gallery/
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   ├── gallery-4.jpg
    │   ├── gallery-5.jpg
    │   └── gallery-6.jpg
    └── team/
        ├── member-1.jpg
        ├── member-2.jpg
        ├── member-3.jpg
        └── member-4.jpg
```

## How to Add / Change Images

### Gallery Images
1. Place your photo in `assets/images/gallery/gallery-N.jpg`
2. Open `data/content.js`
3. Find the `GALLERY.images` array
4. Update the `src`, `alt`, and `caption` for each entry

### Team Photos
1. Place headshot in `assets/images/team/member-N.jpg`
2. Open `data/content.js`
3. Find the `TEAM.members` array
4. Update `photo`, `name`, `role`, `bio`, and `social` links

### About Image
1. Place your image at `assets/images/about-illustration.jpg`
2. No code changes needed — it loads automatically

### Favicon & OG Image
- Replace `assets/images/favicon.png` and `assets/images/og-image.jpg`
- Update meta tags in `index.html` if filenames differ

## Notes
- All images **lazy load** automatically (loading="lazy")
- Placeholders are shown when images are missing
- Recommended formats: **JPG** for photos, **PNG** for logos/icons
- Recommended sizes: keep gallery images under **500KB** for performance
