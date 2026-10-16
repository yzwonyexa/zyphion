import { Link } from "react-router-dom";
import { Github, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks: SocialLink[] = [];

  if (siteConfig.social.github) {
    socialLinks.push({ icon: <Github size={18} />, href: siteConfig.social.github, label: "GitHub" });
  }
  if (siteConfig.social.discord) {
    socialLinks.push({ icon: <MessageCircle size={18} />, href: siteConfig.social.discord, label: "Discord" });
  }
  if (siteConfig.social.email) {
    socialLinks.push({ icon: <Mail size={18} />, href: `mailto:${siteConfig.social.email}`, label: "Email" });
  }

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-xs">
              {siteConfig.brand[0]}
            </div>
            <span className="font-semibold text-sm gradient-text">
              {siteConfig.brand}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-sm text-text-muted hover:text-text transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm text-text-muted hover:text-text transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-text-muted hover:text-text transition-colors">
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-text-muted">
            © {year} {siteConfig.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
