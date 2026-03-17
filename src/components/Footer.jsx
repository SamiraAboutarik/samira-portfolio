import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { HiHeart } from 'react-icons/hi2'

const NAV_LINKS  = ['about', 'skills', 'projects', 'contact']
const SOCIAL = [
  { href: 'https://github.com/SamiraAboutarik', Icon: FiGithub,   label: 'GitHub' },
  { href: '#',                                  Icon: FiLinkedin,  label: 'LinkedIn' },
  { href: 'mailto:samira.aboutarik@gmail.com',  Icon: FiMail,      label: 'Email' },
]

export default function Footer({ dark }) {
  return (
    <footer className={`py-12 px-4 border-t ${dark ? 'border-white/[0.06]' : 'border-gray-100'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span className="font-display font-extrabold text-xl grad-text select-none">
            Samira Aboutarik
          </span>

          <div className="flex gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link}
                to={link}
                smooth
                duration={700}
                offset={-80}
                className={`capitalize text-xs font-medium px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                  dark ? 'text-gray-500 hover:text-gray-200 hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            {SOCIAL.map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.93 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  dark
                    ? 'bg-white/5 hover:bg-white/12 text-gray-500 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-900 text-gray-500 hover:text-white'
                }`}
                title={label}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className={`h-px w-full mb-6 ${dark ? 'bg-white/[0.05]' : 'bg-gray-100'}`} />

        <div className={`flex flex-col md:flex-row items-center justify-between gap-2 text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          <p>© 2025 Samira Aboutarik · Tous droits réservés</p>
          <p className="flex items-center gap-1.5">
            Built with <HiHeart size={12} className="text-red-400" /> in
            <span className="grad-text font-semibold">Agadir, Morocco 🇲🇦</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
