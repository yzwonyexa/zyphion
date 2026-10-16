import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Terminal,
  Layout,
  MessageCircle,
  Database,
  Container,
  GitBranch,
  Zap,
} from "lucide-react";
import { siteConfig } from "../config/site";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={18} />,
  server: <Server size={18} />,
  terminal: <Terminal size={18} />,
  layout: <Layout size={18} />,
  "message-circle": <MessageCircle size={18} />,
  database: <Database size={18} />,
  container: <Container size={18} />,
  "git-branch": <GitBranch size={18} />,
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              About
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">{siteConfig.developerName}</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            {siteConfig.subtitle}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section {...fadeIn} className="mb-16">
          <div className="p-8 rounded-2xl border border-border bg-surface-card/30">
            <div className="flex items-start gap-6">
              {/* Avatar placeholder */}
              <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">
                  {siteConfig.developerName[0]}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Who I Am</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  {siteConfig.description}
                </p>
                <p className="text-text-muted leading-relaxed">
                  I focus on building practical, well-designed tools that developers and communities can rely on. Every project is an opportunity to learn, experiment, and deliver something meaningful.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-primary" />
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siteConfig.projects.map((project) => (
              <div
                key={project.slug}
                className="p-5 rounded-xl border border-border bg-surface-card/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Code2 size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{project.category}</h3>
                <p className="text-xs text-text-muted">{project.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-accent" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {siteConfig.techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-border/50 bg-surface-card/30 hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent">
                    {iconMap[tech.icon] || <Code2 size={18} />}
                  </span>
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section {...fadeIn}>
          <div className="p-8 rounded-2xl border border-border bg-surface-card/30 relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-30" />
            <div className="relative">
              <h2 className="text-xl font-bold mb-4">My Approach</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">Quality over quantity.</span> I'd rather build one excellent tool than ten mediocre ones.
                </p>
                <p>
                  <span className="text-accent font-semibold">User-first design.</span> Every feature is built with the end user in mind, whether it's a Discord community member or a developer integrating an API.
                </p>
                <p>
                  <span className="text-primary font-semibold">Continuous improvement.</span> Projects are living things — they evolve based on feedback and new possibilities.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
