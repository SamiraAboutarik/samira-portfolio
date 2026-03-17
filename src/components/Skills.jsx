import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiMysql, SiMongodb,
  SiPython, SiGit, SiGithub
} from 'react-icons/si'
import { HiServerStack } from 'react-icons/hi2'
import { TECH_CLOUD } from '../data'

const SKILLS = {
  Frontend: [
    { name: 'HTML5',        level: 95, Icon: SiHtml5,       color: '#E34F26' },
    { name: 'CSS3',         level: 93, Icon: SiCss,         color: '#1572B6' },
    { name: 'JavaScript',   level: 85, Icon: SiJavascript,  color: '#F7DF1E' },
    { name: 'React',        level: 82, Icon: SiReact,       color: '#61DAFB' },
    { name: 'Tailwind CSS', level: 88, Icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Bootstrap',    level: 90, Icon: SiBootstrap,   color: '#7952B3' },
  ],
  Backend: [
    { name: 'PHP',     level: 80, Icon: SiPhp,     color: '#777BB4' },
    { name: 'Laravel', level: 85, Icon: SiLaravel, color: '#FF2D20' },
    { name: 'MySQL',   level: 78, Icon: SiMysql,   color: '#4479A1' },
    { name: 'MongoDB', level: 70, Icon: SiMongodb, color: '#47A248' },
  ],
  Other: [
    { name: 'Python',   level: 65, Icon: SiPython,  color: '#3776AB' },
    { name: 'Git',      level: 90, Icon: SiGit,     color: '#F05032' },
    { name: 'GitHub',   level: 90, Icon: SiGithub,  color: '#181717' },
    { name: 'REST APIs',level: 85, Icon: HiServerStack, color: '#a855f7' },
  ],
}

const TAB_LABELS = Object.keys(SKILLS)

export default function Skills({ dark, t }) {
  const [active, setActive] = useState('Frontend')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const skills = SKILLS[active]

  return (
    <section id="skills" className={`py-28 px-4 ${dark ? 'bg-white/[0.015]' : 'bg-gray-50/70'}`} ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">Compétences</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Mon stack <span className="grad-text">technique</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 p-1.5 rounded-2xl w-fit mx-auto ${dark ? 'bg-white/4' : 'bg-gray-100'}"
        >
          <div className={`flex gap-1 p-1.5 rounded-2xl ${dark ? 'bg-white/4' : 'bg-white border border-gray-200'}`}>
            {TAB_LABELS.map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === tab
                    ? 'text-white'
                    : dark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {active === tab && (
                  <motion.div
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-xl grad-btn shadow-md shadow-purple-500/25"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`group p-5 rounded-2xl border transition-all duration-300 ${
                  dark
                    ? 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: skill.color + '15', border: `1px solid ${skill.color}30` }}
                  >
                    <skill.Icon size={22} style={{ color: skill.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm">{skill.name}</span>
                      <span className="text-xs font-bold grad-text">{skill.level}%</span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/8' : 'bg-gray-100'}`}>
                      <motion.div
                        className="h-full rounded-full grad-btn"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-6 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            Également maîtrisées
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {TECH_CLOUD.map((tech, i) => {
              const colors = [
                { bg: 'bg-purple-500/8 border-purple-500/20 text-purple-400', hover: 'hover:bg-purple-500/15' },
                { bg: 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400',       hover: 'hover:bg-cyan-500/15' },
                { bg: 'bg-indigo-500/8 border-indigo-500/20 text-indigo-400', hover: 'hover:bg-indigo-500/15' },
                { bg: 'bg-pink-500/8 border-pink-500/20 text-pink-400',       hover: 'hover:bg-pink-500/15' },
                { bg: 'bg-emerald-500/8 border-emerald-500/20 text-emerald-400', hover: 'hover:bg-emerald-500/15' },
              ]
              const c = colors[i % colors.length]
              return (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-default ${c.bg} ${c.hover}`}
                  data-cursor
                >
                  {tech}
                </motion.span>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}