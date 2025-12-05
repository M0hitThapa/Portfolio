export type Project = {
  title: string;
  lightSrc: string;
  darkSrc: string;
  href: string;
  description: string;
  features: string[];
};

export const projects: Project[] = [
  {
    title: "Pulsea – Feedback Collection SaaS",
    lightSrc: "/feedback-light.png",
    darkSrc: "/feedback-dark.png",
    href: "#",
    description:
      "A powerful feedback-collection SaaS with an animated, embeddable widget that integrates seamlessly with any platform, helping teams gather user insights, bug reports, and product suggestions in one place.",
    features: [
      "⚡ Embeddable animated widget with support for screenshots, images, and bug reports.",
      "📊 Intuitive dashboard with filtering, search, and organized tagging for feedback and bugs.",
      "🤖 AI assistant for analyzing feedback and offering insights directly in the dashboard.",
      "✉️ Built-in email tools and real-time updates for managing and responding to users.",
      "🔒 Authentication powered by Clerk with full dark/light theme support.",
    ],
  },

  {
    title: "LinkWisp – Advanced URL Shortener",
    lightSrc: "/url-light.png",
    darkSrc: "/url-dark.png",
    href: "#",
    description:
      "A feature-rich URL shortener offering customization, analytics, QR generation, and a clean dashboard experience powered by modern authentication and design.",
    features: [
      "🔗 Create short links with custom codes, edit them, and manage all URLs easily.",
      "📊 Comprehensive analytics including clicks, devices, referrers, and public stats page.",
      "📱 Built-in QR code generator with download support for every short link.",
      "🔐 Authentication via email/password, Google, and GitHub using NextAuth.",
      "🎨 Beautiful UI with full dark and light mode support.",
    ],
  },

  {
    title: "SopiaTrip – AI Travel Planner",
    lightSrc: "/trip-light.png",
    darkSrc: "/trip-light.png",
    href: "#",
    description:
      "An AI-powered trip planner where users chat with Sophia, an intelligent travel agent who crafts personalized travel plans with detailed itineraries, budgets, and location links.",
    features: [
      "🤖 Chat with Sophia to generate personalized day-by-day itineraries and travel guidance.",
      "📍 Includes Google Maps links, budgeting, essential tips, and backpack suggestions.",
      "💾 Save trip plans with a dedicated dashboard for viewing and managing past trips.",
      "🔒 Secure authentication powered by Clerk with full theme customization.",
      "🌍 Clean, modern interface designed for effortless trip planning.",
    ],
  },
];
