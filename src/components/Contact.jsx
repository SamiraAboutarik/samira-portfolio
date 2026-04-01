import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiPaperAirplane, HiEnvelope, HiMapPin, HiBriefcase } from 'react-icons/hi2'
import { FiGithub, FiLinkedin ,FiPhone} from 'react-icons/fi'

const CONTACT_INFO = [
  { Icon: HiEnvelope, label: 'Email',    value: 'samiraaboutarik45@gmail.com',       href: 'mailto:samiraaboutarik45@gmail.com', color: 'bg-purple-500/10 text-purple-400' },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/samira-aboutarik', href: '#',                                  color: 'bg-blue-500/10 text-blue-400' },
  { Icon: FiPhone,    label: 'Téléphone',   value: '+212 6 41 32 22 97',             href: 'tel:+212641322297',                  color: 'bg-green-500/10 text-green-400' },
  { Icon: FiGithub,   label: 'GitHub',   value: 'github.com/SamiraAboutarik',       href: 'https://github.com/SamiraAboutarik', color: 'bg-gray-500/10 text-gray-400' },
  { Icon: HiMapPin,   label: 'Location', value: 'Agadir, Morocco 🇲🇦',              href: '#',                                  color: 'bg-red-500/10 text-red-400' },
]

export default function Contact({ dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.email.trim())   e.email   = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const fieldClass = (name) => `
    w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200
    ${focused === name ? 'ring-2 ring-purple-500/40' : ''}
    ${dark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-600 hover:border-white/20' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:bg-white'}
    ${errors[name] ? 'border-red-500/50' : ''}
  `

  return (
    <section id="contact" className="py-28 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-xs font-bold grad-text uppercase tracking-[0.25em] mb-3">Contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Have an idea? <span className="grad-text">Let's build it.</span>
          </h2>
          <p className={`mt-4 max-w-lg mx-auto text-base ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Open to internship, full-time, freelance & collaborations. I always reply within 24h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-4">
            {CONTACT_INFO.map(({ Icon, label, value, href, color }) => (
              <motion.a key={label} href={href} whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${dark ? 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.15]' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className={`text-xs mb-0.5 font-medium ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
                  <div className={`text-sm font-semibold ${dark ? 'text-gray-200' : 'text-gray-800'}`}>{value}</div>
                </div>
              </motion.a>
            ))}
            <div className="grad-btn p-6 rounded-2xl text-white text-center shadow-lg shadow-purple-500/20 mt-2">
              <HiBriefcase size={28} className="mx-auto mb-3 opacity-90" />
              <p className="font-display font-bold text-xl mb-1">Available now</p>
              <p className="text-white/75 text-sm">Internship · Full-time · Freelance</p>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} noValidate
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            className={`rounded-2xl p-7 border space-y-5 ${dark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-white border-gray-100 shadow-lg'}`}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'name',  label: 'Name *',  placeholder: 'Your name',         type: 'text' },
                { id: 'email', label: 'Email *', placeholder: 'your@email.com',    type: 'email' },
              ].map(f => (
                <div key={f.id}>
                  <label className={`text-xs font-semibold mb-2 block ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.id]}
                    onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                    onFocus={() => setFocused(f.id)} onBlur={() => setFocused(null)}
                    className={fieldClass(f.id)} />
                  {errors[f.id] && <p className="text-red-400 text-xs mt-1">{errors[f.id]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label className={`text-xs font-semibold mb-2 block ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Subject</label>
              <input type="text" placeholder="Internship · Project · Collaboration..."
                value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} className={fieldClass('subject')} />
            </div>
            <div>
              <label className={`text-xs font-semibold mb-2 block ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Message *</label>
              <textarea rows={5} placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                className={`${fieldClass('message')} resize-none`} />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full grad-btn text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-purple-500/20">
              <HiPaperAirplane size={17} /> Send message
            </motion.button>
            {submitted && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2.5 p-3.5 rounded-xl text-sm font-medium ${dark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Message sent! I'll get back to you within 24h. 🎯
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
