import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'

export default function ScrollToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full grad-btn flex items-center justify-center shadow-lg shadow-purple-500/25"
          aria-label="Retour en haut"
        >
          <HiArrowUp size={16} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
