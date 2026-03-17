import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function NotFound({ dark }) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 text-center ${dark ? 'bg-[#070712] text-white' : 'bg-gray-50 text-gray-900'}`}>

      {/* Animated glitch 404 */}
      <motion.div
        className="relative mb-8 select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span
          className="font-display font-extrabold text-[140px] md:text-[200px] leading-none grad-text"
          style={{ lineHeight: 1 }}
        >
          404
        </span>
        {/* Glitch layers */}
        <motion.span
          className="absolute inset-0 font-display font-extrabold text-[140px] md:text-[200px] leading-none text-cyan-400 opacity-30"
          animate={{ x: [-3, 3, -3], skewX: [-2, 2, -2] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatType: 'mirror' }}
          style={{ lineHeight: 1 }}
        >
          404
        </motion.span>
        <motion.span
          className="absolute inset-0 font-display font-extrabold text-[140px] md:text-[200px] leading-none text-purple-400 opacity-20"
          animate={{ x: [3, -3, 3], skewX: [2, -2, 2] }}
          transition={{ duration: 0.18, repeat: Infinity, repeatType: 'mirror', delay: 0.05 }}
          style={{ lineHeight: 1 }}
        >
          404
        </motion.span>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="font-display font-bold text-2xl md:text-3xl mb-3">
          Oops! Page introuvable
        </h1>
        <p className={`text-base mb-8 max-w-md ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour explorer le portfolio de Samira.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="grad-btn text-white font-semibold px-8 py-4 rounded-2xl inline-flex items-center gap-2 shadow-lg shadow-purple-500/25"
        >
          ← Retour à l'accueil
        </motion.a>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#a855f7' : '#06b6d4',
              opacity: 0.25,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
