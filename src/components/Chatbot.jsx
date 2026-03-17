import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiPaperAirplane, HiChatBubbleLeftRight } from 'react-icons/hi2'
import { getChatResponse } from '../data'

const QUICK_REPLIES = ['Compétences', 'Projets', 'Contact', 'Expérience']
const INITIAL = [{ role: 'bot', text: "Bonjour ! 👋 Je suis l'assistant de Samira. Demandez-moi ses compétences, projets, ou comment la contacter !" }]

export default function Chatbot({ dark }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getChatResponse(msg) }])
    }, 750)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className={`rounded-2xl w-80 overflow-hidden flex flex-col ${
              dark ? 'bg-[#0c0c18] border border-white/10 shadow-2xl shadow-black/40' : 'bg-white border border-gray-200 shadow-2xl'
            }`}
            style={{ height: 440 }}
          >
            {/* Header */}
            <div className="grad-btn p-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-display font-bold text-sm text-white">
                S
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Assistant Samira</p>
                <p className="text-xs text-white/65 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  En ligne
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <HiXMark size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'grad-btn text-white rounded-br-sm'
                      : dark
                      ? 'bg-white/8 text-gray-200 rounded-bl-sm'
                      : 'bg-gray-100 text-gray-700 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center ${dark ? 'bg-white/8' : 'bg-gray-100'}`}>
                    {[0, 1, 2].map(j => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className={`px-3 pb-2 flex gap-1.5 flex-wrap shrink-0 border-t ${dark ? 'border-white/5' : 'border-gray-100'} pt-2`}>
              {QUICK_REPLIES.map(q => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className={`text-xs px-3 py-1.5 rounded-xl transition-all hover:scale-105 font-medium ${
                    dark ? 'bg-white/5 text-gray-400 hover:bg-purple-500/15 hover:text-purple-400' : 'bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className={`p-3 border-t shrink-0 ${dark ? 'border-white/8' : 'border-gray-100'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Posez une question..."
                  className={`flex-1 px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-purple-500/40 ${
                    dark ? 'bg-white/6 border border-white/10 text-white placeholder-gray-600 hover:border-white/20' : 'bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white'
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => send()}
                  className="w-10 h-10 rounded-xl grad-btn flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20"
                >
                  <HiPaperAirplane size={15} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full grad-btn flex items-center justify-center shadow-xl shadow-purple-500/30 relative"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiXMark size={22} className="text-white" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><HiChatBubbleLeftRight size={22} className="text-white" /></motion.span>
          }
        </AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#070712] animate-pulse" />}
      </motion.button>
    </div>
  )
}
