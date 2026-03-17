import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(Math.min(100, Math.max(0, pct)))
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}
