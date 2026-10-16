// ============================================================
// SITE CONFIGURATION
// Edit this file to customize your entire portfolio website.
// ============================================================

export const siteConfig = {
  // Brand & Identity
  brand: "ZYPHION",
  developerName: "Zyphion",
  subtitle: "Independent Developer & Digital Creator",
  headline: "Building Digital Experiences, One Project at a Time.",
  description:
    "I create Discord bots, creative tools, and REST APIs that empower developers and communities. Passionate about building useful digital experiences.",

  // Logo & Avatar (replace with your own URLs or local paths)
  logo: null, // null = use text logo
  avatar: null, // null = use initials placeholder

  // Theme Colors (used as CSS variables)
  colors: {
    primary: "#8b5cf6", // Purple electric
    accent: "#06b6d4", // Cyan
    primaryGlow: "rgba(139, 92, 246, 0.3)",
    accentGlow: "rgba(6, 182, 212, 0.3)",
  },

  // SEO
  seo: {
    title: "ZYPHION — Developer Portfolio",
    description:
      "Portfolio of Zyphion — Independent Developer specializing in Discord Bots, Creative Tools, and REST APIs.",
    ogImage: null,
  },

  // Social Links (set to null to hide)
  social: {
    discord: null, // Discord invite link
    discordServer: null, // Support server link
    github: null, // GitHub profile URL
    email: null, // Email address
    twitter: null, // Twitter/X URL
    instagram: null, // Instagram URL
    youtube: null, // YouTube URL
    linkedin: null, // LinkedIn URL
  },

  // Tech Stack (displayed in About section)
  techStack: [
    { name: "TypeScript", icon: "code" },
    { name: "Node.js", icon: "server" },
    { name: "Python", icon: "terminal" },
    { name: "React", icon: "layout" },
    { name: "Discord.js", icon: "message-circle" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Docker", icon: "container" },
    { name: "Git", icon: "git-branch" },
  ],

  // Projects
  projects: [
    {
      slug: "discord-bot",
      name: "Susie McCalister Discord Bot",
      category: "Discord Bot",
      status: "Active" as const,
      description:
        "A feature-rich Discord bot with interactive commands, AI assistant, media downloader, and server utilities. Designed to enhance community engagement and server management.",
      thumbnail: null,
      banner: null,
      technologies: ["Discord.js", "Node.js", "TypeScript", "AI API"],
      features: [
        "AI-powered assistant with conversational responses",
        "Media downloader for multiple platforms",
        "Server management utilities and moderation tools",
        "Interactive mini-games and entertainment commands",
        "Customizable prefix and per-server settings",
        "Auto-moderation and anti-spam features",
        "Music playback with queue management",
        "Leveling system with role rewards",
      ],
      urls: {
        invite: null,
        supportServer: null,
        documentation: null,
        source: null,
      },
      permissions: [
        "Send Messages",
        "Embed Links",
        "Read Message History",
        "Manage Messages (for moderation)",
        "Connect & Speak (for voice features)",
      ],
      commandPreview: [
        { command: "/help", description: "Show all available commands" },
        { command: "/ai ask <question>", description: "Ask the AI assistant" },
        { command: "/download <url>", description: "Download media from URL" },
        { command: "/server info", description: "Display server information" },
      ],
    },
    {
      slug: "alight-motion-generator",
      name: "Alight Motion Generator",
      category: "Creative Tools",
      status: "Active" as const,
      description:
        "A web-based generator platform for Alight Motion projects. Create presets, transitions, and effects with ease — no manual XML editing required.",
      thumbnail: null,
      banner: null,
      technologies: ["React", "TypeScript", "XML", "Web APIs"],
      features: [
        "Visual preset generator with real-time preview",
        "Transition and effect templates library",
        "Custom XML project generation",
        "Color palette and gradient generator",
        "Text animation presets",
        "Export-ready project files",
        "Community-shared templates",
        "Responsive design for mobile editing",
      ],
      urls: {
        generator: null,
        documentation: null,
        tutorial: null,
        source: null,
      },
    },
    {
      slug: "rest-api",
      name: "ZYPHION REST API",
      category: "Developer Tools",
      status: "Beta" as const,
      description:
        "A comprehensive REST API providing various digital services and utilities. Integrate AI, media processing, data fetching, and more into your applications.",
      thumbnail: null,
      banner: null,
      technologies: ["Node.js", "Express", "TypeScript", "REST"],
      features: [
        "AI text generation and processing endpoints",
        "Media download and conversion utilities",
        "Web scraping and data extraction tools",
        "Image manipulation and generation",
        "Authentication and rate limiting",
        "Comprehensive API documentation",
        "Webhook support for real-time events",
        "SDKs for popular languages",
      ],
      urls: {
        baseUrl: null,
        documentation: null,
        source: null,
      },
      endpoints: [
        {
          category: "AI",
          items: [
            {
              method: "POST",
              path: "/api/ai/chat",
              description: "Send a message to the AI and get a response",
            },
            {
              method: "POST",
              path: "/api/ai/image",
              description: "Generate an image from a text prompt",
            },
          ],
        },
        {
          category: "Media",
          items: [
            {
              method: "GET",
              path: "/api/media/download",
              description: "Download media from supported platforms",
            },
            {
              method: "POST",
              path: "/api/media/convert",
              description: "Convert media between formats",
            },
          ],
        },
        {
          category: "Utilities",
          items: [
            {
              method: "GET",
              path: "/api/utils/screenshot",
              description: "Take a screenshot of a webpage",
            },
            {
              method: "GET",
              path: "/api/utils/translate",
              description: "Translate text between languages",
            },
          ],
        },
      ],
      authRequired: true,
      rateLimit: null, // Set if known, e.g. "100 requests/minute"
      exampleRequest: `{
  "method": "POST",
  "url": "https://api.example.com/api/ai/chat",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  "body": {
    "message": "Hello, how are you?",
    "model": "default"
  }
}`,
      exampleResponse: `{
  "success": true,
  "data": {
    "response": "Hello! I'm doing great, thanks for asking!",
    "model": "default",
    "tokens_used": 24
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type ProjectConfig = (typeof siteConfig.projects)[number];
