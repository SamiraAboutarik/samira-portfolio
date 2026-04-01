import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowTopRightOnSquare, HiCodeBracket, HiArrowRight } from 'react-icons/hi2'
import { SiReact, SiLaravel, SiPhp, SiPython, SiMysql, SiBootstrap, SiTailwindcss, SiRedux, SiJavascript } from 'react-icons/si'
import ProjectModal from './ProjectModal'
import { PROJECTS } from '../data/index'

const TECH_ICONS  = { React: SiReact, Laravel: SiLaravel, PHP: SiPhp, Python: SiPython, MySQL: SiMysql, Bootstrap: SiBootstrap, Tailwind: SiTailwindcss, Redux: SiRedux, JavaScript: SiJavascript }
const TECH_COLORS = { React: '#61DAFB', Laravel: '#FF2D20', PHP: '#777BB4', Python: '#3776AB', MySQL: '#4479A1', Bootstrap: '#7952B3', Tailwind: '#38BDF8', Redux: '#764ABC', JavaScript: '#F7DF1E' }



const FILTERS = ['All', 'React', 'Laravel', 'Python']

function ProjectCard({ project, dark, onOpen, index }) {
  const { title, description, tech, color, accentColor, image, github, live, featured } = project
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col ${
        dark
          ? 'bg-white/[0.03] border-white/[0.07] hover:border-white/[0.16]'
          : 'bg-white border-gray-200 shadow-md hover:shadow-xl'
      }`}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        {/* Gradient fallback always visible behind image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`} />

        {/* Project screenshot */}
        {!imgError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Fallback if image missing */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <HiCodeBracket size={40} className="text-white/60" />
            <span className="text-white/60 text-xs font-medium">Screenshot coming soon</span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              Featured
            </span>
          </div>
        )}

        {/* Quick action buttons — appear on hover */}
        <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <motion.a
            href={github} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
            className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <HiCodeBracket size={15} />
          </motion.a>
          <motion.a
            href={live} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
            className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <HiArrowTopRightOnSquare size={15} />
          </motion.a>
        </div>

        {/* Bottom gradient fade into card */}
        <div className={`absolute bottom-0 left-0 right-0 h-16 ${
          dark
            ? 'bg-gradient-to-t from-[#0a0a14] to-transparent'
            : 'bg-gradient-to-t from-white to-transparent'
        }`} />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-lg mb-1.5">{title}</h3>
        <p className={`text-sm leading-relaxed mb-4 flex-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map(t => {
            const Icon = TECH_ICONS[t]
            return (
              <span key={t} className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg font-medium border ${
                dark ? 'bg-white/5 border-white/8 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
              }`}>
                {Icon && <Icon size={11} style={{ color: TECH_COLORS[t] }} />}
                {t}
              </span>
            )
          })}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(project)}
          className="flex items-center gap-2 text-sm font-semibold transition-colors group/btn"
          style={{ color: accentColor }}
          data-cursor
        >
          View case study
          <HiArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${color}`}
      />
    </motion.div>
  )
}

export default function Projects({ dark }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalProject, setModalProject] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 })

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
          Real-world <span className="grad-text">projects</span>
        </h2>
        <p className={`mt-4 max-w-xl mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          Each project solves a real problem. Here's a selection of my best work.
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
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
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

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              dark={dark}
              onOpen={setModalProject}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {modalProject && (
        <ProjectModal project={modalProject} dark={dark} onClose={() => setModalProject(null)} />
      )}
    </section>
  )
}