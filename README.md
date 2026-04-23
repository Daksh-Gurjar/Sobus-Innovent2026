# Innovent 2026 — India's Biggest Idea Competition

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-Live-blue.svg)](https://sobus-innovent2026.vercel.app)

**Innovent** is India's biggest grassroots Idea Competition organized by the Sobus Center of Excellence at NMIMS Shirpur. This platform connects innovators, startups, mentors, and investors at village, taluka, and city levels for a better Bharat.

---

## 🌟 About the Event

Innovent 2026 is designed to empower grassroots innovators across India by providing them a platform to present their ideas in **Marathi, Hindi, and English**. The competition happens at three levels:
- **Village Level** — Local community engagement
- **Taluka Level** — Regional competitions
- **City Level** — Grand finale with mentorship and funding opportunities

---

## 🚀 Features

- **Modern, Dark UI** — Professional gradient design system with smooth animations
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **Accessibility First** — ARIA labels, semantic HTML, and keyboard navigation support
- **Performance Optimized** — Lazy loading, minimal dependencies, fast load times
- **SEO Ready** — Meta tags, Open Graph support, and semantic structure
- **Easy Content Management** — All content managed through a single `data/content.js` file
- **Zero Framework Dependencies** — Built with pure HTML5, CSS3, and Vanilla JavaScript

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts (Bricolage Grotesque, Plus Jakarta Sans) |
| **Analytics** | Vercel Web Analytics |
| **Hosting** | Vercel |

---

## 📁 Project Structure

```
Sobus-Innovent2026/
├── README.md                    ← This file
└── SOBUS_INNOVENT/
    ├── index.html               ← Main HTML entry point
    ├── package.json             ← Project metadata
    ├── css/
    │   └── styles.css           ← Complete design system & styles
    ├── js/
    │   └── script.js            ← Dynamic content rendering
    ├── data/
    │   └── content.js           ← ★ ALL EDITABLE CONTENT ★
    └── assets/
        └── images/              ← Images, logos, gallery photos
```

---

## 🚀 Quick Start

### Option 1: Open Directly (No Installation Required)
Simply open `SOBUS_INNOVENT/index.html` in any modern web browser. No build tools or server required!

### Option 2: Run with Local Server
```bash
cd SOBUS_INNOVENT
npm start
```
The site will be available at `http://localhost:3000`

---

## 📝 How to Update Content

All website content (text, stats, team members, gallery images, etc.) is managed through a single file:

### Edit Content
→ **`SOBUS_INNOVENT/data/content.js`**

This file contains all editable content organized into sections:
- `SITE_CONFIG` — Site-wide settings and registration link
- `HERO` — Hero section content
- `ABOUT` — About section and statistics
- `WHY` — Why Innovent benefits
- `TIMELINE` — Event timeline
- `TOPICS` — Competition topics
- `GALLERY` — Gallery images
- `TEAM` — Team members
- `CONTACT` — Contact information

### Update Registration Link
In `data/content.js`, modify:
```javascript
registrationLink: "https://forms.gle/YOUR_NEW_FORM_ID"
```

For detailed content editing instructions, see [`SOBUS_INNOVENT/README.md`](SOBUS_INNOVENT/README.md).

---

## 🎨 Key Sections

1. **Hero** — Eye-catching introduction with call-to-action
2. **About** — Event overview with animated statistics
3. **Why Innovent** — Benefits of participating
4. **Timeline** — Important dates and deadlines
5. **Topics** — Competition categories and themes
6. **Gallery** — Past event photos and highlights
7. **Team** — Organizing team members
8. **Contact** — Get in touch information

---

## 🌐 Live Demo

Visit the live website: [https://sobus-innovent2026.vercel.app](https://sobus-innovent2025-26.vercel.app)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Credits

Developed and maintained by the **Sobus Center of Excellence** at NMIMS Shirpur.

---

## 📞 Contact

For questions or support regarding Innovent 2026:
- **Website**: Visit the contact section on the live site
- **Email**: Available on the website
- **Location**: NMIMS Shirpur Campus

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

**Join us in empowering grassroots innovation across India! 🇮🇳**
