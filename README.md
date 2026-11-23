# TeddyPups U.A.E. — React Application

A pixel-perfect, fully responsive React.js conversion of the TeddyPups website (`puppy.instabizweb.com`).

All original fonts, typography, color palettes, custom illustrations, SVG components, animations, styles, and assets have been preserved 100% exactly as in the original HTML/CSS/JS site.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
The server will start at `http://localhost:3000/`.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Teddypups Clone/
├── Reference/                  # Original website reference files & screenshots
├── public/
│   ├── _next/                 # Original optimized images, fonts (.woff2) & stylesheets
│   ├── cursor/                # Custom paw & paw-press SVGs
│   ├── brand/                 # Brand logo
│   └── icon.png               # Favicon & touch icons
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky header, scroll state, active link paw, mobile drawer
│   │   ├── Footer.jsx         # Scalloped footer, contact details, social links
│   │   └── Curtain.jsx        # Intro curtain animation with running puppy SVG
│   ├── pages/
│   │   ├── HomePage.jsx       # Hero, story scenes, puppy journey, reels, FAQ preview
│   │   ├── PuppiesPage.jsx    # Complete puppy grid linking to storybooks
│   │   ├── PuppyDetailPage.jsx# Interactive storybook gallery (all 42 puppies)
│   │   ├── HappyFamiliesPage.jsx# Customer stories & video reels
│   │   ├── HowItWorksPage.jsx # Interactive tabs ("In Dubai" vs "Imported")
│   │   ├── GoneHomePage.jsx   # Adopted puppies archive
│   │   ├── FaqPage.jsx        # Searchable FAQ with expandable paper notes
│   │   └── ContactPage.jsx    # Interactive letterform & showroom details
│   ├── data/
│   │   └── puppiesData.js     # Full data & galleries for all 42 puppies
│   ├── App.jsx                # Router & page routes
│   └── main.jsx               # React entry point
├── index.html                 # Exact typography setup (Fraunces, Figtree, Shantell Sans)
├── package.json
└── vite.config.js
```

---

## ✨ Features & Interactivity Included

- **Exact Design & Fonts**: Identical font loading for `Fraunces` (display headings), `Shantell Sans` (handwritten notes), and `Figtree` (clean UI body).
- **Curtain Intro**: Native running dog SVG animation that transitions into the site.
- **Dynamic Header**: Tracks scroll direction and depth (`data-scrolled`, `data-hidden`), indicates current route with custom paw prints, and provides a mobile drawer menu.
- **Interactive Puppy Storybook Gallery**: Cycles through high-resolution puppy photos with previous/next controls, thumbnail selection with rotation effects, and full-screen preview.
- **Interactive FAQ Accordion**: Corkboard with pinned paper notes that fold and unfold, plus real-time question search.
- **Interactive "How It Works" Tabs**: Smooth switching between "In Dubai (meet in person)" and "Imported (order upon request)" journeys.
- **Interactive Letterform (Contact)**: Styled letter form with controlled inputs and submission feedback.
- **Direct Route Aliases**: Supports both clean URLs (e.g., `/puppies`, `/puppies/maltipoo-max-male`) and `.html` URLs (e.g., `/puppies.html`).
