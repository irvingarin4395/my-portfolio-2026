import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold mb-2">
            Selected Work & Case Studies
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl">
            A selection of real-world systems I’ve built and contributed to across client projects.
        </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}