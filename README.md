# 🚀 Samira Aboutarik — Portfolio

Portfolio personnel ultra-moderne construit avec **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🛠️ Stack technique

| Outil | Usage |
|---|---|
| React 18 | UI / composants |
| Vite | Bundler rapide |
| Tailwind CSS v3 | Styling utility-first |
| Framer Motion | Animations fluides |
| react-type-animation | Typewriter effect |
| react-countup | Compteurs animés |
| react-intersection-observer | Scroll animations |
| react-scroll | Navigation smooth |
| react-icons | Icônes |

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation fixe + dark mode toggle
│   ├── Hero.jsx             # Section hero + typewriter
│   ├── About.jsx            # À propos + avatar animé
│   ├── Skills.jsx           # Compétences avec barres animées
│   ├── Projects.jsx         # Projets avec filtres
│   ├── ProjectModal.jsx     # Modal détail projet
│   ├── Stats.jsx            # Compteurs animés
│   ├── Contact.jsx          # Formulaire de contact
│   ├── Chatbot.jsx          # Assistant virtuel chatbot
│   ├── Footer.jsx           # Pied de page
│   ├── ScrollToTop.jsx      # Bouton retour en haut
│   └── ScrollProgressBar.jsx # Barre de progression scroll
├── data/
│   └── index.js             # Toutes les données du portfolio
├── hooks/
│   ├── useDarkMode.js       # Hook dark/light mode
│   └── useScrollProgress.js # Hook progression scroll
├── App.jsx                  # Composant racine
├── main.jsx                 # Point d'entrée React
└── index.css                # Styles globaux + Tailwind
```

---

## 🚀 Installation & démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build pour production
npm run build

# 4. Prévisualiser le build
npm run preview
```

---

## ✏️ Personnalisation

### Modifier les projets
Éditer `src/data/index.js` → tableau `PROJECTS`

### Modifier les compétences
Éditer `src/data/index.js` → objet `SKILLS`

### Ajouter un CV téléchargeable
Placer le fichier `CV_Samira_Aboutarik.pdf` dans le dossier `public/`

### Modifier les couleurs
Les couleurs principales sont définies dans `src/index.css` :
- Gradient principal : `#a855f7` → `#818cf8` → `#06b6d4`

---

## 🌟 Fonctionnalités

- ✅ Dark / Light mode (persistant via localStorage)
- ✅ Typewriter animation dans le hero
- ✅ Scroll progress bar
- ✅ Animations au scroll (Framer Motion + IntersectionObserver)
- ✅ Skill bars animées
- ✅ Projets filtrables par technologie
- ✅ Modal de détail projet
- ✅ Stats avec compteurs animés
- ✅ Chatbot virtuel avec quick replies
- ✅ Formulaire de contact avec validation
- ✅ Responsive mobile-first
- ✅ SEO-friendly (meta tags)
- ✅ Scroll-to-top button

---

## 📦 Déploiement sur Vercel

```bash
# Option 1 : Via CLI Vercel
npm install -g vercel
vercel

# Option 2 : Push sur GitHub → importer dans Vercel
# Build command : npm run build
# Output directory : dist
```

---

Made with ❤️ by Samira Aboutarik · Agadir, Maroc 🇲🇦
