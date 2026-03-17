import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { HiCube, HiSparkles, HiAcademicCap, HiFire } from 'react-icons/hi2'

const STATS = [
  { Icon: HiCube,        num: 10,  suffix: '+',    label: 'Projects completed',       color: 'from-purple-500 to-violet-500' },
  { Icon: HiSparkles,    num: 12,  suffix: '+',    label: 'Technologies mastered',    color: 'from-cyan-500 to-teal-500' },
  { Icon: HiAcademicCap, num: 2,   suffix: ' yrs', label: 'Years of training',        color: 'from-orange-500 to-amber-500' },
  { Icon: HiFire,        num: 100, suffix: '%',    label: 'Dedication & commitment',  color: 'from-pink-500 to-rose-500' },
]

export default function Stats({ dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ Icon, num, suffix, label, color }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className={`group relative rounded-2xl p-6 text-center overflow-hidden border transition-all duration-300 ${dark ? 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}
              data-cursor>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 bg-gradient-to-br ${color}`} />
              <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${color}`}>
                <Icon size={22} className="text-white" />
              </div>
              <div className="font-display font-extrabold text-3xl grad-text mb-1">
                {inView ? <CountUp start={0} end={num} duration={2.2} delay={i * 0.12} suffix={suffix} /> : `0${suffix}`}
              </div>
              <div className={`text-xs font-medium leading-snug ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
