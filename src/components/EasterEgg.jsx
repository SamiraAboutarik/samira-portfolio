import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiSparkles } from 'react-icons/hi2'
import Confetti from 'react-confetti'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function EasterEgg({ dark }) {
  const [show, setShow]   = useState(false)
  const [buffer, setBuffer] = useState([])
  const [dims, setDims]   = useState({ w: 0, h: 0 })

  useEffect(() => { setDims({ w: window.innerWidth, h: window.innerHeight }) }, [show])

  useEffect(() => {
    const onKey = (e) => {
      setBuffer(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (next.join(',') === KONAMI.join(',')) { setShow(true); return [] }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <>
          <Confetti width={dims.w} height={dims.h} numberOfPieces={280} recycle={false}
            colors={['#a855f7','#818cf8','#06b6d4','#f472b6','#facc15']}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 99998, pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99997] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(14px)' }}
            onClick={() => setShow(false)}>
            <motion.div initial={{ scale: 0.5, rotate: -8, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }} transition={{ type: 'spring', damping: 18, stiffness: 280 }}
              className={`rounded-3xl p-10 max-w-sm w-full text-center border ${dark ? 'bg-[#0c0c18] border-purple-500/30' : 'bg-white border-purple-200 shadow-2xl'}`}
              onClick={e => e.stopPropagation()}>
              <motion.div animate={{ rotate: [0,-12,12,-8,8,0] }} transition={{ duration: 0.6, delay: 0.2 }} className="text-6xl mb-5 inline-block">🥚</motion.div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <HiSparkles className="text-yellow-400" size={20} />
                <h3 className="font-display font-extrabold text-2xl grad-text">Secret found! 🎉</h3>
                <HiSparkles className="text-yellow-400" size={20} />
              </div>
              <p className={`text-sm leading-relaxed mb-7 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                You discovered Samira's easter egg! Her superpower: turning coffee ☕ and lo-fi music 🎵 into production-ready web applications.
              </p>
              <div className="flex justify-center gap-3 text-3xl mb-7">
                {['☕','🎵','💻','🚀'].map((e, i) => (
                  <motion.span key={e} animate={{ y: [0,-8,0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}>{e}</motion.span>
                ))}
              </div>
              <div className={`text-[10px] font-mono mb-6 px-3 py-2 rounded-xl ${dark ? 'bg-white/5 text-gray-500' : 'bg-gray-50 text-gray-400'}`}>↑ ↑ ↓ ↓ ← → ← → B A</div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShow(false)}
                className="grad-btn text-white font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-purple-500/25 flex items-center gap-2 mx-auto">
                <HiXMark size={16} /> Close
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
