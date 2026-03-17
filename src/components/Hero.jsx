import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import {
  SiReact, SiLaravel, SiPhp, SiJavascript, SiTailwindcss, SiMysql
} from 'react-icons/si'
import { HiArrowDown, HiArrowRight, HiEnvelope } from 'react-icons/hi2'
import MagneticButton from './MagneticButton'

const TECH_STACK = [
  { Icon: SiReact,      label: 'React',    color: '#61DAFB' },
  { Icon: SiLaravel,    label: 'Laravel',  color: '#FF2D20' },
  { Icon: SiPhp,        label: 'PHP',      color: '#777BB4' },
  { Icon: SiJavascript, label: 'JS',       color: '#F7DF1E' },
  { Icon: SiTailwindcss,label: 'Tailwind', color: '#38BDF8' },
  { Icon: SiMysql,      label: 'MySQL',    color: '#4479A1' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero({ dark }) {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20">

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-8 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 right-8 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent)' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl w-full"
      >
        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium border ${
            dark
              ? 'bg-green-500/5 text-green-400 border-green-500/20'
              : 'bg-green-50 text-green-700 border-green-200'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Disponible pour des opportunités
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={item}>
          <h1 className="font-display font-extrabold leading-[1.05] mb-4">
            <span className={`block text-5xl md:text-7xl mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
              Bonjour, je suis
            </span>
            <span className="block text-6xl md:text-8xl grad-text">
              Samira
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-6">
          <div className={`w-8 h-[2px] rounded-full ${dark ? 'bg-gray-600' : 'bg-gray-300'}`} />
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2200,
              'Laravel Expert',       2200,
              'React Developer',      2200,
              'UI/UX Enthusiast',     2200,
              'Problem Solver',       2200,
            ]}
            wrapper="span"
            speed={55}
            deletionSpeed={75}
            repeat={Infinity}
            className={`font-display font-semibold text-xl md:text-2xl tracking-wide ${dark ? 'text-gray-300' : 'text-gray-600'}`}
          />
          <div className={`w-8 h-[2px] rounded-full ${dark ? 'bg-gray-600' : 'bg-gray-300'}`} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Je conçois et développe des applications web modernes, scalables et centrées sur
          l'utilisateur — du design à la mise en production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-14">
          <MagneticButton
            className="grad-btn text-white font-semibold px-8 py-4 rounded-2xl shadow-lg flex items-center gap-2.5 group transition-all"
            href="#projects"
          >
            Voir mes projets
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className={`font-semibold px-8 py-4 rounded-2xl flex items-center gap-2.5 transition-all ${
              dark
                ? 'bg-white/8 hover:bg-white/14 border border-white/10 text-white'
                : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-900'
            }`}
          >
            <HiEnvelope size={18} />
            Me contacter
          </MagneticButton>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-5">
          {TECH_STACK.map(({ Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.07 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="flex flex-col items-center gap-1.5 group cursor-default"
              data-cursor
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                dark ? 'bg-white/5 border border-white/8 group-hover:border-white/20' : 'bg-white border border-gray-200 shadow-sm group-hover:shadow-md'
              }`}>
                <Icon size={22} style={{ color }} />
              </div>
              <span className={`text-[10px] font-medium tracking-wide ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8"
      >
        <Link to="about" smooth duration={700} offset={-80} className="cursor-pointer flex flex-col items-center gap-2 group">
          <span className={`text-xs tracking-widest uppercase ${dark ? 'text-gray-600' : 'text-gray-400'}`}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              dark ? 'border-white/10 group-hover:border-purple-500/50' : 'border-gray-200 group-hover:border-purple-400'
            } transition-colors`}
          >
            <HiArrowDown size={14} className={dark ? 'text-gray-500' : 'text-gray-400'} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
