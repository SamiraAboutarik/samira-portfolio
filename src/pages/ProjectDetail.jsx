import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowTopRightOnSquare,
  HiCheckCircle,
  HiCodeBracket,
  HiExclamationTriangle,
} from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { PROJECTS } from '../data/index'
import { TECH_COLORS, TECH_ICONS } from '../data/techConfig'

export default function ProjectDetail({ dark }) {
  const { slug } = useParams()
  const project = PROJECTS.find((item) => item.slug === slug)
  const [imgError, setImgError] = useState(false)

  if (!project) {
    return (
      <main className="relative z-10 px-4 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm font-semibold grad-text">Project not found</p>
          <Link to="/#projects" className="inline-flex items-center gap-2 rounded-xl grad-btn px-5 py-3 text-sm font-semibold text-white">
            <HiArrowLeft size={16} />
            Back to portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative z-10 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/#projects"
          className={`mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
            dark ? 'bg-white/8 text-gray-200 hover:bg-white/15' : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          <HiArrowLeft size={16} />
          Back to portfolio
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/10 md:h-[430px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${project.color}`}>
                <HiCodeBracket size={52} className="text-white/65" />
                <span className="text-lg font-bold text-white/85">{project.title}</span>
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] grad-text">Case Study</p>
            <h1 className="font-display text-4xl font-bold md:text-5xl">{project.title}</h1>
            <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.fullDescription || project.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.role && (
                <div className={`rounded-2xl border p-4 ${dark ? 'border-white/8 bg-white/5' : 'border-gray-200 bg-white'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Role</p>
                  <p className="mt-1 text-sm font-semibold">{project.role}</p>
                </div>
              )}
              {project.duration && (
                <div className={`rounded-2xl border p-4 ${dark ? 'border-white/8 bg-white/5' : 'border-gray-200 bg-white'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Duration</p>
                  <p className="mt-1 text-sm font-semibold">{project.duration}</p>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className={`rounded-3xl border p-6 ${dark ? 'border-red-500/12 bg-red-500/5' : 'border-red-100 bg-red-50'}`}>
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <HiExclamationTriangle size={20} />
              <h2 className="font-display text-xl font-bold">Challenges</h2>
            </div>
            <p className={`leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.challenges || project.problem}
            </p>
          </div>

          <div className={`rounded-3xl border p-6 ${dark ? 'border-green-500/12 bg-green-500/5' : 'border-green-100 bg-green-50'}`}>
            <div className="mb-3 flex items-center gap-2 text-green-400">
              <HiCheckCircle size={20} />
              <h2 className="font-display text-xl font-bold">Solutions</h2>
            </div>
            <p className={`leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-10">
          <p className={`mb-3 text-xs font-bold uppercase tracking-widest ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => {
              const Icon = TECH_ICONS[item]
              return (
                <span key={item} className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold ${
                  dark ? 'border-white/8 bg-white/5 text-gray-300' : 'border-gray-200 bg-white text-gray-700'
                }`}>
                  {Icon && <Icon size={13} style={{ color: TECH_COLORS[item] }} />}
                  {item}
                </span>
              )
            })}
          </div>
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${
              dark ? 'bg-white/8 text-gray-200 hover:bg-white/15' : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}>
              <SiGithub size={16} />
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl grad-btn px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25">
              <HiArrowTopRightOnSquare size={16} />
              Live Demo
            </a>
          )}
        </section>
      </div>
    </main>
  )
}
