import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "MySQL", "CodeIgniter"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "CMS & SEO",
    skills: ["WordPress", "SEO", "Core Web Vitals"],
  },
  {
    title: "Tools & APIs",
    skills: ["REST APIs", "Git", "CI/CD", "Third-party Integrations"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-gray-400 mb-6 max-w-xl">
                Technologies and tools I use to build scalable and high-performance applications.
            </p>
        <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
            <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 
                        hover:border-cyan-400 transition"
            >
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <span
                    key={skill}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm 
                        transition hover:bg-cyan-500 hover:text-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </motion.div>
            ))}
        </div>
    </section>
  )
}