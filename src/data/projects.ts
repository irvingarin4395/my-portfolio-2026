export interface Project {
  title: string
  description: string
  tech: string[]
  impact?: string
}

export const projects: Project[] = [
  {
    title: "Marketing & Lead Generation Platform",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    description:
      "Developed and maintained a full-stack system for tracking campaigns and managing leads. Built APIs, dashboards, and optimized backend performance.",
    impact:
      "Improved reporting speed and reduced load times by ~40%",
  },
  {
    title: "SEO-Optimized WordPress Ecosystem",
    tech: ["WordPress", "PHP", "JavaScript"],
    description:
      "Built and optimized SEO-driven websites with custom plugins and improved Core Web Vitals.",
    impact:
      "Enhanced page performance and improved search visibility",
  },
  {
    title: "API Integration & Automation System",
    tech: ["Laravel", "REST APIs"],
    description:
      "Designed backend systems integrating multiple third-party services with validation and logging.",
    impact:
      "Reduced manual processes and improved workflow efficiency",
  },
  {
    title: "AI Answer Evaluation Tool",
    tech: ["Laravel", "OpenAI API"],
    description:
      "Built a lightweight AI-powered system to evaluate answers and generate structured feedback.",
    impact:
      "Demonstrates real-world LLM integration for automated assessment",
  },
]