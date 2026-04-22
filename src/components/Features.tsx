import { motion } from "framer-motion"

const features = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end development using Laravel, React, and modern tools.",
  },
  {
    title: "API Integrations",
    desc: "Seamless integration with third-party services and automation workflows.",
  },
  {
    title: "Performance Optimization",
    desc: "Improving load times, Core Web Vitals, and system efficiency.",
  },
  {
    title: "SEO & Web Optimization",
    desc: "Building SEO-friendly architectures that improve visibility.",
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        What I Can Build For You
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-800/60 backdrop-blur border border-slate-700 
                       p-6 rounded-xl hover:border-cyan-400 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}