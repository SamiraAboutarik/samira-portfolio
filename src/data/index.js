// ─── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    slug: 'khdima-link',
    title: 'Khdima Link',
    description: 'Freelance marketplace connecting local tradesmen with clients in the Souss-Massa region.',
    fullDescription: 'Freelance marketplace connecting local tradesmen with clients in the Souss-Massa region, with a focus on visibility, trust and direct booking workflows.',
    problem: 'Local artisans had no digital visibility or way to find clients easily.',
    challenges: 'Local artisans had limited online visibility, while clients needed a simple way to discover reliable services and manage booking requests.',
    solution: 'Complete platform with profiles, booking system, messaging and review management.',
    duration: 'Academic project',
    role: 'Full Stack Developer',
    tech: ['Laravel', 'React', 'MySQL', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500',
    accentColor: '#a855f7',
    image: '/projects/khdima-link.png',
    live: 'https://khedmalink-app.vercel.app/',
    github: 'https://github.com/SamiraAboutarik/khdimalink-app',
    featured: true,
  },
  {
    id: 2,
    slug: 'portfolio',
    title: 'Portfolio',
    description: 'Personal portfolio showcasing projects, skills, education and contact workflows with a modern React experience.',
    fullDescription: 'Personal portfolio built to present projects, technical skills, education, contact information and case studies in a polished single-page React application.',
    problem: 'Recruiters and collaborators needed a clear way to discover Samira’s work, skills and availability in one place.',
    challenges: 'The portfolio needed to stay fast, responsive and easy to scan while supporting rich animations, project details, PWA basics and contact flows.',
    solution: 'A Vite + React portfolio with Tailwind CSS, Framer Motion, dynamic project pages, lazy-loaded interactive components and responsive sections.',
    duration: 'Personal project',
    role: 'Frontend Developer',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-violet-500 to-cyan-500',
    accentColor: '#8b5cf6',
    image:  '/projects/portfolio.png',
    live: 'https://samira-aboutarik.vercel.app/',
    github: 'https://github.com/SamiraAboutarik',
    featured: true,
  },
  {
  id: 5,
  slug: 'jobfinder-ai',
  title: 'JobFinder AI',
  description: 'Smart job search platform with AI recommendations for the Moroccan market.',
  fullDescription: 'Smart job search platform for the Moroccan market with search, filtering, saved jobs, applications and AI-assisted recommendations.',
  problem: 'Job seekers in Morocco had no intelligent platform to find relevant opportunities based on their profile.',
  challenges: 'Job seekers needed better matching and filtering, while the platform had to support favorites, applications and personalized recommendations.',
  solution: 'Full-stack app with search, filters, favorites, apply system and an AI assistant powered by Claude that recommends jobs based on user profile.',
  duration: 'Personal project',
  role: 'Full Stack Developer',
  tech: ['Laravel', 'React', 'MySQL', 'Sanctum', 'Claude AI'],
  color: 'from-indigo-500 to-emerald-500',
  accentColor: '#6366f1',
  image: '/projects/jobfinder.png',
  live: 'https://jobfinder-dun.vercel.app',
  github: 'https://github.com/SamiraAboutarik/jobfinder-backend',
  featured: true,
},
{
  id: 6,
  slug: 'generator-cv',
  title: 'Generator CV',
  description: 'Web app for generating professional CVs quickly and easily, with downloadable formats.',
  fullDescription: 'Web application for creating professional CVs quickly through a guided form and downloadable output formats.',
  problem: 'Users needed a fast and simple way to create a professional CV without design or software skills.',
  challenges: 'Users needed a clear workflow that turned personal information into a polished CV without requiring design decisions.',
  solution: 'A user-friendly platform to input personal information and generate a ready-to-download CV in multiple formats.',
  duration: 'Personal project',
  role: 'Frontend Developer',
  tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  color: 'from-purple-500 to-pink-500',
  accentColor: '#a855f7',
  image: '/projects/generator-cv.png',
  live: 'https://samiraaboutarik.github.io/GeneratorCv/',
  github: 'https://github.com/SamiraAboutarik/GeneratorCv',
  featured: true,
},
{
  id: 7,
  slug: 'saluxe',
  title: 'Saluxe',
  description: 'Plateforme moderne de réservation et découverte de services premium liés au bien-être et au lifestyle.',
  fullDescription: 'Plateforme moderne de reservation et decouverte de services premium lies au bien-etre et au lifestyle.',
  problem: 'Les utilisateurs ont du mal à trouver et réserver facilement des services haut de gamme fiables en ligne.',
  challenges: 'Les utilisateurs avaient besoin de trouver rapidement des services fiables, de comprendre l’offre et de reserver avec une experience fluide.',
  solution: 'Une interface élégante permettant de découvrir, réserver et gérer des services avec une expérience fluide et intuitive.',
  duration: 'Personal project',
  role: 'Frontend Developer',
  tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  color: 'from-amber-400 to-orange-500',
  accentColor: '#f59e0b',
  image: '/projects/saluxe.png',
  live: 'https://boutique-react.vercel.app/',
  github: null,
  featured: true,
},
{
  id: 8,
  slug: 'learning-app',
  title: 'Learning App',
  description: 'Plateforme e-learning intelligente permettant de créer des parcours d’apprentissage personnalisés avec assistance IA.',
  fullDescription: 'Plateforme e-learning intelligente permettant de creer des parcours d’apprentissage personnalises avec assistance IA.',
  problem: 'Les apprenants ont souvent du mal à suivre un parcours structuré et adapté à leur niveau ou leurs objectifs.',
  challenges: 'Les apprenants avaient besoin de parcours plus structures, adaptes a leur niveau et faciles a suivre dans le temps.',
  solution: 'Une application qui génère des parcours personnalisés, propose du contenu structuré et offre une interaction intelligente pour faciliter l’apprentissage.',
  duration: 'Personal project',
  role: 'Frontend Developer',
  tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  color: 'from-blue-500 to-indigo-500',
  accentColor: '#3b82f6',
  image: '/projects/learning-app.png',
  live: 'https://learning-app-asyh-az6i3ihk3-samiras-projects-ab056ac0.vercel.app/',
  github: null,
  featured: true,
},
{
  id: 9,
  slug: 'books-app',
  title: 'Books App',
  description: 'Application web pour découvrir, organiser et suivre ses lectures avec une expérience utilisateur moderne.',
  fullDescription: 'Application web pour decouvrir, organiser et suivre ses lectures avec une experience utilisateur moderne.',
  problem: 'Les lecteurs manquent d’outils simples pour organiser leurs lectures et découvrir de nouveaux livres adaptés à leurs goûts.',
  challenges: 'Les lecteurs avaient besoin d’un espace simple pour organiser leurs lectures, suivre leur progression et decouvrir de nouveaux livres.',
  solution: 'Une plateforme interactive avec recommandations personnalisées, bibliothèque virtuelle et suivi de progression de lecture.',
  duration: 'Personal project',
  role: 'Frontend Developer',
  tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  color: 'from-emerald-500 to-teal-500',
  accentColor: '#10b981',
  image: '/projects/books-app.png',
  live: 'https://books-app-nu-amber.vercel.app/',
  github: null,
  featured: false,
}
]


// ─── SKILLS ───────────────────────────────────────────────────────────────────
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiMysql, SiMongodb, SiPython, SiGit, SiGithub,
  SiNodedotjs, SiTypescript, SiDocker, SiLinux, SiFigma,
} from 'react-icons/si'
import { HiServerStack } from 'react-icons/hi2'

export const SKILLS = {
  Frontend: [
    { name: 'HTML5',        level: 88, Icon: SiHtml5,       color: '#E34F26' },
    { name: 'CSS3',         level: 86, Icon: SiCss,         color: '#1572B6' },
    { name: 'JavaScript',   level: 78, Icon: SiJavascript,  color: '#F7DF1E' },
    { name: 'React',        level: 75, Icon: SiReact,       color: '#61DAFB' },
    { name: 'Tailwind CSS', level: 82, Icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Bootstrap',    level: 85, Icon: SiBootstrap,   color: '#7952B3' },
  ],
  Backend: [
    { name: 'PHP',     level: 75, Icon: SiPhp,     color: '#777BB4' },
    { name: 'Laravel', level: 78, Icon: SiLaravel, color: '#FF2D20' },
    { name: 'MySQL',   level: 72, Icon: SiMysql,   color: '#4479A1' },
    { name: 'MongoDB', level: 60, Icon: SiMongodb, color: '#47A248' },
  ],
  Other: [
    { name: 'Python',    level: 55, Icon: SiPython,      color: '#3776AB' },
    { name: 'Git',       level: 82, Icon: SiGit,         color: '#F05032' },
    { name: 'GitHub',    level: 80, Icon: SiGithub,      color: '#6b7280' },
    { name: 'REST APIs', level: 78, Icon: HiServerStack, color: '#a855f7' },
  ],
}

// Two rows for the marquee — row 2 scrolls in reverse
export const ROW1 = [
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Laravel',     Icon: SiLaravel,     color: '#FF2D20' },
  { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind',    Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'PHP',         Icon: SiPhp,         color: '#777BB4' },
  { name: 'MySQL',       Icon: SiMysql,       color: '#4479A1' },
  { name: 'HTML5',       Icon: SiHtml5,       color: '#E34F26' },
  { name: 'Bootstrap',   Icon: SiBootstrap,   color: '#7952B3' },
]

export const ROW2 = [
  { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
  { name: 'Python',      Icon: SiPython,      color: '#3776AB' },
  { name: 'Git',         Icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',      Icon: SiGithub,      color: '#6b7280' },
  { name: 'CSS3',        Icon: SiCss,         color: '#1572B6' },
  { name: 'REST APIs',   Icon: HiServerStack, color: '#a855f7' },
  { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
  { name: 'Linux',       Icon: SiLinux,       color: '#FCC624' },
]

// ─── STATS ────────────────────────────────────────────────────────────────────
import { HiCube, HiSparkles, HiAcademicCap, HiFire } from 'react-icons/hi2'

export const STATS = [
  {
    Icon: HiCube,
    num: 10, suffix: '+',
    label: 'Projects Completed',
    sub: 'Real-world apps shipped',
    color: '#a855f7',
    gradient: 'from-purple-500 to-violet-600',
    lightBg: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
  },
  {
    Icon: HiSparkles,
    num: 12, suffix: '+',
    label: 'Technologies',
    sub: 'Mastered & still growing',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-teal-500',
    lightBg: 'from-cyan-50 to-teal-50',
    border: 'border-cyan-200',
  },
  {
    Icon: HiAcademicCap,
    num: 2, suffix: ' yrs',
    label: 'Years Training',
    sub: 'Full Stack at OFPPT',
    color: '#f97316',
    gradient: 'from-orange-500 to-amber-500',
    lightBg: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
  },
  {
    Icon: HiFire,
    num: 100, suffix: '%',
    label: 'Dedication',
    sub: 'Committed to excellence',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500',
    lightBg: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
  },
]

// ─── TECH CLOUD ───────────────────────────────────────────────────────────────
export const TECH_CLOUD = [
  'React', 'Laravel', 'PHP', 'JavaScript', 'Tailwind',
  'Bootstrap', 'MySQL', 'MongoDB', 'Python', 'Git', 'REST API', 'Scrum',
]

// ─── CONTACT INFO ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: 'Email', label: 'Email', value: 'samiraaboutarik45@gmail.com', href: 'mailto:samiraaboutarik45@gmail.com' },
  { icon: 'WhatsApp', label: 'WhatsApp', value: '+212641322297', href: 'https://wa.me/212641322297' },
  { icon: 'LinkedIn', label: 'LinkedIn', value: 'linkedin.com/in/samira-aboutarik', href: 'https://www.linkedin.com/in/samira-aboutarik/' },
  { icon: 'GitHub', label: 'GitHub', value: 'github.com/SamiraAboutarik', href: 'https://github.com/SamiraAboutarik' },
]
// -------------EDUCTION-----------------
import {  HiComputerDesktop, HiCodeBracket, HiLightBulb } from 'react-icons/hi2'

export const EducationS = [
  {
    id: 1,
    type: 'education',
    Icon: HiAcademicCap,
    gradient: 'from-orange-500 to-pink-500',
    date: '2022 – 2023',
    title: "Bachelor's Degree – Physical Sciences",
    org: 'High School Abdellah Ben Yassine Inzegane',
    desc: 'Completed a scientific high school diploma specializing in Physical Sciences.',
    tags: ['Physics', 'Mathematics', 'Sciences'],
    current: false,
  },
  {
    id: 2,
    type: 'education',
    Icon: HiComputerDesktop,
    gradient: 'from-violet-500 to-pink-500',
    date: '2024 – Present',
    title: 'Digital Development Student',
    org: 'OFPPT Ait Melloul',
    desc: 'Currently studying as a Specialized Technician in Digital Development at OFPPT Ait Melloul. Expected graduation: June 2026.',
    tags: ['Laravel', 'React', 'PHP', 'MySQL', 'Full Stack'],
    current: true,
  }
  
]
// ─── CHATBOT RESPONSES ────────────────────────────────────────────────────────
export const CHAT_RESPONSES = {
  skills: 'Samira maîtrise React, Laravel, PHP, JavaScript, Tailwind, Bootstrap, MySQL, MongoDB et Python. Full-Stack avec une passion pour les interfaces modernes ! 💻',
  projects: "Projets concrets : Khdima Link, Portfolio, JobFinder AI, Generator CV, Saluxe, Learning App et Books App. Voir la section Projects 🚀",
  contact: 'Email, WhatsApp, GitHub, LinkedIn — tout est dans la section Contact en bas de page. N\'hésitez pas ! 📬',
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
