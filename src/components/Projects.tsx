import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-16">
       <h2 className="text-3xl font-bold mb-2">
          Selected Projects
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl">
          A mix of production systems and self-initiated projects showcasing full-stack development, API integration, and modern SaaS UI design.
        </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}