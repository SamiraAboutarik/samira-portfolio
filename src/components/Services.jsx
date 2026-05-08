import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChartLine, FaCode, FaDesktop, FaShoppingCart } from 'react-icons/fa'
import { SiLaravel, SiReact } from 'react-icons/si'

const SERVICES = [
  {
    title: 'Développement Full Stack',
    Icon: FaCode,
    description: "Applications web complètes de A à Z, du backend Laravel à l'interface React moderne.",
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    color: '#a855f7',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Applications Laravel',
    Icon: SiLaravel,
    description: 'Architectures robustes avec patterns avancés : Actions, DTOs, Services, Repositories.',
    tags: ['Laravel 11', 'Eloquent', 'Sanctum', 'API'],
    color: '#ef4444',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'React & Frontend',
    Icon: SiReact,
    description: 'Interfaces dynamiques, performantes et accessibles avec animations soignées.',
    tags: ['React 18', 'Tailwind', 'Framer Motion', 'Vite'],
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-commerce',
    Icon: FaShoppingCart,
    description: 'Boutiques en ligne complètes avec panier, paiement et gestion des commandes.',
    tags: ['Laravel', 'React', 'Stripe', 'Dashboard'],
    color: '#f59e0b',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Dashboards & KPI',
    Icon: FaChartLine,
    description: 'Tableaux de bord décisionnels avec visualisations interactives et indicateurs en temps réel.',
    tags: ['ApexCharts', 'Chart.js', 'Laravel', 'React'],
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Sites Vitrines',
    Icon: FaDesktop,
    description: 'Sites élégants et rapides pour présenter votre activité avec un design impactant.',
    tags: ['React', 'Tailwind', 'SEO', 'Performance'],
    color: '#6366f1',
    gradient: 'from-indigo-500 to-violet-500',
  },
]

function ServiceCard({ service, dark, index }) {
  const { Icon, title, description, tags, color, gradient } = service

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-2xl border p-[1px] transition-shadow duration-300 ${
        dark ? 'border-white/[0.07] hover:shadow-2xl hover:shadow-purple-950/25' : 'border-gray-200 shadow-sm hover:shadow-xl'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className={`relative h-full rounded-2xl p-6 ${
        dark ? 'bg-[#0b0b17] group-hover:bg-[#0c0c18]' : 'bg-white'
      }`}>
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{
            color,
            background: `${color}18`,
            boxShadow: `0 0 0 ${color}00`,
          }}
        >
          <Icon size={22} />
        </div>

        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${
                dark ? 'border-white/8 bg-white/5 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Services({ dark }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="services" className="py-28 px-4 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] grad-text">Services</p>
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          What I can <span className="grad-text">build</span>
        </h2>
        <p className={`mx-auto mt-4 max-w-xl text-base ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          Des solutions web modernes, robustes et pensées pour vos objectifs.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} dark={dark} index={index} />
        ))}
      </div>
    </section>
  )
}
