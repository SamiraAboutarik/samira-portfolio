import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiMysql, SiMongodb, SiPython, SiGit, SiGithub,
  SiNodedotjs, SiTypescript, SiDocker, SiLinux, SiFigma,
} from 'react-icons/si'
import { HiServerStack } from 'react-icons/hi2'

const SKILLS = {
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
const ROW1 = [
  { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
  { name: 'Laravel',     Icon: SiLaravel,     color: '#FF2D20' },
  { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind',    Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'PHP',         Icon: SiPhp,         color: '#777BB4' },
  { name: 'MySQL',       Icon: SiMysql,       color: '#4479A1' },
  { name: 'HTML5',       Icon: SiHtml5,       color: '#E34F26' },
  { name: 'Bootstrap',   Icon: SiBootstrap,   color: '#7952B3' },
]

const ROW2 = [
  { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
  { name: 'Python',      Icon: SiPython,      color: '#3776AB' },
  { name: 'Git',         Icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',      Icon: SiGithub,      color: '#6b7280' },
  { name: 'CSS3',        Icon: SiCss,         color: '#1572B6' },
  { name: 'REST APIs',   Icon: HiServerStack, color: '#a855f7' },
  { name: 'Node.js',     Icon: SiNodedotjs,   color: '#339933' },
  { name: 'Linux',       Icon: SiLinux,       color: '#FCC624' },
]

// Marquee item component
function MarqueeItem({ item, dark }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border mx-2 shrink-0 transition-all duration-300 cursor-default select-none ${
      dark
        ? 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.16]'
        : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
    }`}
    style={{ minWidth: 160 }}
    data-cursor>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: item.color + '18', border: `1px solid ${item.color}30` }}>
        <item.Icon size={22} style={{ color: item.color }} />
      </div>
      <span className="font-semibold text-sm">{item.name}</span>
    </div>
  )
}

// Infinite marquee row
function MarqueeRow({ items, direction = 1, dark }) {
  // Duplicate 3x for seamless loop
  const doubled = [...items, ...items, ...items]
  const duration = items.length * 4

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
        dark
          ? 'bg-gradient-to-r from-[#070712] to-transparent'
          : 'bg-gradient-to-r from-gray-50 to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
        dark
          ? 'bg-gradient-to-l from-[#070712] to-transparent'
          : 'bg-gradient-to-l from-gray-50 to-transparent'
      }`} />

      <motion.div
        className="flex"
        animate={{ x: direction === 1 ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item.name}-${i}`} item={item} dark={dark} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills({ dark }) {
  const [active, setActive] = useState('Frontend')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className={`py-28 ${dark ? 'bg-white/[0.015]' : 'bg-gray-50/70'}`} ref={ref}>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">Skills</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">My tech <span className="grad-text">stack</span></h2>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="flex justify-center mb-12">
          <div className={`flex gap-1 p-1.5 rounded-2xl ${dark ? 'bg-white/4' : 'bg-white border border-gray-200'}`}>
            {Object.keys(SKILLS).map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${active === tab ? 'text-white' : dark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
                {active === tab && (
                  <motion.div layoutId="skill-tab" className="absolute inset-0 rounded-xl grad-btn shadow-md shadow-purple-500/25" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="grid md:grid-cols-2 gap-4">
            {SKILLS[active].map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`group p-5 rounded-2xl border transition-all duration-300 ${dark ? 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: skill.color + '15', border: `1px solid ${skill.color}30` }}>
                    <skill.Icon size={22} style={{ color: skill.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm">{skill.name}</span>
                      <span className="text-xs font-bold grad-text">{skill.level}%</span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/8' : 'bg-gray-100'}`}>
                      <motion.div className="h-full rounded-full grad-btn" initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Marquee — full width, no horizontal padding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-16 space-y-4"
      >
        <p className={`text-xs font-medium uppercase tracking-widest text-center mb-8 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          Also proficient in
        </p>
        <MarqueeRow items={ROW1} direction={1} dark={dark} />
        <MarqueeRow items={ROW2} direction={-1} dark={dark} />
      </motion.div>

    </section>
  )
}