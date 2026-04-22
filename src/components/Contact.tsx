import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let’s Build Something Scalable
        </h2>

        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          I’m currently available for full-time or contract roles.
          If you're building something interesting, let’s talk.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:Irvingarin4395@gmail.com"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-medium hover:opacity-90"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/irvin-garin-515916246/"
            target="_blank"
            className="border border-slate-600 px-6 py-3 rounded-lg hover:border-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}