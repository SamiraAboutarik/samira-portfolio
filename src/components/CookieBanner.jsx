import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GA_ID = 'G-QGPGX7T32Z'

function loadGoogleAnalytics() {
  if (window.gtag || document.querySelector(`script[src*="${GA_ID}"]`)) return

  window[`ga-disable-${GA_ID}`] = false
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

export default function CookieBanner({ dark }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')

    if (consent === 'accepted') {
      loadGoogleAnalytics()
      return
    }

    if (consent === 'declined') {
      window[`ga-disable-${GA_ID}`] = true
      return
    }

    setVisible(true)
  }, [])

  const chooseConsent = (choice) => {
    localStorage.setItem('cookie_consent', choice)

    if (choice === 'accepted') {
      loadGoogleAnalytics()
    } else {
      window[`ga-disable-${GA_ID}`] = true
    }

    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-3xl"
        >
          <div className={`flex flex-col gap-4 rounded-2xl border p-4 shadow-2xl sm:flex-row sm:items-center sm:justify-between ${
            dark
              ? 'border-white/10 bg-[#0c0c18]/95 text-white'
              : 'border-gray-200 bg-white/95 text-gray-900'
          }`}>
            <p className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ce site utilise Google Analytics pour analyser le trafic.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => chooseConsent('declined')}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                  dark
                    ? 'bg-white/8 text-gray-200 hover:bg-white/15'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => chooseConsent('accepted')}
                className="grad-btn rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
