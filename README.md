<div align="center">

# Samira Aboutarik — Personal Portfolio

**Full Stack Web Developer · Agadir, Morocco**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-portfolio--samira.vercel.app-6d28d9?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-samira.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

A modern, high-performance personal portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion.  
Designed to impress recruiters and clients within 5 seconds.

</div>

---

## ✨ Features

### 🎨 UI / UX
| Feature | Details |
|--------|---------|
| 🌙 Dark / Light mode | Persisted in `localStorage`, smooth 500ms transition |
| 🖱️ Custom cursor | Magnetic ring with lag, dot follows instantly, reacts to hover |
| 🌐 Particle background | Interactive canvas dot grid that reacts to mouse movement |
| 📜 Scroll progress bar | Purple→cyan gradient bar at the top of the page |
| ✨ Preloader | Animated splash screen with counter `000 → 100` |
| 🧲 Magnetic buttons | CTA buttons that follow the cursor using spring physics (Framer) |

### 🏗️ Sections
| Section | Details |
|---------|---------|
| **Hero** | Typewriter animation, floating tech icons with glow, animated headline reveal |
| **About** | Orbiting avatar, floating stat badges, info grid, social links |
| **Skills** | Tabbed skill bars with brand icons (Si*) + infinite marquee scroll |
| **Experience** | Card stack with gradient icons, live "Current" badge |
| **Projects** | Filter by tech, animated layout transitions, case study modal |
| **Stats** | Animated counters triggered on scroll (react-countup) |
| **Contact** | Validated form, contact info cards, availability badge |
| **Footer** | Navigation links, social icons, built-with line |

### ⚡ Interactions
| Feature | Details |
|---------|---------|
| 🤖 Chatbot | Virtual assistant with quick replies and typing indicator |
| 🥚 Easter Egg | Konami Code `↑↑↓↓←→←→BA` triggers confetti + secret modal |
| 🔼 Scroll to top | Appears after scrolling 10% of the page |
| 📱 Fully responsive | Mobile-first design, works on all screen sizes |

---

## 🛠️ Tech Stack

### Core
| Library | Version | Purpose |
|---------|---------|---------|
| [React](https://react.dev) | 18 | Component-based UI framework |
| [Vite](https://vitejs.dev) | 5 | Fast build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first CSS framework |

### Animation & Motion
| Library | Version | Purpose |
|---------|---------|---------|
| [Framer Motion](https://www.framer.com/motion/) | 11 | Spring physics, layout animations, AnimatePresence |
| [react-type-animation](https://github.com/maxeth/react-type-animation) | 3 | Typewriter effect in Hero section |

### Utilities
| Library | Version | Purpose |
|---------|---------|---------|
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Brand icons (Si*) and UI icons (Hi2) |
| [react-scroll](https://github.com/fisshy/react-scroll) | 1.9 | Smooth scrolling and spy navigation |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | 9 | Scroll-triggered animations |
| [react-countup](https://github.com/glennreyes/react-countup) | 6 | Animated counters in Stats section |
| [react-confetti](https://github.com/alampros/react-confetti) | 6 | Confetti particles for the easter egg |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SamiraAboutarik/portfolio.git
cd portfolio

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Build for production → /dist
npm run preview  # Preview the production build locally
```

---

## 📁 Project Structure

```
samira-portfolio/
├── public/
│   ├── favicon.svg               # SVG favicon with gradient "S"
│   ├── monpic.jpg                # Profile photo (replace with yours)
│   └── CV_Samira_Aboutarik.pdf   # CV file (replace with yours)
│
├── src/
│   ├── components/
│   │   │
│   │   ├── ─── Layout & Effects ────────────────────────────
│   │   ├── CustomCursor.jsx          # Magnetic cursor ring + dot
│   │   ├── Preloader.jsx             # Animated splash screen
│   │   ├── ParticleBackground.jsx    # Canvas interactive dot grid
│   │   ├── MagneticButton.jsx        # Spring-physics magnetic button
│   │   ├── EasterEgg.jsx             # Konami code + confetti modal
│   │   ├── ScrollProgressBar.jsx     # Top gradient progress bar
│   │   ├── ScrollToTop.jsx           # Floating scroll-to-top button
│   │   │
│   │   ├── ─── Page Sections ───────────────────────────────
│   │   ├── Navbar.jsx                # Floating nav, dark toggle, active pill
│   │   ├── Hero.jsx                  # Headline reveal, typewriter, floating icons
│   │   ├── About.jsx                 # Orbiting avatar, info grid, social links
│   │   ├── Skills.jsx                # Tabbed bars + infinite marquee
│   │   ├── Experience.jsx            # Card stack with gradient icons
│   │   ├── Projects.jsx              # Filter + layout animation + case study modal
│   │   ├── ProjectModal.jsx          # Problem / Solution / Stack modal
│   │   ├── Stats.jsx                 # Animated counters on scroll
│   │   ├── Contact.jsx               # Validated form + contact info cards
│   │   ├── Footer.jsx                # Navigation links + social
│   │   └── Chatbot.jsx               # Floating virtual assistant
│   │
│   ├── hooks/
│   │   ├── useDarkMode.js            # Dark mode state persisted to localStorage
│   │   └── useScrollProgress.js      # Returns scroll percentage (0–100)
│   │
│   ├── App.jsx                       # Root component, assembles all sections
│   ├── main.jsx                      # React 18 entry point
│   └── index.css                     # Tailwind directives + custom CSS classes
│
├── index.html                        # HTML template, Google Fonts
├── vite.config.js                    # Vite config with React plugin
├── tailwind.config.js                # Tailwind theme extensions + dark mode
├── postcss.config.js                 # PostCSS with Tailwind + Autoprefixer
└── package.json                      # Dependencies and scripts
```

---

## 🎨 Customization Guide

### Change your projects

Edit the `PROJECTS` array in `src/components/Projects.jsx`:

```js
{
  id: 1,
  title: 'Your Project Name',
  description: 'One-line description of the project.',
  problem: 'What real-world problem did it solve?',
  solution: 'How did you solve it technically?',
  tech: ['React', 'Laravel', 'MySQL'],
  color: 'from-purple-500 to-pink-500',  // Any Tailwind gradient
  live: 'https://your-live-demo.com',
  github: 'https://github.com/you/project',
  featured: true,                         // Shows "Featured" badge
}
```

### Update your experience

Edit the `EXPERIENCES` array in `src/components/Experience.jsx`. Set `current: true` to display the live green badge.

### Change the color theme

All colors flow from two classes in `src/index.css`:

```css
/* Change these hex values to retheme the entire portfolio */
.grad-text {
  background: linear-gradient(135deg, #a855f7, #818cf8, #06b6d4);
}
.grad-btn {
  background: linear-gradient(135deg, #a855f7, #818cf8, #06b6d4);
}
```

### Add your profile photo

Place a file named `monpic.jpg` in the `public/` folder.  
It will automatically appear in the About section avatar.

### Add your CV

Place your PDF named `CV_Samira_Aboutarik.pdf` in the `public/` folder.  
The download button in the navbar will link to it automatically.

---

## 🌐 Deployment

### ▲ Vercel (recommended)

**Via CLI:**
```bash
npm install -g vercel
vercel
```

**Via GitHub:**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Vite → click **Deploy**

Every `git push` to `main` triggers an automatic redeploy.

### Netlify

```bash
npm run build
# Drag & drop the generated /dist folder to netlify.com/drop
```

---

## 🥚 Easter Egg

Type the **Konami Code** anywhere on the page:

```
↑  ↑  ↓  ↓  ←  →  ←  →  B  A
```

→ Confetti explosion + secret modal revealed. 🎉

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Designed & built with ❤️ from **Agadir, Morocco** 🇲🇦

**[Samira Aboutarik](https://github.com/SamiraAboutarik)** · [LinkedIn](https://linkedin.com/in/samira-aboutarik) · [samira.aboutarik@gmail.com](mailto:samira.aboutarik@gmail.com)

</div>