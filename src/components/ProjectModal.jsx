import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiArrowTopRightOnSquare, HiExclamationTriangle, HiCheckCircle } from 'react-icons/hi2'
import { SiGithub, SiReact, SiLaravel, SiPhp, SiPython, SiMysql, SiBootstrap, SiTailwindcss, SiRedux, SiJavascript } from 'react-icons/si'

const TECH_ICONS  = { React: SiReact, Laravel: SiLaravel, PHP: SiPhp, Python: SiPython, MySQL: SiMysql, Bootstrap: SiBootstrap, Tailwind: SiTailwindcss, Redux: SiRedux, JavaScript: SiJavascript }
const TECH_COLORS = { React: '#61DAFB', Laravel: '#FF2D20', PHP: '#777BB4', Python: '#3776AB', MySQL: '#4479A1', Bootstrap: '#7952B3', Tailwind: '#38BDF8', Redux: '#764ABC', JavaScript: '#F7DF1E' }

export default function ProjectModal({ project, dark, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.88, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 28 }} transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className={`rounded-3xl max-w-lg w-full overflow-hidden ${dark ? 'bg-[#0c0c18] border border-white/10' : 'bg-white border border-gray-200 shadow-2xl'}`}
          onClick={e => e.stopPropagation()}>
          <div className={`h-[3px] w-full bg-gradient-to-r ${project.color}`} />
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display font-bold text-2xl mb-1">{project.title}</h3>
                <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{project.description}</p>
              </div>
              <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose}
                className={`w-9 h-9 rounded-xl flex items-center justify-center ml-4 shrink-0 ${dark ? 'bg-white/8 hover:bg-white/15 text-gray-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-500'}`}>
                <HiXMark size={18} />
              </motion.button>
            </div>

            <div className="space-y-3 mb-6">
              <div className={`rounded-2xl p-4 flex gap-3 ${dark ? 'bg-red-500/5 border border-red-500/12' : 'bg-red-50 border border-red-100'}`}>
                <HiExclamationTriangle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Problem identified</p>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{project.problem}</p>
                </div>
              </div>
              <div className={`rounded-2xl p-4 flex gap-3 ${dark ? 'bg-green-500/5 border border-green-500/12' : 'bg-green-50 border border-green-100'}`}>
                <HiCheckCircle size={18} className="text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Solution delivered</p>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="mb-7">
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Stack used</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => {
                  const Icon = TECH_ICONS[t]
                  return (
                    <div key={t} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${dark ? 'bg-white/5 border-white/8 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                      {Icon && <Icon size={13} style={{ color: TECH_COLORS[t] }} />} {t}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={project.github} target="_blank" rel="noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm ${dark ? 'bg-white/8 hover:bg-white/15 text-gray-200' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                <SiGithub size={16} /> GitHub
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={project.live} target="_blank" rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white grad-btn shadow-lg shadow-purple-500/25">
                <HiArrowTopRightOnSquare size={16} /> Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
