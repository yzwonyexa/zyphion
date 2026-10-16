import { motion } from "framer-motion";
import {
  MessageCircle,
  Github,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";
import { siteConfig } from "../config/site";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  description: string;
}

export default function Contact() {
  const links: ContactLink[] = [];

  if (siteConfig.social.discord) {
    links.push({
      icon: <MessageCircle size={20} />,
      label: "Discord",
      href: siteConfig.social.discord,
      description: "Join my Discord server",
    });
  }

  if (siteConfig.social.github) {
    links.push({
      icon: <Github size={20} />,
      label: "GitHub",
      href: siteConfig.social.github,
      description: "Check out my repositories",
    });
  }

  if (siteConfig.social.email) {
    links.push({
      icon: <Mail size={20} />,
      label: "Email",
      href: `mailto:${siteConfig.social.email}`,
      description: siteConfig.social.email,
    });
  }

  if (siteConfig.social.twitter) {
    links.push({
      icon: <Twitter size={20} />,
      label: "Twitter / X",
      href: siteConfig.social.twitter,
      description: "Follow me on Twitter",
    });
  }

  if (siteConfig.social.instagram) {
    links.push({
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: siteConfig.social.instagram,
      description: "Follow me on Instagram",
    });
  }

  if (siteConfig.social.youtube) {
    links.push({
      icon: <Youtube size={20} />,
      label: "YouTube",
      href: siteConfig.social.youtube,
      description: "Watch my content",
    });
  }

  if (siteConfig.social.linkedin) {
    links.push({
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      description: "Connect on LinkedIn",
    });
  }

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            Have a question, collaboration idea, or just want to say hello? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Links */}
        {links.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-surface-card/30 hover:border-primary/30 hover:bg-surface-card/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-xs text-text-muted">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center p-12 rounded-2xl border border-border bg-surface-card/30"
          >
            <Mail size={40} className="mx-auto text-text-muted mb-4" />
            <p className="text-text-muted">
              Contact links will appear here once configured in{" "}
              <code className="text-primary text-sm">src/config/site.ts</code>
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl border border-border bg-surface-card/30 relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-30" />
            <div className="relative">
              <h2 className="text-xl font-bold mb-3">Let's Build Something Together</h2>
              <p className="text-text-muted text-sm max-w-md mx-auto">
                Whether it's a Discord bot, an API integration, or a creative tool — I'm always open to interesting projects and collaborations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
