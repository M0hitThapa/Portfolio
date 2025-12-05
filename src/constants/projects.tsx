export type Skill = {
  icon: string;
  title: string;
  href: string;
};

export type Project = {
  title: string;
  lightSrc: string;
  darkSrc: string;
  href: string;
  githubUrl: string;
  liveUrl: string;
  description: string;
  features: string[];
  skills: string[]; // Array of skill titles that match the skills array
};

export const skills: Skill[] = [
  { icon: "/nextjs_icon_dark.svg", title: "Next.js", href: "https://nextjs.org/" },
  { icon: "/tailwindcss.svg", title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { icon: "/typescript.svg", title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { icon: "/clerk.svg", title: "Clerk", href: "https://clerk.com/" },
  { icon: "/react.svg", title: "React", href: "https://react.dev/" },
  { icon: "/supabase.svg", title: "Supabase", href: "https://supabase.com/" },
  { icon: "/motion_dark.svg", title: "Motion", href: "https://motion.dev/" },
  { icon: "/postgresql.svg", title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { icon: "/drizzle-orm_dark.svg", title: "Drizzle", href: "https://orm.drizzle.team/" },
  { icon: "/authjs.svg", title: "Next-Auth", href: "https://next-auth.js.org/" },
  { icon: "/openai_dark.svg", title: "OpenAI", href: "https://openai.com/" },
  { icon: "/convex.svg", title: "Convex", href: "https://www.convex.dev/" },
  { icon: "/googleMaps.svg", title: "Google Maps", href: "https://maps.google.com/" }
];

export const projects: Project[] = [
  {
    title: "Pulsea – Feedback Collection SaaS",
    lightSrc: "/feedback-light.png",
    darkSrc: "/feedback-dark.png",
    href: "#",
    githubUrl: "https://github.com/M0hitThapa/Pulsea",
    liveUrl: "https://pulsea-theta.vercel.app/",
    description:
      "A powerful feedback-collection SaaS with an animated, embeddable widget that integrates seamlessly with any platform, helping teams gather user insights, bug reports, and product suggestions in one place.",
    features: [
      "⚡ Embeddable animated widget with support for screenshots, images, and bug reports.",
      "📊 Intuitive dashboard with filtering, search, and organized tagging for feedback and bugs.",
      "🤖 AI assistant for analyzing feedback and offering insights directly in the dashboard.",
      "✉️ Built-in email tools and real-time updates for managing and responding to users.",
      "🔒 Authentication powered by Clerk with full dark/light theme support.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Clerk", "Motion"],
  },

  {
    title: "ShortUrl – Advanced URL Shortener",
    lightSrc: "/url-light.png",
    darkSrc: "/url-dark.png",
    href: "#",
    githubUrl: "https://github.com/M0hitThapa/short-linnk",
    liveUrl: "https://short-linnk.vercel.app/",
    description:
      "A feature-rich URL shortener offering customization, analytics, QR generation, and a clean dashboard experience powered by modern authentication and design.",
    features: [
      "🔗 Create short links with custom codes, edit them, and manage all URLs easily.",
      "📊 Comprehensive analytics including clicks, devices, referrers, and public stats page.",
      "📱 Built-in QR code generator with download support for every short link.",
      "🔐 Authentication via email/password, Google, and GitHub using NextAuth.",
      "🎨 Beautiful UI with full dark and light mode support.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle", "Next-Auth"],
  },

  {
    title: "TripBuddy – AI Travel Planner",
    lightSrc: "/trip-light.png",
    darkSrc: "/trip-light.png",
    href: "#",
    githubUrl: "https://github.com/M0hitThapa/TripBuddy",
    liveUrl: "https://trip-buddy-yw85.vercel.app/",
    description:
      "An AI-powered trip planner where users chat with Sophia, an intelligent travel agent who crafts personalized travel plans with detailed itineraries, budgets, and location links.",
    features: [
      "🤖 Chat with Sophia to generate personalized day-by-day itineraries and travel guidance.",
      "📍 Includes Google Maps links, budgeting, essential tips, and backpack suggestions.",
      "💾 Save trip plans with a dedicated dashboard for viewing and managing past trips.",
      "🔒 Secure authentication powered by Clerk with full theme customization.",
      "🌍 Clean, modern interface designed for effortless trip planning.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Google Maps", "Convex"],
  },
];
