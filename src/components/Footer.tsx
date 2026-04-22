export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center border-t border-slate-800 text-gray-400">
      <p>© {new Date().getFullYear()} Irvin Garin</p>
      <p className="text-sm mt-2">
        Built with React, TypeScript, and Tailwind CSS
      </p>
    </footer>
  )
}