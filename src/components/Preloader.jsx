import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onDone, 700)
          }, 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 3
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#070712] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="font-display font-extrabold text-6xl grad-text mb-2 select-none">SA</div>
            <div className="text-gray-500 text-sm tracking-[0.3em] uppercase">Samira Aboutarik</div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full grad-btn rounded-full"
              style={{ width: `${count}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <motion.span
            className="font-mono text-xs text-gray-600 tabular-nums"
            key={count}
          >
            {String(Math.min(count, 100)).padStart(3, '0')}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
