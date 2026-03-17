import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let mouseX = -200, mouseY = -200
    let curX = -200, curY = -200
    let animId

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = curX + 'px'
        cursorRef.current.style.top = curY + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Observe DOM for new interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Outer ring — follows with lag */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150"
        style={{
          width: hovered ? 48 : clicked ? 20 : 36,
          height: hovered ? 48 : clicked ? 20 : 36,
          borderColor: hovered ? '#a855f7' : 'rgba(168,85,247,0.5)',
          borderWidth: hovered ? 2 : 1,
          mixBlendMode: 'difference',
          background: hovered ? 'rgba(168,85,247,0.08)' : 'transparent',
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-75"
        style={{
          width: clicked ? 6 : 5,
          height: clicked ? 6 : 5,
          background: '#a855f7',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
