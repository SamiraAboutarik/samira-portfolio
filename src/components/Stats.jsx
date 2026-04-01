import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { STATS } from '../data/index'



function StatCard({ stat, index, inView, dark }) {
  const { Icon, num, suffix, label, sub, color, gradient, lightBg, border } = stat

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [8, -8])
  const rotateY = useTransform(x, [-60, 60], [-8, 8])
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.88 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-2xl p-6 overflow-hidden cursor-default border ${
          dark
            ? 'bg-white/[0.04] border-white/[0.08]'
            : `bg-gradient-to-br ${lightBg} ${border}`
        }`}
        data-cursor
      >
        {/* Animated glow blob */}
        <motion.div
          className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-30"
          style={{ background: color }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
        />

        {/* Top row: icon + number */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg`}
            style={{ boxShadow: `0 8px 20px ${color}40` }}
          >
            <Icon size={20} className="text-white" />
          </div>

          <motion.div
            className="font-display font-extrabold text-4xl leading-none"
            style={{ color }}
          >
            {inView
              ? <CountUp start={0} end={num} duration={2.4} delay={index * 0.15} suffix={suffix} />
              : `0${suffix}`
            }
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-3 relative z-10"
          style={{ background: `linear-gradient(to right, ${color}40, transparent)` }}
        />

        {/* Labels */}
        <div className="relative z-10">
          <p className={`font-semibold text-sm mb-0.5 ${dark ? 'text-white' : 'text-gray-800'}`}>
            {label}
          </p>
          <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
            {sub}
          </p>
        </div>

        {/* Bottom accent bar */}
        <motion.div
          className={`absolute bottom-0 left-0 h-[3px] rounded-b-2xl bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: 1, delay: 0.4 + index * 0.15, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Stats({ dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}