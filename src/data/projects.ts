import aiImage from "../assets/ai.png"
import leadImage from "../assets/analytics.png"

export interface Project {
  title: string
  description: string
  tech: string[]
  impact?: string
  link?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "AI Answer Evaluator (SaaS Demo)",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Express"],
    description:
      "A full-stack SaaS-style application that simulates AI-powered answer evaluation with scoring, feedback generation, and performance tracking. Designed with a modern dashboard UI and persistent evaluation history.",
    impact:
      "Built end-to-end product with frontend, backend, and API integration demonstrating real-world SaaS architecture",
    link: "https://github.com/irvingarin4395/ai-answer-evaluator",
    image: aiImage,
    featured: true,
  },

  {
    title: "Lead Generation Platform (SaaS Demo)",
    tech: ["Laravel", "React", "Tailwind", "REST API"],
    description:
      "A full-stack lead management dashboard that allows users to capture, track, and convert leads in real-time. Built with a clean SaaS-style interface, featuring metrics, conversion tracking, and persistent backend data.",
    impact:
      "Demonstrates full-stack development with real CRUD operations, API integration, and business workflow simulation",
    link: "https://github.com/irvingarin4395/leadgen-platform-demo",
    image: leadImage,
    featured: true,
  },

  {
    title: "SEO-Optimized WordPress Ecosystem",
    tech: ["WordPress", "PHP", "JavaScript"],
    description:
      "Built and optimized multiple SEO-driven websites with custom plugins and improved Core Web Vitals.",
    impact:
      "Improved page performance and search visibility across multiple client sites",
  },

  {
    title: "API Integration & Automation System",
    tech: ["Laravel", "REST APIs"],
    description:
      "Designed backend systems integrating third-party services with validation, logging, and automation workflows.",
    impact:
      "Reduced manual processes and improved operational efficiency",
  },
]