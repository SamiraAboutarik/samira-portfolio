# Samira Aboutarik — Portfolio v3

Portfolio personnel ultra-moderne de Samira Aboutarik, développeuse Full Stack.

🌐 **Live demo :** [portfolio-samira.vercel.app](https://portfolio-samira.vercel.app)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌙 Dark / Light mode | Persisté en localStorage |
| 🇫🇷/🇬🇧 Multi-langue | Français / Anglais, toggle en navbar |
| 🖱️ Custom cursor | Ring magnétique avec dot, réagit aux hover |
| ✨ Preloader | Splash screen compteur 000→100 |
| 🧲 Magnetic buttons | Boutons CTA qui suivent le curseur |
| 🌐 Particle background | Grille canvas qui réagit à la souris |
| ⌨️ Typewriter | Animation dans le hero |
| 📊 Skill bars animées | Avec icônes de brand (Si*) + spring bounce |
| 🗂️ Filtres projets | AnimatePresence + layout animation |
| 📅 Timeline Experience | Zigzag alterné gauche/droite |
| 📈 Compteurs animés | react-countup au scroll |
| 🤖 Chatbot | Assistant virtuel avec quick replies |
| 🥚 Easter Egg | Konami Code → confetti + modal secret |
| 📜 Scroll progress bar | En haut de page |
| 📱 Fully responsive | Mobile-first |

### 🥚 Easter Egg
Tape **↑ ↑ ↓ ↓ ← → ← → B A** sur ton clavier pour activer le secret !

---

## 🛠️ Stack

React 18 · Vite · Tailwind CSS 3 · Framer Motion · react-type-animation · react-intersection-observer · react-countup · react-icons · react-scroll · react-confetti

---

## 🚀 Installation

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 📁 Structure

```
src/
├── components/
│   ├── CustomCursor.jsx      ← Curseur personnalisé magnétique
│   ├── Preloader.jsx         ← Splash screen
│   ├── ParticleBackground.jsx← Canvas dot grid interactif
│   ├── MagneticButton.jsx    ← Bouton magnétique Framer
│   ├── EasterEgg.jsx         ← Konami code + confetti
│   ├── Navbar.jsx            ← Nav flottante + lang toggle
│   ├── Hero.jsx              ← Typewriter + CTA
│   ├── About.jsx             ← Avatar animé + orbit
│   ├── Skills.jsx            ← Brand icons + skill bars
│   ├── Experience.jsx        ← Timeline zigzag
│   ├── Projects.jsx          ← Filter + layout animation
│   ├── ProjectModal.jsx      ← Modal détails
│   ├── Stats.jsx             ← CountUp
│   ├── Contact.jsx           ← Form validé
│   ├── Chatbot.jsx           ← Assistant virtuel
│   ├── Footer.jsx
│   ├── ScrollProgressBar.jsx
│   └── ScrollToTop.jsx
├── data/index.js             ← Projets, skills, chatbot
├── i18n/translations.js      ← FR + EN complet
├── hooks/
│   ├── useDarkMode.js
│   ├── useScrollProgress.js
│   └── useLang.js
└── App.jsx
```

---

## 🌐 Deploy Vercel

```bash
npm i -g vercel && vercel
```

Développé avec ❤️ à Agadir, Maroc 🇲🇦