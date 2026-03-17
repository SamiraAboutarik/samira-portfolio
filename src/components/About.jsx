import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiMapPin, HiAcademicCap, HiBriefcase, HiLanguage } from 'react-icons/hi2'

const INFO_ICONS = [HiMapPin, HiAcademicCap, HiBriefcase, HiLanguage]

export default function About({ dark, t = {} }) {
  const ta = t.about || {
    tag: 'À propos de moi',
    title: 'Passionnée par le code,',
    titleAccent: 'orientée résultats',
    p1: 'Étudiante en 2ème année de',
    p1bold: 'Développement Web Full Stack (DEVOWFS)',
    p1rest: "à l'OFPPT Maroc.",
    p2: 'Mon objectif : intégrer une équipe dynamique et livrer des produits qui font la différence.',
    info: [
      { label: 'Localisation', value: 'Agadir, Maroc' },
      { label: 'Formation',    value: 'OFPPT DEVOWFS' },
      { label: 'Disponibilité',value: 'Stage / CDI' },
      { label: 'Langues',      value: 'AR · FR · EN' },
    ],
    yearsLabel: "ans d'étude",
    projectsLabel: 'projets réalisés',
  }
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const fadeL = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25,0.46,0.45,0.94] } } }
  const fadeR = { hidden: { opacity: 0, x:  50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25,0.46,0.45,0.94] } } }

  return (
    <section id="about" className="py-28 px-4 max-w-6xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Avatar */}
        <motion.div variants={fadeL} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex justify-center">
          <div className="relative select-none">
            <motion.div animate={{ y: [0,-14,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="w-64 h-64 relative">
              <div className="absolute inset-0 rounded-full grad-btn opacity-15 blur-2xl" />
              <div className={`w-full h-full rounded-full flex items-center justify-center relative ${dark ? 'bg-gradient-to-br from-purple-950/60 to-cyan-950/60 border-2 border-purple-500/25' : 'bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200'}`}>
                <img src="/monpic.png" alt="Samira Aboutarik" className="w-full h-full object-cover rounded-full" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} className="absolute inset-[-18px]">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 bg-purple-500 ${dark ? 'border-[#070712]' : 'border-gray-50'}`} />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 11, repeat: Infinity, ease: 'linear' }} className="absolute inset-[-34px]">
                  <div className={`absolute bottom-4 right-3 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 ${dark ? 'border-[#070712]' : 'border-gray-50'}`} />
                </motion.div>
                <div className={`absolute inset-[-18px] rounded-full border border-dashed ${dark ? 'border-purple-500/20' : 'border-purple-200'}`} />
                <div className={`absolute inset-[-34px] rounded-full border border-dashed ${dark ? 'border-cyan-500/12' : 'border-cyan-200'}`} />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className={`absolute -right-6 top-6 rounded-2xl px-4 py-3 text-center shadow-lg ${dark ? 'glass-dark' : 'bg-white border border-gray-100 shadow-md'}`}>
              <div className="font-display font-bold text-2xl grad-text">2+</div>
              <div className={`text-[11px] font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{ta.yearsLabel}</div>
            </motion.div>
            <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={`absolute -left-8 bottom-10 rounded-2xl px-4 py-3 text-center shadow-lg ${dark ? 'glass-dark' : 'bg-white border border-gray-100 shadow-md'}`}>
              <div className="font-display font-bold text-2xl grad-text">10+</div>
              <div className={`text-[11px] font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{ta.projectsLabel}</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeR} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-7">
          <div>
            <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">{ta.tag}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              {ta.title} <span className="grad-text">{ta.titleAccent}</span>
            </h2>
          </div>
          <p className={`leading-relaxed text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            {ta.p1} <strong className={dark ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>{ta.p1bold}</strong> {ta.p1rest}
          </p>
          <p className={`leading-relaxed text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{ta.p2}</p>

          <div className="grid grid-cols-2 gap-3">
            {ta.info.map(({ label, value }, idx) => {
              const Icon = INFO_ICONS[idx]
              return (
                <div key={label} className={`flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 ${dark ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]' : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'}`}>
                  <div className="w-8 h-8 rounded-lg grad-btn flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-[10px] mb-0.5 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
                    <div className="text-xs font-semibold">{value}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 pt-1">
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              href="https://github.com/SamiraAboutarik" target="_blank" rel="noreferrer"
              className={`flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-xl transition-colors ${dark ? 'bg-white/8 hover:bg-white/14 text-gray-200' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
              <FiGithub size={16} /> GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              href="#" className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-xl bg-[#0077B5] hover:bg-[#0069a3] text-white transition-colors">
              <FiLinkedin size={16} /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}