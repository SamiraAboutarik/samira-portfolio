import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EducationS} from '../data/index'



export default function Education({ dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="Education" className="py-28 px-4" ref={ref}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">Education</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            My <span className="grad-text">journey</span>
          </h2>
        </motion.div>

        {/* Cards — vertical stack */}
        <div className="space-y-4">
          {EducationS.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-6 border overflow-hidden transition-all duration-300 ${
                  dark
                    ? 'bg-white/[0.03] border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.05]'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Subtle gradient glow on hover */}
                <div className={`absolute inset-0 opacity-0 hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${exp.gradient} pointer-events-none`} />

                <div className="flex items-start gap-4 relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${exp.gradient} shadow-lg`}>
                    <exp.Icon size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-xs font-bold ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {exp.date}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-lg leading-tight mb-1">{exp.title}</h3>
                    <p className={`text-xs font-semibold mb-3 grad-text`}>{exp.org}</p>
                    <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map(tag => (
                        <span key={tag} className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${
                          dark
                            ? 'bg-white/6 text-gray-400 border border-white/8'
                            : 'bg-gray-50 text-gray-600 border border-gray-200'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}