# Badal Pipalde — Full Stack Developer Portfolio

A production-grade, highly interactive personal portfolio website for **Badal Pipalde**, specializing in the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

## 🚀 Key Features

- **Apple Dynamic Island Navigation Bar**:
  - Floating pill-island design with glassmorphism backdrop blur (`blur(28px)`).
  - Smooth sliding pill indicator tracking active scroll sections via Framer Motion.
  - Interactive Theme Toggle (Dark & Light mode) with local storage persistence.
  - Mobile Dynamic Island that fluidly morphs and expands downwards like an iPhone Dynamic Island.
- **3D Isometric Architecture Island**:
  - Interactive multi-tier pedestal built with Three.js & React Three Fiber.
  - Demonstrates the entire full-stack architecture:
    - **Top Tier**: Client UI / React 19 Frontend with rotating React atom.
    - **Middle Tier**: Express.js & Node.js API Gateway with status LED conduits.
    - **Bottom Tier**: MongoDB Storage Cluster with glowing emerald data rings.
    - **Live Data Streams**: Pulsing energy packets traveling vertically between Database ⇄ API ⇄ Frontend.
  - Mouse-responsive parallax tilt and subtle idle floating physics.
  - Lightweight SVG/CSS animated fallback for low-power devices and reduced motion.
- **Editorial About Section**:
  - "Turning Ideas Into Real Products" with core engineering pillars and JSON-spec details panel.
  - No fabricated statistics or fake companies — completely authentic and editable.
- **Interactive Selected Work Showcase**:
  - 3 clearly marked project placeholders with neutral architectural schematics.
  - 3D perspective card tilt on pointer movement + glare reflection.
  - Interactive Case Study detailed modals with architecture breakdowns and technical challenges.
  - Category filters (All, Full Stack, Frontend, Backend).
- **Categorized Skills Matrix**:
  - Categorized into Frontend, Backend, Database, Programming Languages, and Tools & Platforms.
  - Tech icons with smooth hover states and descriptive popovers. No arbitrary percentage bars.
- **Validated Contact System**:
  - Client-side validation with accessible alerts.
  - Dedicated integration point for Formspree / EmailJS / Express API (`src/sections/Contact.jsx`).
  - Graceful mailto fallback and celebratory confetti.
- **Resume Integration**:
  - Graceful resume modal with instructions for placing `resume.pdf` into `/public`.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: SCSS (Design tokens, glassmorphism, responsive breakpoints)
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Brand Icons

---

## 💻 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ⚙️ Customization Guide

All personal and project data is decoupled from UI components in `src/data/`:

| File | Purpose |
|---|---|
| `src/data/profile.js` | Name, bio, avatar image, education, resume config, email |
| `src/data/projects.js` | Projects, case studies, demo links, GitHub links, tags |
| `src/data/skills.js` | Categorized technical skills & descriptions |
| `src/data/socialLinks.js` | GitHub, LinkedIn, and Email URLs |

### Updating Your Profile Photo
1. Place your photo in `public/profile.jpeg`.
2. Ensure `src/data/profile.js` has:
   ```javascript
   avatar: {
     avatarUrl: "/profile.jpeg",
     ...
   }
   ```

### Adding Your Official Resume
1. Place your resume PDF in `public/resume.pdf`.
2. In `src/data/profile.js`, change:
   ```javascript
   resume: {
     filePath: "/resume.pdf",
     isAvailable: true,
   }
   ```
