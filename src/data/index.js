// ─── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Khdima Link',
    description: 'Marketplace freelance connectant les artisans du bâtiment avec des clients dans la région Souss-Massa.',
    problem: "Les artisans locaux n'avaient aucune visibilité digitale ni moyen de trouver des clients facilement.",
    solution: 'Plateforme complète avec profils, système de réservation, messagerie et gestion des avis clients.',
    tech: ['Laravel', 'React', 'MySQL', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: true,
  },
  {
    id: 2,
    title: 'AdvancedEvent',
    description: 'Système de gestion d\'événements avec workshops, experts, participants et inscriptions en ligne.',
    problem: "Les organisateurs manquaient d'outils pour gérer participants, ateliers et intervenants en un seul endroit.",
    solution: 'API Laravel + frontend React avec filtres avancés, statistiques en temps réel et export de données.',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
    color: 'from-cyan-500 to-teal-500',
    live: '#',
    github: 'https://github.com/SamiraAboutarik/AdvancedEvent',
    featured: true,
  },
  {
    id: 3,
    title: 'School Manager',
    description: 'Application de gestion scolaire complète : étudiants, classes, notes et enseignants.',
    problem: 'Gestion manuelle et dispersée des données académiques causait perte d\'informations et inefficacité.',
    solution: 'CRUD complet avec relations Eloquent, authentification, rapports PDF et filtrage avancé.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    color: 'from-orange-500 to-red-500',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: false,
  },
  {
    id: 4,
    title: 'Product Manager App',
    description: 'SPA React + Redux pour gestion de catalogue produits avec CRUD complet et upload d\'images.',
    problem: 'Les PME avaient besoin d\'un outil simple mais puissant pour gérer leur catalogue produit.',
    solution: 'SPA React avec Redux Toolkit, createAsyncThunk, interface responsive et gestion d\'état avancée.',
    tech: ['React', 'Redux', 'JavaScript', 'Tailwind'],
    color: 'from-blue-500 to-violet-500',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: false,
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  Frontend: [
    { name: 'HTML / CSS', level: 95, icon: '🌐' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'React', level: 82, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
    { name: 'Bootstrap', level: 90, icon: '🅱️' },
  ],
  Backend: [
    { name: 'PHP', level: 80, icon: '🐘' },
    { name: 'Laravel', level: 85, icon: '🔴' },
    { name: 'MySQL', level: 78, icon: '🗄️' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
  ],
  Other: [
    { name: 'Python', level: 65, icon: '🐍' },
    { name: 'Git / GitHub', level: 90, icon: '🐙' },
    { name: 'REST APIs', level: 85, icon: '🔌' },
    { name: 'Agile / Scrum', level: 75, icon: '🔄' },
  ],
}

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { icon: '📦', num: 10, suffix: '+', label: 'Projets complétés' },
  { icon: '⚡', num: 12, suffix: '+', label: 'Technologies maîtrisées' },
  { icon: '🎓', num: 2, suffix: ' ans', label: 'En formation' },
  { icon: '💯', num: 100, suffix: '%', label: 'Dédication' },
]

// ─── TECH CLOUD ───────────────────────────────────────────────────────────────
export const TECH_CLOUD = [
  'React', 'Laravel', 'PHP', 'JavaScript', 'Tailwind',
  'Bootstrap', 'MySQL', 'MongoDB', 'Python', 'Git', 'REST API', 'Scrum',
]

// ─── CONTACT INFO ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: 'samira.aboutarik@gmail.com', href: 'mailto:samira.aboutarik@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/samira-aboutarik', href: '#' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/SamiraAboutarik', href: 'https://github.com/SamiraAboutarik' },
  { icon: '📍', label: 'Location', value: 'Agadir, Maroc 🇲🇦', href: '#' },
]

// ─── CHATBOT RESPONSES ────────────────────────────────────────────────────────
export const CHAT_RESPONSES = {
  skills: 'Samira maîtrise React, Laravel, PHP, JavaScript, Tailwind, Bootstrap, MySQL, MongoDB et Python. Full-Stack avec une passion pour les interfaces modernes ! 💻',
  projects: "4+ projets concrets : Khdima Link (marketplace), AdvancedEvent (gestion événements), School Manager et Product Manager App. Voir la section Projects 🚀",
  contact: 'Email, GitHub, LinkedIn — tout est dans la section Contact en bas de page. N\'hésitez pas ! 📬',
  experience: '2ème année DEVOWFS à l\'OFPPT Maroc, avec des projets réels en Laravel et React. Passionnée par la résolution de problèmes concrets. 🎓',
  bonjour: "Salut ! 👋 Je suis l'assistant virtuel de Samira. Posez-moi des questions sur ses compétences, projets, expérience ou comment la contacter !",
  hello: "Hi! 👋 I'm Samira's virtual assistant. Ask me about her skills, projects, experience, or how to contact her!",
  default: "Bonne question ! Essayez de demander : compétences, projets, expérience, ou contact 😊",
}

export function getChatResponse(input) {
  const l = input.toLowerCase()
  if (l.includes('skill') || l.includes('compétence') || l.includes('tech') || l.includes('language') || l.includes('langage')) return CHAT_RESPONSES.skills
  if (l.includes('project') || l.includes('projet') || l.includes('work') || l.includes('travail')) return CHAT_RESPONSES.projects
  if (l.includes('contact') || l.includes('email') || l.includes('hire') || l.includes('recrut')) return CHAT_RESPONSES.contact
  if (l.includes('experience') || l.includes('expérience') || l.includes('education') || l.includes('étude') || l.includes('ofppt')) return CHAT_RESPONSES.experience
  if (l.includes('bonjour') || l.includes('salut') || l.includes('coucou')) return CHAT_RESPONSES.bonjour
  if (l.includes('hello') || l.includes('hi')) return CHAT_RESPONSES.hello
  return CHAT_RESPONSES.default
}
