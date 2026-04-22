export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold">Irvin Garin</h1>

        <div className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}