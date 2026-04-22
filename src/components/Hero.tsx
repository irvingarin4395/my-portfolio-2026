import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full -translate-x-1/2"></div>
      </div>

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Full-Stack Developer <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Building Scalable Web Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl mx-auto text-gray-300 text-lg"
        >
          5+ years of experience delivering production-ready applications using Laravel,
          WordPress, and React. Focused on performance, APIs, and real-world impact.
        </motion.p>

        <div className="mt-6 flex justify-center gap-2 flex-wrap text-sm text-gray-400">
            <span>✔ API Integrations</span>
            <span>✔ Performance Optimization</span>
            <span>✔ SEO & Core Web Vitals</span>
            <span>✔ Scalable Architecture</span>
        </div>

        {/* METRICS */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Delivered", value: "20+" },
            { label: "Performance Gains", value: "30–60%" },
            { label: "Clients (Global)", value: "10+" },
        ].map((item, i) => (
            <div key={i} className="text-center">
            <p className="text-2xl font-bold text-cyan-400">{item.value}</p>
            <p className="text-sm text-gray-400">{item.label}</p>
            </div>
        ))}
        </div>
        
        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-medium 
                hover:opacity-90 transition transform hover:scale-105 active:scale-95"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-medium 
                hover:opacity-90 transition transform hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}