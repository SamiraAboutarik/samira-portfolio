/**
 * Hero.jsx — "Code as Identity"
 * Supports dark prop: <Hero dark={true} />  or  <Hero dark={false} />
 *
 * Add once to index.html <head>:
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 *   <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet" />
 *
 * Add to tailwind.config.js → theme.extend.fontFamily:
 *   syne: ['Syne', 'sans-serif'],
 *   fira: ['Fira Code', 'monospace'],
 */

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { HiArrowDown, HiArrowRight, HiEnvelope, HiCodeBracket } from 'react-icons/hi2'
import MagneticButton from './MagneticButton'

/* ─────────────────────────────────────────
   Theme factory — returns tokens for dark or light mode
───────────────────────────────────────── */
function makeTheme(dark) {
  if (dark) {
    return {
      bg:         '#0d0b1e',
      grad:       'linear-gradient(135deg, #7c3aed, #3b82f6)',
      gradText:   'linear-gradient(135deg, #a78bfa, #60a5fa)',
      accent1:    '#a78bfa',                     // violet-400
      accent2:    '#60a5fa',                     // blue-400
      accentMid:  '#818cf8',                     // indigo-400
      border:     'rgba(139,92,246,0.25)',
      glow1:      'rgba(124,58,237,0.12)',
      glow2:      'rgba(59,130,246,0.10)',
      dot:        'rgba(139,92,246,0.12)',
      nameColor:  'white',
      subColor:   'rgba(255,255,255,0.45)',
      typeColor:  'rgba(255,255,255,0.4)',
      scrollCol:  'rgba(255,255,255,0.2)',
      divider:    'rgba(139,92,246,0.2)',
      statLabel:  'rgba(255,255,255,0.3)',
      codeBg:     'rgba(13,11,30,0.85)',
      lineNum:    'rgba(255,255,255,0.12)',
      codeChrome: 'rgba(124,58,237,0.07)',
      codeFile:   'rgba(255,255,255,0.2)',
      badgeBg:    'rgba(124,58,237,0.08)',
      ghostBg:    'rgba(124,58,237,0.06)',
      ghostColor: 'rgba(255,255,255,0.7)',
      codeOp:     'rgba(255,255,255,0.3)',
      shadow:     '0 0 80px rgba(124,58,237,0.2)',
      btnShadow:  '0 4px 28px rgba(124,58,237,0.4)',
      bottomFade: 'linear-gradient(to top, #0d0b1e, transparent)',
      ringA:      'rgba(167,139,250,0.28)',
      ringB:      'rgba(99,102,241,0.18)',
      ringC:      'rgba(59,130,246,0.12)',
      orbitColor: T_ORBIT_DARK,
    }
  }
  return {
    bg:         '#f8f7ff',
    grad:       'linear-gradient(135deg, #7c3aed, #3b82f6)',
    gradText:   'linear-gradient(135deg, #7c3aed, #2563eb)',
    accent1:    '#7c3aed',                     // violet-600
    accent2:    '#2563eb',                     // blue-600
    accentMid:  '#6366f1',                     // indigo-500
    border:     'rgba(124,58,237,0.2)',
    glow1:      'rgba(124,58,237,0.08)',
    glow2:      'rgba(59,130,246,0.06)',
    dot:        'rgba(124,58,237,0.1)',
    nameColor:  '#1e1b4b',
    subColor:   'rgba(30,27,75,0.5)',
    typeColor:  'rgba(30,27,75,0.45)',
    scrollCol:  'rgba(30,27,75,0.3)',
    divider:    'rgba(124,58,237,0.15)',
    statLabel:  'rgba(30,27,75,0.4)',
    codeBg:     'rgba(255,255,255,0.85)',
    lineNum:    'rgba(30,27,75,0.15)',
    codeChrome: 'rgba(124,58,237,0.05)',
    codeFile:   'rgba(30,27,75,0.25)',
    badgeBg:    'rgba(124,58,237,0.07)',
    ghostBg:    'rgba(124,58,237,0.05)',
    ghostColor: 'rgba(30,27,75,0.75)',
    codeOp:     'rgba(30,27,75,0.35)',
    shadow:     '0 0 80px rgba(124,58,237,0.12)',
    btnShadow:  '0 4px 28px rgba(124,58,237,0.3)',
    bottomFade: 'linear-gradient(to top, #f8f7ff, transparent)',
    ringA:      'rgba(124,58,237,0.2)',
    ringB:      'rgba(99,102,241,0.14)',
    ringC:      'rgba(59,130,246,0.1)',
    orbitColor: T_ORBIT_LIGHT,
  }
}

const T_ORBIT_DARK  = { bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)',  text: '#60a5fa' }
const T_ORBIT_LIGHT = { bg: 'rgba(37,99,235,0.06)',   border: 'rgba(37,99,235,0.2)',  text: '#2563eb' }

/* ─────────────────────────────────────────
   Constants
───────────────────────────────────────── */
const GLITCH_CHARS  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'
const ORIGINAL_NAME = 'SAMIRA.'

const TECH_RING = [
  { label: 'Laravel',  angle: 0   },
  { label: 'React',    angle: 45  },
  { label: 'MySQL',    angle: 90  },
  { label: 'Tailwind', angle: 135 },
  { label: 'Vite',     angle: 180 },
  { label: 'Sanctum',  angle: 225 },
  { label: 'PHP',      angle: 270 },
  { label: 'Git',      angle: 315 },
]

const STATS = [
  { value: 10,  suffix: '+', label: 'Projects built'   },
  { value: 2,   suffix: 'y', label: 'Years of study'   },
  { value: 100, suffix: '%', label: 'Passion for code' },
]

const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'me' }, { t: 'op', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'name:     ' }, { t: 'str', v: '"Samira Aboutarik",' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'role:     ' }, { t: 'str', v: '"Full Stack Developer",' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'stack:    ' }, { t: 'arr', v: '["Laravel","React","MySQL"],' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'location: ' }, { t: 'str', v: '"Agadir, Morocco",' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'status:   ' }, { t: 'bool', v: 'available' }] },
  { indent: 0, tokens: [{ t: 'op', v: '}' }] },
]

/* ─────────────────────────────────────────
   Hooks
───────────────────────────────────────── */
function useGlitchText(original, { delay = 600, speed = 45 } = {}) {
  const [display, setDisplay] = useState(original)
  useEffect(() => {
    let resolved = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplay(
          original.split('').map((ch, i) =>
            i < resolved || ch === '.' || ch === ' '
              ? ch
              : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          ).join('')
        )
        resolved++
        if (resolved > original.length) { clearInterval(interval); setDisplay(original) }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [])
  return display
}

function useCountUp(target, { duration = 1800, start = false } = {}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

/* ─────────────────────────────────────────
   Sub-components  (all receive T = theme)
───────────────────────────────────────── */
function GridBackground({ T }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hdots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={T.dot} />
        </pattern>
        <radialGradient id="hvignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="100%" stopColor={T.bg} />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hdots)" />
      <rect width="100%" height="100%" fill="url(#hvignette)" />
    </svg>
  )
}

function FloatingShapes({ T }) {
  const shapes = [
    { type: 'ring',   size: 220, x: '8%',  y: '12%', delay: 0,   dur: 14, color: T.ringA },
    { type: 'ring',   size: 110, x: '76%', y: '68%', delay: 2,   dur: 10, color: T.ringC },
    { type: 'square', size: 55,  x: '84%', y: '16%', delay: 1,   dur: 12, color: T.ringA },
    { type: 'square', size: 28,  x: '4%',  y: '72%', delay: 3,   dur: 9,  color: T.ringB },
    { type: 'tri',    size: 48,  x: '58%', y: '83%', delay: 0.5, dur: 11, color: T.ringB },
    { type: 'dot',    size: 8,   x: '38%', y: '8%',  delay: 1.5, dur: 7,  color: T.accent1 },
    { type: 'dot',    size: 5,   x: '91%', y: '43%', delay: 2.5, dur: 8,  color: T.accent2 },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.x, top: s.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {s.type === 'ring'   && <div style={{ width: s.size, height: s.size, borderRadius: '50%', border: `1px solid ${s.color}` }} />}
          {s.type === 'square' && <div style={{ width: s.size, height: s.size, border: `1px solid ${s.color}`, transform: 'rotate(45deg)' }} />}
          {s.type === 'tri'    && <div style={{ width: 0, height: 0, borderLeft: `${s.size/2}px solid transparent`, borderRight: `${s.size/2}px solid transparent`, borderBottom: `${s.size}px solid ${s.color}` }} />}
          {s.type === 'dot'    && <div style={{ width: s.size, height: s.size, borderRadius: '50%', background: s.color, opacity: 0.5 }} />}
        </motion.div>
      ))}
    </div>
  )
}

function TechOrb({ T }) {
  const oc = T.orbitColor
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 400 }}>
      <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: T.glow1, filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', width: 100, height: 100, borderRadius: '50%', background: T.glow2, filter: 'blur(30px)' }} />

      {[
        { size: 192, dur: 40, color: T.ringA },
        { size: 288, dur: 25, color: T.ringB, reverse: true },
        { size: 384, dur: 60, color: T.ringC },
      ].map(({ size, dur, color, reverse }, i) => (
        <motion.div
          key={i}
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', border: `1px dashed ${color}` }}
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <div style={{ background: T.grad, borderRadius: '50%', padding: 18, display: 'flex', boxShadow: `0 0 40px ${T.glow1}` }}>
          <HiCodeBracket color="white" size={36} />
        </div>
        <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 10, color: T.accent1, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          Full Stack
        </span>
      </motion.div>

      {TECH_RING.map(({ label, angle }) => {
        const rad = (angle * Math.PI) / 180
        const r   = 150
        return (
          <motion.div
            key={label}
            style={{ position: 'absolute', left: '50%', top: '50%' }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              style={{ x: Math.cos(rad)*r - 28, y: Math.sin(rad)*r - 12, rotate: 0, position: 'absolute' }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, delay: (angle/360)*3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: oc.text, background: oc.bg, border: `1px solid ${oc.border}`, padding: '2px 8px', borderRadius: 6, whiteSpace: 'nowrap' }}>
                {label}
              </span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

function CodeBlock({ T }) {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0
      const id = setInterval(() => { i++; setVisibleLines(i); if (i >= CODE_LINES.length) clearInterval(id) }, 220)
      return () => clearInterval(id)
    }, 800)
    return () => clearTimeout(t)
  }, [])

  const colorMap = {
    keyword: T.accent1,
    var:     T.nameColor,
    op:      T.codeOp,
    key:     T.accent2,
    str:     '#16a34a',
    arr:     '#d97706',
    bool:    '#dc2626',
  }

  return (
    <div style={{ background: T.codeBg, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden', backdropFilter: 'blur(12px)', width: '100%', maxWidth: 360, boxShadow: `0 8px 32px ${T.glow1}` }}>
      {/* Chrome bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderBottom: `1px solid ${T.border}`, background: T.codeChrome }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f87171', opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fbbf24', opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', opacity: 0.8 }} />
        <span style={{ marginLeft: 12, fontFamily: 'Fira Code, monospace', fontSize: 10, color: T.codeFile, letterSpacing: '0.15em' }}>
          portfolio.js
        </span>
      </div>
      {/* Lines */}
      <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
          >
            <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: T.lineNum, width: 16, textAlign: 'right', flexShrink: 0, userSelect: 'none' }}>
              {i + 1}
            </span>
            <p style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, lineHeight: 1.6, paddingLeft: line.indent * 16, margin: 0 }}>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: colorMap[tok.t] }}>{tok.v}</span>
              ))}
              {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  style={{ display: 'inline-block', width: 8, height: 14, background: T.accent1, marginLeft: 2, verticalAlign: 'middle' }}
                />
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StatItem({ value, suffix, label, trigger, T }) {
  const count = useCountUp(value, { start: trigger })
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, lineHeight: 1, background: T.gradText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {count}{suffix}
      </span>
      <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: T.statLabel, marginTop: 4, letterSpacing: '0.05em' }}>
        {label}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────
   Animation variants
───────────────────────────────────────── */
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ─────────────────────────────────────────
   Main Hero
───────────────────────────────────────── */
export default function Hero({ dark = true }) {
  const T                        = makeTheme(dark)
  const glitchName               = useGlitchText(ORIGINAL_NAME)
  const [statsVisible, setStats] = useState(false)
  const [mousePos, setMouse]     = useState({ x: 0, y: 0 })
  const heroRef                  = useRef(null)

  useEffect(() => {
    const handle = (e) => {
      if (!heroRef.current) return
      const { left, top } = heroRef.current.getBoundingClientRect()
      setMouse({ x: e.clientX - left, y: e.clientY - top })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setStats(true), 2200)
    return () => clearTimeout(t)
  }, [])

  /* Recompute theme when dark prop changes */
  const theme = makeTheme(dark)

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        background:  theme.bg,
        position:    'relative',
        minHeight:   '100vh',
        overflow:    'hidden',
        display:     'flex',
        alignItems:  'center',
        transition:  'background 0.5s ease',
      }}
    >
      <GridBackground T={theme} />
      <FloatingShapes T={theme} />

      {/* Mouse spotlight */}
      <div style={{
        position:   'absolute',
        width: 600, height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)`,
        left: mousePos.x - 300,
        top:  mousePos.y - 300,
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
        pointerEvents: 'none',
      }} />

      {/* Ambient blobs */}
      <div style={{ position: 'absolute', top: '-10%',    left: '-5%',  width: 500, height: 500, borderRadius: '50%', background: theme.glow1, filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '5%',  width: 400, height: 400, borderRadius: '50%', background: theme.glow2, filter: 'blur(100px)', pointerEvents: 'none' }} />

      {/* Scan line */}
      <motion.div
        style={{ position: 'absolute', left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${theme.accentMid}44, transparent)`, pointerEvents: 'none' }}
        animate={{ top: ['10%', '90%', '10%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Layout ─────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 1280, margin: '0 auto',
        padding: '96px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 64, alignItems: 'center',
      }}>

        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={item} style={{ marginBottom: 32 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'Fira Code, monospace', fontSize: 11,
              color: theme.accent1,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              border: `1px solid ${theme.border}`,
              borderRadius: 999, padding: '6px 16px',
              background: theme.badgeBg,
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: theme.accent1 }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Glitch name */}
          <motion.div variants={item} style={{ marginBottom: 12, overflow: 'hidden' }}>
            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              fontSize: 'clamp(3.8rem, 9vw, 8rem)',
              textShadow: theme.shadow,
            }}>
              {glitchName.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: 'backOut' }}
                  style={{
                    display: 'inline-block',
                    ...(ch === '.'
                      ? { background: theme.gradText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
                      : { color: theme.nameColor }),
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: `linear-gradient(to right, ${theme.accent1}, transparent)` }} />
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, color: theme.subColor, fontWeight: 500, letterSpacing: '0.05em' }}>
              Full Stack Developer
            </p>
          </motion.div>

          {/* Typewriter */}
          <motion.div variants={item} style={{ marginBottom: 32 }}>
            <TypeAnimation
              sequence={[
                'Crafting performant web apps from database to UI.', 3500,
                'Laravel + React. Clean code. Real results.',         3500,
                'Turning complex ideas into elegant solutions.',       3500,
              ]}
              wrapper="p"
              speed={65}
              deletionSpeed={85}
              repeat={Infinity}
              style={{ fontFamily: 'Fira Code, monospace', fontSize: 13, color: theme.typeColor, lineHeight: 1.8, maxWidth: 360 }}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            {/* Primary */}
            <MagneticButton
              href="#projects"
              className="group relative overflow-hidden flex items-center gap-2.5 font-syne font-bold text-[13px] text-white"
              style={{ background: theme.grad, padding: '14px 28px', borderRadius: 12, boxShadow: theme.btnShadow }}
            >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                View projects
                <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span
                style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.15)', skewX: '12deg' }}
                animate={{ translateX: ['-120%', '120%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2.5 }}
              />
            </MagneticButton>

            {/* Ghost */}
            <MagneticButton
              href="#contact"
              className="group flex items-center gap-2.5 font-syne font-bold text-[13px] hover:opacity-100 transition-opacity"
              style={{ padding: '14px 28px', borderRadius: 12, border: `1px solid ${theme.border}`, background: theme.ghostBg, backdropFilter: 'blur(8px)', color: theme.ghostColor }}
            >
              <HiEnvelope size={16} />
              Let's talk
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <StatItem {...s} trigger={statsVisible} T={theme} />
                {i < STATS.length - 1 && <div style={{ height: 40, width: 1, background: theme.divider }} />}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}
        >
          <TechOrb T={theme} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <CodeBlock T={theme} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 128, background: theme.bottomFade, pointerEvents: 'none' }} />

      {/* Scroll hint */}
      <motion.div
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link to="about" smooth duration={700} offset={-80} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: theme.scrollCol }}
            className="hover:opacity-70 transition-opacity"
          >
            <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase' }}>Scroll</span>
            <HiArrowDown size={14} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 128, height: 128, pointerEvents: 'none', opacity: 0.35 }}>
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M0 64 L0 0 L64 0" stroke={theme.accent1} strokeWidth="0.8" />
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 128, height: 128, pointerEvents: 'none', opacity: 0.35, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M0 64 L0 0 L64 0" stroke={theme.accent2} strokeWidth="0.8" />
        </svg>
      </div>
    </section>
  )
}