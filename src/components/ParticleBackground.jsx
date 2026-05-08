import React, { useEffect, useRef } from 'react'

export default function ParticleBackground({ dark }) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const canvasRef = useRef(null)

  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      particles = []
      const cols = Math.floor(canvas.width / 80)
      const rows = Math.floor(canvas.height / 80)
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          particles.push({
            ox: (canvas.width / cols) * i,
            oy: (canvas.height / rows) * j,
            x: (canvas.width / cols) * i,
            y: (canvas.height / rows) * j,
            size: Math.random() * 1.2 + 0.3,
            vx: 0, vy: 0,
          })
        }
      }
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = dark ? 'rgba(168,85,247,' : 'rgba(109,40,217,'

      particles.forEach(p => {
        const dx = mouse.x - p.ox
        const dy = mouse.y - p.oy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 90 - dist) / 90

        p.x += (p.ox - p.x + (dx / dist || 0) * -force * 18) * 0.08
        p.y += (p.oy - p.y + (dy / dist || 0) * -force * 18) * 0.08

        const opacity = 0.08 + force * 0.35
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + force * 2, 0, Math.PI * 2)
        ctx.fillStyle = color + opacity + ')'
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [dark, prefersReduced])

  if (prefersReduced) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: dark ? 1 : 0.5 }}
    />
  )
}
