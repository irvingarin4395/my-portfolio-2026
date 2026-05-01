import type { Project } from "../data/projects"
import { motion } from "framer-motion"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 
      rounded-2xl overflow-hidden transition duration-500 
      hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      hover:border-cyan-400/40"
    >
      {/* IMAGE */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* 🔥 GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* 🔖 FEATURED BADGE */}
          {project.featured && (
            <div className="absolute top-4 left-4 text-xs bg-cyan-500 text-black px-3 py-1 rounded-full font-medium shadow">
              Featured
            </div>
          )}

        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">

        {/* TITLE */}
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-cyan-400 transition">
          {project.title}
        </h3>

        {/* TAG ROW */}
        <div className="flex justify-between items-center mt-2 text-xs">

          <span className="text-gray-500">
            {project.featured ? "SaaS Demo Project" : "Client Work"}
          </span>

          {project.featured && (
            <span className="text-cyan-400">
              Full-stack
            </span>
          )}

        </div>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-white/10 px-2 py-1 rounded 
              hover:bg-cyan-500 hover:text-black transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* IMPACT */}
        {project.impact && (
          <p className="text-cyan-400 text-sm mt-4 font-medium">
            {project.impact}
          </p>
        )}

        {/* CTA */}
        {project.link && (
          <div className="mt-6 flex items-center justify-between">

            <a
              href={project.link}
              target="_blank"
              className="text-sm font-medium text-white group-hover:text-cyan-400 transition"
            >
              View Repository →
            </a>

            {/* subtle icon */}
            <span className="text-gray-500 group-hover:translate-x-1 transition">
              →
            </span>

          </div>
        )}

      </div>
    </motion.div>
  )
}