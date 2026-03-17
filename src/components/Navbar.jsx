import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiSun, HiMoon, HiArrowDownTray, HiBars3, HiXMark } from 'react-icons/hi2'

// On définit t = {} par défaut pour éviter le crash "undefined"
export default function Navbar({ dark, toggleDark, lang, toggleLang, t = {} }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  // On extrait les labels avec des fallbacks (textes de secours)
  // Si t.nav n'existe pas, on utilise l'anglais par défaut
  const labels = {
    about: t?.nav?.about || "About",
    skills: t?.nav?.skills || "Skills",
    projects: t?.nav?.projects || "Projects",
    contact: t?.nav?.contact || "Contact",
    cv: lang === 'fr' ? "Télécharger CV" : "Download CV"
  }

  const NAV_LINKS = [
    { id: 'about',    label: labels.about },
    { id: 'skills',   label: labels.skills },
    { id: 'projects', label: labels.projects },
    { id: 'contact',  label: labels.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
{/* Remplace le début de ton <motion.nav> par ceci */}
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
        {/* Logo */}
        <motion.span className="font-display font-extrabold text-xl grad-text cursor-default">
          SA
        </motion.span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth
              spy
              offset={-80}
              onSetActive={() => setActive(id)}
              className="relative px-4 py-2 rounded-xl cursor-pointer group"
            >
              <span className={`relative z-10 text-sm font-medium transition-colors ${
                active === id ? 'grad-text' : dark ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
              }`}>
                {label}
              </span>
              {active === id && (
                <motion.div
                  layoutId="nav-pill"
                  className={`absolute inset-0 rounded-xl ${dark ? 'bg-white/10' : 'bg-purple-50'}`}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Lang Toggle */}
          <button onClick={toggleLang} className={`w-9 h-9 rounded-xl flex items-center justify-center ${dark ? 'bg-white/8' : 'bg-gray-100'}`}>
            {lang === 'fr' ? '🇫🇷' : '🇬🇧'}
          </button>

          {/* Dark Mode */}
          <button onClick={toggleDark} className={`w-9 h-9 rounded-xl flex items-center justify-center ${dark ? 'bg-white/8 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}>
            {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>

          {/* CV Button */}
          <a href="/CV-VersionDerniere.pdf" download className="hidden md:flex grad-btn text-white text-sm font-semibold px-4 py-2 rounded-xl items-center gap-2">
            <HiArrowDownTray size={15} /> CV
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100/10">
            {menuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-[75px] left-1/2 -translate-x-1/2 w-[95%] z-30 rounded-2xl p-4 flex flex-col gap-1 ${dark ? 'glass-dark' : 'glass-light shadow-2xl'}`}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <Link key={id} to={id} smooth onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-xl hover:bg-white/10 text-sm">
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}