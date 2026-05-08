import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiPaperAirplane } from 'react-icons/hi2'
import { RiRobot2Line } from 'react-icons/ri'
import { CONTACT_INFO, PROJECTS, SKILLS } from '../data/index'

const PROJECT_COUNT = PROJECTS.length
const CONTACT_EMAIL = CONTACT_INFO.find(item => item.label === 'Email')?.value || 'samiraaboutarik45@gmail.com'
const GITHUB_URL = CONTACT_INFO.find(item => item.label === 'GitHub')?.value || 'github.com/SamiraAboutarik'
const LINKEDIN_URL = CONTACT_INFO.find(item => item.label === 'LinkedIn')?.value || 'linkedin.com/in/samira-aboutarik'
const WHATSAPP_URL = CONTACT_INFO.find(item => item.label === 'WhatsApp')?.href || 'https://wa.me/212641322297'
const SKILL_SUMMARY = Object.entries(SKILLS)
  .map(([group, skills]) => `${group}: ${skills.map(skill => `${skill.name} (${skill.level}%)`).join(', ')}`)
  .join('\n\n')

function getResponse(input) {
  const q = input.toLowerCase().trim()

  if (/(skill|tech|stack|know|use|language|framework|tool|mastered|proficient|expertise)/i.test(q))
    return `Samira's tech stack spans the full web:\n\n${SKILL_SUMMARY}`

  if (/\breact\b/i.test(q))
    return "Yes. React is one of Samira's main frontend technologies. She uses it with React Scroll, Framer Motion and Tailwind CSS."

  if (/laravel|php|eloquent|artisan|blade/i.test(q))
    return "Laravel is Samira's primary backend framework. She uses it for REST APIs, Eloquent models, resource controllers and full-stack applications."

  if (/(project|built|made|work|portfolio|app|website|demo)/i.test(q))
    return `Samira has built ${PROJECT_COUNT} real-world projects:\n\n${PROJECTS.map(project => `**${project.title}** - ${project.description}`).join('\n\n')}\n\nScroll to the Projects section to see them all.`

  if (/khdima/i.test(q))
    return "Khdima Link is a freelance marketplace connecting local tradesmen and artisans in the Souss-Massa region with clients. It uses Laravel, React, MySQL and Bootstrap."

  if (/event|advanced/i.test(q))
    return "AdvancedEvent is an event management system with workshops, experts, participants and online registrations. It uses Laravel, React, MySQL and Tailwind."

  if (/(education|study|school|degree|ofppt|background|experience|formation|training|learn)/i.test(q))
    return "Education:\n\n2024 - Present: Specialized Technician in Digital Development at OFPPT Ait Melloul, expected graduation June 2026.\n\n2022 - 2023: Bachelor's Degree in Physical Sciences."

  if (/(contact|email|reach|hire|message|connect|linkedin|github|social)/i.test(q))
    return `Here's how to reach Samira:\n\n**Email:** ${CONTACT_EMAIL}\n**WhatsApp:** ${WHATSAPP_URL}\n**LinkedIn:** ${LINKEDIN_URL}\n**GitHub:** ${GITHUB_URL}\n**Location:** Agadir, Morocco\n\nOr scroll down to the Contact section and send her a message directly.`

  if (/(available|availab|open|hire|job|intern|work|recruit|opportun|position|role|full.time|freelance|stage)/i.test(q))
    return `Samira is currently available for:\n\n**Internship** (stage PFE)\n**Full-time position** (CDI)\n**Freelance projects**\n\nShe's based in Agadir, Morocco. Reach her at ${CONTACT_EMAIL}.`

  if (/(where|location|city|country|morocco|agadir|remote|based)/i.test(q))
    return "Samira is based in **Agadir, Morocco**. She's open to remote work and on-site opportunities in Morocco."

  if (/(speak|spoken|arabic|french|english|language)/i.test(q))
    return "Samira speaks **3 languages:**\n\nArabic - Native\nFrench - Fluent\nEnglish - Proficient"

  if (/(who|about|introduce|yourself|samira|tell me)/i.test(q))
    return `**Samira Aboutarik** is a Full Stack Web Developer from Agadir, Morocco.\n\nShe's currently in her 2nd year at OFPPT studying Digital Development, with expertise in **Laravel** and **React**.\n\nShe's built ${PROJECT_COUNT}+ real-world applications and is available for internship, full-time or freelance work.`

  if (/(hello|hi|hey|salut|bonjour|salam)/i.test(q))
    return "Hi there! I'm Samira's portfolio assistant. I can answer questions about her skills, projects, education, contact details and availability."

  if (/[\u0600-\u06FF]/.test(q))
    return "Marhaba! Samira is a Full Stack Web Developer from Agadir, Morocco. She works with React, Laravel, PHP and MySQL."

  if (/(cv|resume|download)/i.test(q))
    return "You can download Samira's CV directly from the navbar by clicking the CV button."

  if (/(portfolio|website|built with|this site|this web|how is this)/i.test(q))
    return "This portfolio was built with React 18, Vite, Tailwind CSS, Framer Motion, a custom cursor, and a particle canvas background."

  if (/(easter|egg|secret|konami|hidden|cheat)/i.test(q))
    return "There is a secret easter egg hidden in this portfolio. Try the Konami Code on your keyboard."

  if (/(salary|rate|pay|cost|price|charge|how much)/i.test(q))
    return `For salary or rate expectations, please contact Samira directly. Reach her at **${CONTACT_EMAIL}** or via LinkedIn.`

  return "Great question. I can help with Samira's skills, projects, education, contact details, availability, and CV."
}

export default function Chatbot({ dark }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Samira's portfolio assistant. Ask me anything about her skills, projects, experience, or how to hire her!" },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = (text || input).trim()
    if (!msg || typing) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)
    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'assistant', text: getResponse(msg) }])
    }, delay)
  }

  const QUICK_REPLIES = [
    "What's her tech stack?",
    'Show her projects',
    'Is she available?',
    'How to contact her?',
  ]

  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/\*\*(.+?)\*\*/g)
      return (
        <span key={i}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className={`rounded-2xl w-80 overflow-hidden flex flex-col ${
              dark ? 'bg-[#0c0c18] border border-white/10 shadow-2xl shadow-black/40' : 'bg-white border border-gray-200 shadow-2xl'
            }`}
            style={{ height: 460 }}
          >
            <div className="grad-btn p-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-display font-bold text-sm text-white">S</div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Samira's Assistant</p>
                <p className="text-xs text-white/65 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Ask me anything
                </p>
              </div>
              <motion.button aria-label="Fermer le chatbot" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <HiXMark size={18} />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'grad-btn text-white rounded-br-sm'
                      : dark ? 'bg-white/8 text-gray-200 rounded-bl-sm' : 'bg-gray-100 text-gray-700 rounded-bl-sm'
                  }`}>
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center ${dark ? 'bg-white/8' : 'bg-gray-100'}`}>
                    {[0,1,2].map(j => (
                      <span key={j} className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length <= 1 && (
              <div className={`px-3 pb-2 flex gap-1.5 flex-wrap shrink-0 border-t pt-2 ${dark ? 'border-white/5' : 'border-gray-100'}`}>
                {QUICK_REPLIES.map(q => (
                  <button key={q} onClick={() => send(q)} disabled={typing}
                    className={`text-xs px-3 py-1.5 rounded-xl transition-all hover:scale-105 font-medium ${
                      dark ? 'bg-white/5 text-gray-400 hover:bg-purple-500/15 hover:text-purple-400' : 'bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-600'
                    }`}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className={`p-3 border-t shrink-0 ${dark ? 'border-white/8' : 'border-gray-100'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !typing && send()}
                  placeholder="Ask me anything..."
                  disabled={typing}
                  className={`flex-1 px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-purple-500/40 disabled:opacity-60 ${
                    dark ? 'bg-white/6 border border-white/10 text-white placeholder-gray-600 hover:border-white/20' : 'bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white'
                  }`}
                />
                <motion.button
                  aria-label="Envoyer le message"
                  whileHover={{ scale: typing ? 1 : 1.08 }}
                  whileTap={{ scale: typing ? 1 : 0.93 }}
                  onClick={() => send()}
                  disabled={typing || !input.trim()}
                  className="w-10 h-10 rounded-xl grad-btn flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 disabled:opacity-50"
                >
                  <HiPaperAirplane size={15} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button aria-label={open ? 'Fermer le chatbot' : 'Ouvrir le chatbot'} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full grad-btn flex items-center justify-center shadow-xl shadow-purple-500/30 relative">
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiXMark size={22} className="text-white" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><RiRobot2Line size={22} className="text-white" /></motion.span>
          }
        </AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#070712] animate-pulse" />}
      </motion.button>
    </div>
  )
}
