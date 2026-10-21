import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap } from "lucide-react";
import { siteConfig } from "../config/site";
import ProjectCard from "../components/ProjectCard";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15 },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-bg overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            {/* Avatar / Logo placeholder */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary mb-6">
              <span className="text-3xl font-bold text-white">
                {siteConfig.brand[0]}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm font-medium text-primary tracking-widest uppercase mb-4"
          >
            {siteConfig.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">{siteConfig.brand}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-text mb-6"
          >
            {siteConfig.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-border hover:border-primary/50 text-text font-medium text-sm hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary tracking-widest uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              A collection of tools and services built to solve real problems and enhance digital experiences.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={18} className="text-accent" />
                <span className="text-sm font-medium text-accent tracking-widest uppercase">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Crafting Digital Solutions with{" "}
                <span className="gradient-text">Passion & Precision</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                Learn More About Me
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              {siteConfig.techStack.slice(0, 4).map((tech, i) => (
                <div
                  key={tech.name}
                  className="p-5 rounded-xl border border-border bg-surface-card/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
            className="p-10 sm:p-16 rounded-2xl border border-border bg-surface-card/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 hero-gradient opacity-50" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-text-muted mb-8 max-w-lg mx-auto">
                Have a project in mind or want to discuss an idea? Let's connect and build something great together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
