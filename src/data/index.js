// ─── PROJECTS ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'Khdima Link',
    description: 'Freelance marketplace connecting local tradesmen with clients in the Souss-Massa region.',
    problem: 'Local artisans had no digital visibility or way to find clients easily.',
    solution: 'Complete platform with profiles, booking system, messaging and review management.',
    tech: ['Laravel', 'React', 'MySQL', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500',
    accentColor: '#a855f7',
    image: '/projects/khdima-link.png',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: true,
  },
  {
    id: 2,
    title: 'AdvancedEvent',
    description: 'Event management system with workshops, experts, participants and online registrations.',
    problem: 'Organizers lacked tools to manage participants, workshops and speakers in one place.',
    solution: 'Laravel API + React frontend with advanced filters, real-time stats and data export.',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
    color: 'from-cyan-500 to-teal-500',
    accentColor: '#06b6d4',
    image: '/projects/advanced-event.png',
    live: '#',
    github: 'https://github.com/SamiraAboutarik/AdvancedEvent',
    featured: true,
  },
  {
    id: 3,
    title: 'School Manager',
    description: 'Complete school management app: students, classes, grades and teachers.',
    problem: 'Manual and scattered management of academic data caused information loss.',
    solution: 'Full CRUD with Eloquent relationships, authentication, PDF reports and advanced filtering.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    color: 'from-orange-500 to-red-500',
    accentColor: '#f97316',
    image: '/projects/school-manager.png',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: false,
  },
  {
    id: 4,
    title: 'Product Manager App',
    description: 'React + Redux SPA for product catalog management with full CRUD and image upload.',
    problem: 'SMEs needed a simple but powerful tool to manage their product catalog.',
    solution: 'React SPA with Redux Toolkit, createAsyncThunk, responsive interface and advanced state management.',
    tech: ['React', 'Redux', 'JavaScript', 'Tailwind'],
    color: 'from-blue-500 to-violet-500',
    accentColor: '#6366f1',
    image: '/projects/product-manager.png',
    live: '#',
    github: 'https://github.com/SamiraAboutarik',
    featured: false,
  },
  {
  id: 5,
  title: 'JobFinder AI',
  description: 'Smart job search platform with AI recommendations for the Moroccan market.',
  problem: 'Job seekers in Morocco had no intelligent platform to find relevant opportunities based on their profile.',
  solution: 'Full-stack app with search, filters, favorites, apply system and an AI assistant powered by Claude that recommends jobs based on user profile.',
  tech: ['Laravel', 'React', 'MySQL', 'Sanctum', 'Claude AI'],
  color: 'from-indigo-500 to-emerald-500',
  accentColor: '#6366f1',
  image: '/projects/jobfinder.png',
  live: 'https://jobfinder-dun.vercel.app',
  github: 'https://github.com/SamiraAboutarik/jobfinder-backend',
  featured: true,
},
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
  { icon: '✉️', label: 'Email', value: 'samira.aboutarik@gmail.com', href: 'mailto:samira.aboutarik@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/samira-aboutarik', href: '#' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/SamiraAboutarik', href: 'https://github.com/SamiraAboutarik' },
  { icon: '📍', label: 'Location', value: 'Agadir, Maroc 🇲🇦', href: '#' },
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
