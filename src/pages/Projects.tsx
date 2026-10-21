import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            Explore the full collection of tools, bots, and APIs built with passion and purpose.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
