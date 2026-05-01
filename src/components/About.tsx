import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT */}
        <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
                I’m a full-stack developer with 5+ years of experience building scalable web applications using Laravel,
                WordPress, and React. I’ve improved application performance by up to 60%, reduced load times through
                database optimization, and built systems used by international clients across multiple industries.
            </p>
        </div>

        {/* RIGHT - HIGHLIGHTS */}
        <div className="grid gap-4">
          {[
            "5+ years experience",
            "Full-stack (Laravel + React)",
            "SEO & performance focused",
            "Remote + async collaboration",
            "TypeScript",
            "REST APIs", 
            "MySQL + Posgres", "Tailwind CSS and Bootstrap CSS"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 
                         hover:border-cyan-400 transition"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>

            <div className="grid md:grid-cols-2 gap-4">
                {[
                "Improved website load speed by up to 50% through performance optimization",
                "Built and maintained 20+ production-level web applications",
                "Integrated multiple third-party APIs to automate workflows",
                "Developed SEO-driven pages that improved content structure and engagement",
                ].map((item, i) => (
                <div
                    key={i}
                    className="bg-slate-800 border border-slate-700 p-4 rounded-lg 
                            hover:border-cyan-400 transition"
                >
                    {item}
                </div>
                ))}
            </div>
        </div>
      </motion.div>
    </section>
  )
}