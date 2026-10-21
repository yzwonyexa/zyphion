import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ProjectConfig } from "../config/site";

interface ProjectCardProps {
  project: ProjectConfig;
}

function getStatusClass(status: string) {
  switch (status) {
    case "Active": return "status-active";
    case "Beta": return "status-beta";
    case "In Development": return "status-development";
    case "Archived": return "status-archived";
    default: return "status-active";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block p-6 rounded-xl border border-border bg-surface-card/50 hover:border-primary/30 card-hover transition-all duration-300 h-full"
      >
        {/* Thumbnail placeholder */}
        <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 mb-5 flex items-center justify-center overflow-hidden relative">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2">
                <ExternalLink size={20} className="text-primary" />
              </div>
              <span className="text-xs text-text-muted">{project.category}</span>
            </div>
          )}
          {/* Status badge */}
          <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(project.status)}`}>
            {project.status}
          </div>
        </div>

        {/* Content */}
        <div className="mb-3">
          <span className="text-xs font-medium text-primary tracking-wider uppercase">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="flex items-center gap-1 text-sm font-medium text-text-muted group-hover:text-primary transition-colors">
          View Details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
