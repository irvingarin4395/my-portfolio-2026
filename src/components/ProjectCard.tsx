import type { Project } from "../data/projects"
import { motion } from "framer-motion"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-slate-800/60 backdrop-blur border border-slate-700 
        rounded-xl p-6 transition duration-300 
        hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        hover:-translate-y-1"
    >
      {/* TITLE */}
      <h3 className="text-xl font-semibold">{project.title}</h3>

      {/* LABELS */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500">
          Client Work (Confidential)
        </span>

        <span className="text-xs text-gray-500">
          Production System
        </span>
      </div>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-slate-700 px-2 py-1 rounded transition 
              hover:bg-cyan-500 hover:text-black"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-300 mt-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* IMPACT (MOST IMPORTANT) */}
      {project.impact && (
        <p className="text-cyan-400 text-sm mt-4 font-medium">
          {project.impact}
        </p>
      )}
    </motion.div>
  )
}