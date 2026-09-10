# Prasenjit Sahoo — Portfolio  prasenjit-portfolioo.netlify.app

A premium, production-ready personal developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Hero Section** — Animated typewriter, floating profile composition, CTA buttons
- **About** — Split layout with Developer Snapshot card and code snippet decoration
- **Skills** — Tabbed interactive skill universe with 30+ technologies
- **Projects** — Featured project cards with abstract visual compositions, live links
- **Experience** — Animated timeline with KFintech internship details
- **Achievements** — Medal-style hackathon achievement cards
- **Certifications** — Elegant certification cards (OCI, Cisco, AWS)
- **GitHub** — Contribution grid visualization
- **Contact** — Contact method cards with working mailto/tel links
- **Particle canvas** — Animated floating particle network background
- **Glassmorphism navbar** — Sticky with scroll-based glass effect

---

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
prasenjit-portfolio/
├── public/
│   ├── profile.jpg              ← Your profile photograph (ADD THIS)
│   ├── Prasenjit-Sahoo-Resume.pdf  ← Your resume PDF (ADD THIS)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   ├── Education.tsx
│   │   ├── GitHub.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ParticleCanvas.tsx
│   │   └── useInView.ts
│   ├── data/
│   │   └── portfolio.ts         ← All content data
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/Prasenjit-Sahoo18/portfolio.git
cd prasenjit-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📸 Profile Image

Place your profile photograph at:

```
public/profile.jpg
```

Requirements:
- Format: JPG or PNG (rename to `profile.jpg`)
- Recommended: Portrait orientation, showing face clearly
- The portfolio is configured to use this file as the hero image

---

## 📄 Resume

Place your resume PDF at:

```
public/Prasenjit-Sahoo-Resume.pdf
```

The "Download Resume" button in the hero and navbar will serve this file.

---

## 🏗 Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Select **Vite** as the framework preset
4. Deploy — no environment variables required

### Netlify

1. Push your repo to GitHub
2. Import at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

Add `base: '/repo-name/'` to `vite.config.ts` if deploying to a subdirectory.

---

## ✏️ Customization

All portfolio content is centralized in:

```
src/data/portfolio.ts
```

Edit this file to update:
- Personal information
- Projects
- Skills
- Experience
- Achievements
- Certifications

---

## 📝 License

© 2026 Prasenjit Sahoo. All rights reserved.
