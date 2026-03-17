import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowTopRightOnSquare, HiCodeBracket, HiEye } from 'react-icons/hi2'
import { SiReact, SiLaravel, SiPhp, SiPython, SiMysql, SiBootstrap, SiTailwindcss, SiRedux, SiJavascript } from 'react-icons/si'
import { PROJECTS } from '../data'
import ProjectModal from './ProjectModal'

const TECH_ICONS = {
  React: SiReact, Laravel: SiLaravel, PHP: SiPhp, Python: SiPython,
  MySQL: SiMysql, Bootstrap: SiBootstrap, Tailwind: SiTailwindcss,
  Redux: SiRedux, JavaScript: SiJavascript,
}
const TECH_COLORS = {
  React: '#61DAFB', Laravel: '#FF2D20', PHP: '#777BB4', Python: '#3776AB',
  MySQL: '#4479A1', Bootstrap: '#7952B3', Tailwind: '#38BDF8',
  Redux: '#764ABC', JavaScript: '#F7DF1E',
}

const FILTERS = ['All', 'React', 'Laravel', 'Python']

export default function Projects({ dark }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalProject, setModalProject]   = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tech.includes(activeFilter))

  return (
    <section id="projects" className="py-28 px-4 max-w-6xl mx-auto" ref={ref}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">Portfolio</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl">
          Mes <span className="grad-text">projets</span>
        </h2>
        <p className={`mt-4 max-w-xl mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          Des solutions concrètes à des problèmes réels — du design à la mise en production.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2.5 justify-center mb-12"
      >
        {FILTERS.map(f => (
          <motion.button
            key={f}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveFilter(f)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden ${
              activeFilter === f
                ? 'grad-btn text-white shadow-lg shadow-purple-500/25'
                : dark
                ? 'bg-white/5 text-gray-400 border border-white/8 hover:bg-white/10 hover:text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {f}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                dark
                  ? 'bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.05]'
                  : 'bg-white border-gray-100 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Gradient top accent */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${project.color}`} />

              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03]`} />

              <div className="p-7 relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1 pr-4">
                    {project.featured && (
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2.5 ${
                        dark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'
                      }`}>
                        Featured
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl mb-2">{project.title}</h3>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.description}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className={`w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center bg-gradient-to-br ${project.color}`}
                  >
                    <HiCodeBracket size={20} className="text-white" />
                  </motion.div>
                </div>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => {
                    const Icon = TECH_ICONS[t]
                    const color = TECH_COLORS[t] || '#888'
                    return (
                      <div
                        key={t}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          dark
                            ? 'bg-white/5 border-white/8 text-gray-300 hover:bg-white/10'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                        }`}
                        title={t}
                      >
                        {Icon && <Icon size={13} style={{ color }} />}
                        {t}
                      </div>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setModalProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold grad-btn text-white shadow-md shadow-purple-500/20"
                  >
                    <HiEye size={16} />
                    Voir les détails
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.93 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      dark ? 'bg-white/5 hover:bg-white/12 text-gray-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600'
                    }`}
                    title="GitHub"
                  >
                    <HiCodeBracket size={16} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.93 }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      dark ? 'bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400' : 'bg-gray-100 hover:bg-purple-50 hover:text-purple-600 text-gray-600'
                    }`}
                    title="Live Demo"
                  >
                    <HiArrowTopRightOnSquare size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {modalProject && (
        <ProjectModal project={modalProject} dark={dark} onClose={() => setModalProject(null)} />
      )}
    </section>
  )
}
