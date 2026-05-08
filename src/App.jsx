import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDarkMode }       from './hooks/useDarkMode'
import { useScrollProgress } from './hooks/useScrollProgress'

import Preloader          from './components/Preloader'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgressBar  from './components/ScrollProgressBar'
import Navbar             from './components/Navbar'
import Hero               from './components/Hero'
import About              from './components/About'
import Skills             from './components/Skills'
import Education         from './components/Education'
import Projects           from './components/Projects'
import Stats              from './components/Stats'
import Contact            from './components/Contact'
import Footer             from './components/Footer'
import ScrollToTop        from './components/ScrollToTop'
import EasterEgg          from './components/EasterEgg'
import NotFound           from './components/NotFound'
import CookieBanner       from './components/CookieBanner'

const CustomCursor = lazy(() => import('./components/CustomCursor'))
const Chatbot = lazy(() => import('./components/Chatbot'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

export default function App() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [dark, toggleDark] = useDarkMode()
  const scrollProgress      = useScrollProgress()
  return (
    <>
      <Preloader onDone={() => {}} />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <EasterEgg dark={dark} />

      <div
        className={`${dark ? 'bg-[#070712] text-white' : 'bg-gray-50 text-gray-900'} min-h-screen font-body transition-colors duration-500 relative`}
        style={{ cursor: prefersReduced ? undefined : 'none' }}
      >
        <ParticleBackground dark={dark} />

        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.022]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
          aria-hidden="true" />

        <ScrollProgressBar progress={scrollProgress} />
        <Navbar dark={dark} toggleDark={toggleDark} />

        <Routes>
          <Route path="/" element={(
            <main className="relative z-10">
              <Hero       dark={dark} />
              <About      dark={dark} />
              <div className="section-alt"><Skills dark={dark} /></div>
              <Education dark={dark} />
              <Projects   dark={dark} />
              <div className="section-alt"><Stats dark={dark} /></div>
              <Contact    dark={dark} />
            </main>
          )} />
          <Route path="/projects/:slug" element={(
            <Suspense fallback={null}>
              <ProjectDetail dark={dark} />
            </Suspense>
          )} />
          <Route path="*" element={<NotFound dark={dark} />} />
        </Routes>

        <Footer dark={dark} />
        <CookieBanner dark={dark} />
        <Suspense fallback={null}>
          <Chatbot dark={dark} />
        </Suspense>
        <ScrollToTop visible={scrollProgress > 10} />
      </div>
    </>
  )
}
