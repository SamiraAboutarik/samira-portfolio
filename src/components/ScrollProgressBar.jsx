import React from 'react'

export default function ScrollProgressBar({ progress }) {
  return (
    <div
      className="fixed top-0 left-0 z-50 h-[3px] grad-btn transition-all duration-100"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}
