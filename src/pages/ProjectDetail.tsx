import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Server,
  Terminal,
  Shield,
  Zap,
  MessageCircle,
  Code2,
  Globe,
  Copy,
  Check,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { useState } from "react";

function getStatusClass(status: string) {
  switch (status) {
    case "Active": return "status-active";
    case "Beta": return "status-beta";
    case "In Development": return "status-development";
    case "Archived": return "status-archived";
    default: return "status-active";
  }
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-text-muted hover:text-text transition-all"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div {...fadeIn}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div {...fadeIn} className="mb-12">
          {/* Banner */}
          <div className="w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 mb-8 flex items-center justify-center overflow-hidden relative">
            {project.banner ? (
              <img src={project.banner} alt={project.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                  <Zap size={28} className="text-primary" />
                </div>
                <span className="text-sm text-text-muted">{project.category}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary tracking-wider uppercase">
              {project.category}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(project.status)}`}>
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {project.slug === "discord-bot" && (
            <>
              {project.urls.invite && (
                <a
                  href={project.urls.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  <MessageCircle size={16} />
                  Invite Bot
                </a>
              )}
              {project.urls.supportServer && (
                <a
                  href={project.urls.supportServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-primary/50 text-text font-medium text-sm hover:bg-primary/5 transition-all"
                >
                  <Server size={16} />
                  Support Server
                </a>
              )}
              {project.urls.documentation && (
                <a
                  href={project.urls.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accent/50 text-text font-medium text-sm hover:bg-accent/5 transition-all"
                >
                  <BookOpen size={16} />
                  Documentation
                </a>
              )}
            </>
          )}

          {project.slug === "alight-motion-generator" && (
            <>
              {project.urls.generator && (
                <a
                  href={project.urls.generator}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  <Zap size={16} />
                  Open Generator
                </a>
              )}
              {project.urls.documentation && (
                <a
                  href={project.urls.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-primary/50 text-text font-medium text-sm hover:bg-primary/5 transition-all"
                >
                  <BookOpen size={16} />
                  Documentation
                </a>
              )}
              {project.urls.tutorial && (
                <a
                  href={project.urls.tutorial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-accent/50 text-text font-medium text-sm hover:bg-accent/5 transition-all"
                >
                  <ExternalLink size={16} />
                  Tutorial
                </a>
              )}
            </>
          )}

          {project.slug === "rest-api" && (
            <>
              {project.urls.documentation && (
                <a
                  href={project.urls.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  <BookOpen size={16} />
                  API Documentation
                </a>
              )}
              {project.urls.baseUrl && (
                <a
                  href={project.urls.baseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:border-primary/50 text-text font-medium text-sm hover:bg-primary/5 transition-all"
                >
                  <Globe size={16} />
                  Try API
                </a>
              )}
            </>
          )}
        </motion.div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-primary" />
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-surface-card/30"
              >
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm text-text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Discord Bot specific sections */}
        {project.slug === "discord-bot" && "commandPreview" in project && (
          <>
            {/* Command Preview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Terminal size={20} className="text-accent" />
                Command Preview
              </h2>
              <div className="rounded-xl border border-border bg-surface-card/50 overflow-hidden">
                <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-text-muted">Terminal</span>
                </div>
                <div className="p-4 space-y-3">
                  {project.commandPreview?.map((cmd, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <code className="text-sm font-mono text-primary">{cmd.command}</code>
                      <span className="text-xs text-text-muted">{cmd.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Permissions */}
            {"permissions" in project && project.permissions && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-accent" />
                  Required Permissions
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.permissions.map((perm) => (
                    <span
                      key={perm}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {perm}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}
          </>
        )}

        {/* REST API specific sections */}
        {project.slug === "rest-api" && "endpoints" in project && (
          <>
            {/* Endpoints */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code2 size={20} className="text-accent" />
                API Endpoints
              </h2>
              <div className="space-y-6">
                {project.endpoints?.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((endpoint) => (
                        <div
                          key={endpoint.path}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg border border-border/50 bg-surface-card/30"
                        >
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${
                              endpoint.method === "GET"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-blue-500/10 text-blue-400"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-text">{endpoint.path}</code>
                          <span className="text-xs text-text-muted ml-auto">{endpoint.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Example Request/Response */}
            {"exampleRequest" in project && project.exampleRequest && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Terminal size={20} className="text-accent" />
                  Example
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-text-muted mb-2">Request</h3>
                    <div className="code-block p-4 relative">
                      <CopyButton text={project.exampleRequest} />
                      <pre className="text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                        <code>{project.exampleRequest}</code>
                      </pre>
                    </div>
                  </div>
                  {"exampleResponse" in project && project.exampleResponse && (
                    <div>
                      <h3 className="text-sm font-medium text-text-muted mb-2">Response</h3>
                      <div className="code-block p-4 relative">
                        <CopyButton text={project.exampleResponse} />
                        <pre className="text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                          <code>{project.exampleResponse}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            {/* Auth & Rate Limits */}
            {"authRequired" in project && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-accent" />
                  Authentication & Limits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border/50 bg-surface-card/30">
                    <h3 className="text-sm font-semibold mb-1">Authentication</h3>
                    <p className="text-sm text-text-muted">
                      {project.authRequired ? "API key required (Bearer token)" : "No authentication required"}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border/50 bg-surface-card/30">
                    <h3 className="text-sm font-semibold mb-1">Rate Limits</h3>
                    <p className="text-sm text-text-muted">
                      {"rateLimit" in project && project.rateLimit ? project.rateLimit : "Not specified"}
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
