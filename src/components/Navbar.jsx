import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiSun, HiMoon, HiArrowDownTray, HiBars3, HiXMark } from 'react-icons/hi2'

const NAV_LINKS = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'services',   label: 'Services' },
  { id: 'Education', label: 'Education' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
]

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
<motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  // Changement ici : on enlève left-1/2 et translate
  className={`fixed top-3 inset-x-0 z-40 mx-auto w-[95%] max-w-5xl rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
    scrolled
      ? dark ? 'glass-dark shadow-xl shadow-black/20' : 'glass-light shadow-lg'
      : 'bg-transparent'
  }`}
>
        <motion.span whileHover={{ scale: 1.05 }} className="font-display font-extrabold text-xl grad-text cursor-default select-none shrink-0">
          SA
        </motion.span>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ id, label }) => (
            <Link key={id} to={id} smooth duration={700} offset={-80} spy onSetActive={() => setActive(id)} className="relative px-2.5 py-2 rounded-xl cursor-pointer group">
              <span className={`relative z-10 text-xs font-semibold whitespace-nowrap transition-colors ${
                active === id ? 'grad-text' : dark ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
              }`}>{label}</span>
              {active === id && (
                <motion.div layoutId="nav-pill" className={`absolute inset-0 rounded-xl ${dark ? 'bg-white/6' : 'bg-purple-50'}`} transition={{ type: 'spring', bounce: 0.25 }} />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <motion.button aria-label="Changer le thème" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={toggleDark}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${dark ? 'bg-white/8 hover:bg-white/14 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>
            <AnimatePresence mode="wait">
              {dark
                ? <motion.span key="sun"  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiSun size={16} /></motion.span>
                : <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><HiMoon size={16} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>

          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="/CV-VersionDerniere.pdf" download
            className="hidden lg:flex grad-btn text-white text-xs font-semibold px-3 py-2 rounded-xl items-center gap-1.5 shadow-md shadow-purple-500/20">
            <HiArrowDownTray size={13} /> CV
          </motion.a>

          <motion.button aria-label="Menu navigation" whileTap={{ scale: 0.93 }} onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl ${dark ? 'bg-white/8 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
            {menuOpen ? <HiXMark size={18} /> : <HiBars3 size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className={`fixed top-[68px] left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-30 rounded-2xl p-4 flex flex-col gap-1 ${dark ? 'glass-dark' : 'glass-light shadow-xl'}`}>
            {NAV_LINKS.map(({ id, label }) => (
              <Link key={id} to={id} smooth duration={700} offset={-80} onClick={() => setMenuOpen(false)}
                className={`font-medium py-3 px-4 rounded-xl cursor-pointer transition-colors text-sm ${dark ? 'hover:bg-white/8 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                {label}
              </Link>
            ))}
            <a href="/CV-VersionDerniere.pdf" download className="mt-1 flex items-center gap-2 font-semibold py-3 px-4 rounded-xl text-sm grad-btn text-white">
              <HiArrowDownTray size={15} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
