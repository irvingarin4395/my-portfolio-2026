import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Features from "./components/Features"
import WhyMe from "./components/WhyMe"

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />
        <Features />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />
        <Projects />
        <WhyMe />
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App