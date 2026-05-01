import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full -translate-x-1/2"></div>
      </div>

      <div className="text-center">

        {/* 🔥 MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Full-Stack Developer (Laravel + React)
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Building SaaS Dashboards, APIs, and Scalable Web Applications
          </span>
        </motion.h1>

        {/* 🔥 ATS KEYWORDS */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm text-gray-500"
        >
          Full-Stack Developer | Laravel Developer | React Developer | Web Developer
        </motion.p>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl mx-auto text-gray-300 text-lg"
        >
          5+ years of experience building full-stack applications using Laravel, React, and REST APIs.
          Specialized in SaaS dashboards, performance optimization, and scalable backend systems used by international clients.
        </motion.p>

        {/* 🔥 HIGHLIGHTS */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap text-sm text-gray-400">
          <span>✔ API Development & Integrations</span>
          <span>✔ Performance Optimization</span>
          <span>✔ SaaS Dashboard Development</span>
          <span>✔ Scalable System Architecture</span>
        </div>

        {/* 🔥 METRICS */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Delivered", value: "20+" },
            { label: "Performance Gains", value: "30–60%" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-cyan-400">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-medium 
            hover:opacity-90 transition transform hover:scale-105 active:scale-95"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-medium 
            hover:bg-white/20 transition transform hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}