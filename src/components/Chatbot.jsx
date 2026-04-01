import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiPaperAirplane } from 'react-icons/hi2'
import { RiRobot2Line } from 'react-icons/ri'

// Smart response engine — covers any question about the portfolio
function getResponse(input) {
  const q = input.toLowerCase().trim()

  // ── SKILLS ────────────────────────────────────────────────────────────
  if (/(skill|tech|stack|know|use|language|framework|tool|mastered|proficient|expertise)/i.test(q))
    return "Samira's tech stack spans the full web:\n\n🖥️ **Frontend:** React (75%), Tailwind CSS (82%), Bootstrap (85%), JavaScript (78%), HTML5 (88%), CSS3 (86%)\n\n⚙️ **Backend:** Laravel (78%), PHP (75%), MySQL (72%), MongoDB (60%)\n\n🛠️ **Tools:** Git (82%), REST APIs (78%), Python (55%), Agile/Scrum"

  // ── REACT ──────────────────────────────────────────────────────────────
  if (/\breact\b/i.test(q))
    return "Yes! React is one of Samira's main frontend technologies. She uses it with Redux Toolkit (createAsyncThunk), React Scroll, Framer Motion and Tailwind CSS. She's built multiple SPAs including this portfolio and the Product Manager App."

  // ── LARAVEL ────────────────────────────────────────────────────────────
  if (/laravel|php|eloquent|artisan|blade/i.test(q))
    return "Laravel is Samira's primary backend framework. She's proficient in Eloquent ORM, migrations, seeders, factories, resource controllers, FormRequest validation, Route::resource and building RESTful APIs. She's used it in Khdima Link, AdvancedEvent and School Manager."

  // ── PROJECTS ───────────────────────────────────────────────────────────
  if (/(project|built|made|work|portfolio|app|website|demo)/i.test(q))
    return "Samira has built 4 real-world projects:\n\n🔴 **Khdima Link** — Freelance marketplace for local tradesmen (Laravel + React + MySQL)\n\n🟢 **AdvancedEvent** — Event management system with JWT auth (Laravel + React + Redux)\n\n🟠 **School Manager** — Complete academic management app (Laravel + PHP + MySQL)\n\n🔵 **Product Manager** — SPA with Redux Toolkit and image upload (React + JavaScript)\n\nScroll to the Projects section to see them all!"

  // ── KHDIMA LINK ────────────────────────────────────────────────────────
  if (/khdima/i.test(q))
    return "Khdima Link is Samira's most ambitious project — a freelance marketplace connecting local tradesmen and artisans in the Souss-Massa region with clients. It features user profiles, a booking system, messaging and reviews. Built with Laravel, React, MySQL and Bootstrap. She also created the full pitch deck and investor presentation for it."

  // ── ADVANCED EVENT ─────────────────────────────────────────────────────
  if (/event|advanced/i.test(q))
    return "AdvancedEvent is a complete event management system. It includes workshop management, expert profiles, participant registration and real-time stats. The backend is a Laravel REST API with JWT authentication, the frontend is React with Redux Toolkit. It's on her GitHub: github.com/SamiraAboutarik/AdvancedEvent"

  // ── EDUCATION / EXPERIENCE ─────────────────────────────────────────────
  if (/(education|study|school|degree|ofppt|background|experience|formation|training|learn)/i.test(q))
    return "📚 **Education:**\n\n🎓 **2024 – Present:** Specialized Technician in Digital Development at OFPPT Ait Melloul — expected graduation June 2026\n\n📗 **2022 – 2023:** Bachelor's Degree in Physical Sciences\n\nShe's been building real-world projects throughout her training in Laravel, React, MySQL, MongoDB, Git and Agile/Scrum."

  // ── CONTACT ────────────────────────────────────────────────────────────
  if (/(contact|email|reach|hire|message|connect|linkedin|github|social)/i.test(q))
    return "Here's how to reach Samira:\n\n📧 **Email:** samira.aboutarik@gmail.com\n💼 **LinkedIn:** linkedin.com/in/samira-aboutarik\n🐙 **GitHub:** github.com/SamiraAboutarik\n📍 **Location:** Agadir, Morocco\n\nOr just scroll down to the Contact section and send her a message directly! She replies within 24 hours."

  // ── AVAILABILITY ───────────────────────────────────────────────────────
  if (/(available|availab|open|hire|job|intern|work|recruit|opportun|position|role|full.time|freelance|stage)/i.test(q))
    return "✅ Samira is currently available for:\n\n• **Internship** (stage PFE)\n• **Full-time position** (CDI)\n• **Freelance projects**\n\nShe's based in Agadir, Morocco and available immediately. Reach her at samira.aboutarik@gmail.com"

  // ── LOCATION ───────────────────────────────────────────────────────────
  if (/(where|location|city|country|morocco|agadir|remote|based)/i.test(q))
    return "Samira is based in **Agadir, Morocco** 🇲🇦 She's open to remote work and on-site opportunities in Morocco. She speaks Arabic (native), French (fluent) and English (proficient)."

  // ── LANGUAGES (spoken) ─────────────────────────────────────────────────
  if (/(speak|spoken|arabic|french|english|language)/i.test(q))
    return "Samira speaks **3 languages:**\n\n🇲🇦 Arabic — Native\n🇫🇷 French — Fluent\n🇬🇧 English — Proficient\n\nShe can work in any of these languages."

  // ── WHO IS ──────────────────────────────────────────────────────────────
  if (/(who|about|introduce|yourself|samira|tell me)/i.test(q))
    return "👩‍💻 **Samira Aboutarik** is a Full Stack Web Developer from Agadir, Morocco.\n\nShe's currently in her 2nd year at OFPPT studying Digital Development, with expertise in **Laravel** (backend) and **React** (frontend).\n\nShe's built 4+ real-world applications, passionate about clean code, modern UI and solving real problems. Available for internship, full-time or freelance work!"

  // ── GREETINGS ───────────────────────────────────────────────────────────
  if (/(hello|hi|hey|salut|bonjour|salam|مرحبا)/i.test(q))
    return "Hi there! 👋 I'm Samira's portfolio assistant. I can answer anything about her:\n\n• Skills & tech stack\n• Projects she's built\n• Education & experience\n• How to contact or hire her\n\nWhat would you like to know?"

  // ── FRENCH ──────────────────────────────────────────────────────────────
  if (/(compétence|projet|expérience|formation|disponible|contacter|qui est)/i.test(q))
    return "Samira est une développeuse Full Stack basée à Agadir, Maroc 🇲🇦. Elle maîtrise React, Laravel, PHP, MySQL et bien plus. Elle est disponible pour un stage, CDI ou freelance. Posez-moi n'importe quelle question sur son profil !"

  // ── ARABIC ──────────────────────────────────────────────────────────────
  if (/[\u0600-\u06FF]/.test(q))
    return "مرحباً! 👋 أنا مساعد سميرة الرقمي. سميرة مطورة ويب متكاملة من أكادير، المغرب. تتقن React وLaravel وPHP وMySQL. متاحة للتدريب أو العمل الدائم. اسألني أي سؤال عنها!"

  // ── CV / RESUME ─────────────────────────────────────────────────────────
  if (/(cv|resume|download)/i.test(q))
    return "You can download Samira's CV directly from the navbar — click the **CV** button at the top right of the page! 📄"

  // ── PORTFOLIO / THIS WEBSITE ────────────────────────────────────────────
  if (/(portfolio|website|built with|this site|this web|how is this)/i.test(q))
    return "This portfolio was built by Samira herself using:\n\n⚛️ React 18 + Vite\n🎨 Tailwind CSS\n✨ Framer Motion (animations)\n🖱️ Custom magnetic cursor\n🌐 Particle canvas background\n🥚 Easter egg (try the Konami code!)\n\nEvery component is handcrafted — no templates!"

  // ── EASTER EGG ──────────────────────────────────────────────────────────
  if (/(easter|egg|secret|konami|hidden|cheat)/i.test(q))
    return "🥚 There's a secret easter egg hidden in this portfolio! Type the **Konami Code** on your keyboard:\n\n↑ ↑ ↓ ↓ ← → ← → B A\n\nSee what happens... 😉"

  // ── SALARY / RATE ───────────────────────────────────────────────────────
  if (/(salary|rate|pay|cost|price|charge|how much)/i.test(q))
    return "For salary or rate expectations, please contact Samira directly — it depends on the role, scope and location. Reach her at **samira.aboutarik@gmail.com** or via LinkedIn. She'll get back to you within 24h! 📬"

  // ── DEFAULT ─────────────────────────────────────────────────────────────
  return "Great question! I can help you with anything about Samira. Try asking about:\n\n💻 Her **skills** & tech stack\n🚀 Her **projects**\n🎓 Her **education** & experience\n📧 How to **contact** or **hire** her\n📄 **Download** her CV\n\nWhat would you like to know?"
}

export default function Chatbot({ dark }) {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! 👋 I'm Samira's portfolio assistant. Ask me anything about her skills, projects, experience, or how to hire her!" }
  ])
  const [input, setInput]   = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef           = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = (text || input).trim()
    if (!msg || typing) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)
    // Simulate thinking delay
    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'assistant', text: getResponse(msg) }])
    }, delay)
  }

  const QUICK_REPLIES = [
    "What's her tech stack?",
    "Show her projects",
    "Is she available?",
    "How to contact her?",
  ]

  // Format text with **bold** markdown
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
            {/* Header */}
            <div className="grad-btn p-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-display font-bold text-sm text-white">S</div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Samira's Assistant</p>
                <p className="text-xs text-white/65 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Ask me anything
                </p>
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <HiXMark size={18} />
              </motion.button>
            </div>

            {/* Messages */}
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

              {/* Typing indicator */}
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

            {/* Quick replies — only on first message */}
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

            {/* Input */}
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

      {/* Toggle button */}
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full grad-btn flex items-center justify-center shadow-xl shadow-purple-500/30 relative">
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiXMark size={22} className="text-white" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><RiRobot2Line size={22} className="text-white" /></motion.span>
          }
        </AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#070712] animate-pulse" />}
      </motion.button>
    </div>
  )
}