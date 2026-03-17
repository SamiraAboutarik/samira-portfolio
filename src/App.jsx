import React, { useState } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import { useScrollProgress } from './hooks/useScrollProgress'

import Preloader           from './components/Preloader'
import CustomCursor        from './components/CustomCursor'
import ParticleBackground  from './components/ParticleBackground'
import ScrollProgressBar   from './components/ScrollProgressBar'
import Navbar              from './components/Navbar'
import Hero                from './components/Hero'
import About               from './components/About'
import Skills              from './components/Skills'
import Projects            from './components/Projects'
import Stats               from './components/Stats'
import Contact             from './components/Contact'
import Footer              from './components/Footer'
import Chatbot             from './components/Chatbot'
import ScrollToTop         from './components/ScrollToTop'

export default function App() {
  const [dark, toggleDark] = useDarkMode()
  const scrollProgress      = useScrollProgress()
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Preloader */}
      <Preloader onDone={() => setLoaded(true)} />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      <div
        className={`${dark ? 'bg-[#070712] text-white' : 'bg-gray-50 text-gray-900'} min-h-screen font-body transition-colors duration-500 relative`}
        style={{ cursor: 'none' }}
      >
        {/* Particle dot grid background */}
        <ParticleBackground dark={dark} />

        {/* Noise texture */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Scroll progress bar */}
        <ScrollProgressBar progress={scrollProgress} />

        {/* Navigation */}
        <Navbar dark={dark} toggleDark={toggleDark} />

        {/* Main sections */}
        <main className="relative z-10">
          <Hero     dark={dark} />
          <About    dark={dark} />
          <Skills   dark={dark} />
          <Projects dark={dark} />
          <Stats    dark={dark} />
          <Contact  dark={dark} />
        </main>

        <Footer dark={dark} />

        {/* Floating UI */}
        <Chatbot    dark={dark} />
        <ScrollToTop visible={scrollProgress > 10} />
      </div>
    </>
  )
}
