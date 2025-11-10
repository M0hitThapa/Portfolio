"use client";
import { motion, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";
import Container from "./container";
import { GithubIcon, SquareArrowRightIcon } from "./icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const Projects = [
    {
      title: "Dark Pricing Page",
      src: "https://i.pinimg.com/1200x/1a/f1/10/1af110a98630bc2b446392b10fef7618.jpg",
      href: "#",
      description:
        "A sleek and modern dark-themed pricing page — perfect for SaaS startups and subscription-based services.",
      features: [
        "💳 Seamless Stripe integration with global currency support",
        "⚡ Dynamic plan switching with instant UI updates",
        "📊 Real-time usage and billing analytics",
        "🧠 Smart discount and coupon logic",
        "🔒 Secure checkout experience with validation",
      ],
    },
    {
      title: "Blog Section",
      src: "https://i.pinimg.com/1200x/1a/18/e9/1a18e9b3d3fd97d7b4291e0af63c46b9.jpg",
      href: "#",
      description:
        "A beautifully structured blog layout designed to boost engagement and readability across all devices.",
      features: [
        "📝 Built-in markdown editor with live preview",
        "🔍 Smart content filtering and search system",
        "💬 Comment section with moderation tools",
        "📱 Fully responsive and optimized for mobile reading",
        "🏷️ Tag and category-based organization",
      ],
    },
    {
      title: "Dashboard Design",
      src: "https://i.pinimg.com/1200x/c3/7c/8d/c37c8d887c04bce699b62739ed1d18f1.jpg",
      href: "#",
      description:
        "A powerful and intuitive analytics dashboard for managing users, metrics, and insights effortlessly.",
      features: [
        "📈 Real-time charts and data visualization",
        "🧩 Modular widgets with drag-and-drop layout",
        "⚙️ Blazing-fast performance with caching",
        "🔔 Smart alert and notification system",
        "📤 Export data to CSV, PDF, or JSON formats",
      ],
    },
    {
      title: "Bento Grid Design",
      src: "https://i.pinimg.com/1200x/c0/49/06/c049064ccc7757ca93b0825d36b586f4.jpg",
      href: "#",
      description:
        "A dynamic and aesthetic bento-style layout — perfect for showcasing projects, features, or portfolios.",
      features: [
        "🧱 Fully customizable drag-and-drop grid layout",
        "🎨 Adaptive color theming with light/dark modes",
        "🌀 Smooth hover and transition animations",
        "📸 Supports mixed media — images, videos, and icons",
        "🔁 Auto-responsive layout for all screen sizes",
      ],
    },
  ];

  const Skills = [
    { icon: "/nextjs_icon_dark.svg", title: "Next.js" },
    { icon: "/nodejs.svg", title: "Node.js" },
    { icon: "/postgresql.svg", title: "PostgreSQL" },
    { icon: "/tailwindcss.svg", title: "Tailwind CSS" },
    { icon: "/typescript.svg", title: "TypeScript" },

    { icon: "/clerk.svg", title: "Clerk" },
  ];

  return (
    <Container className="pt-2">
      <h1 className="font-title px-5 pb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
        Projects
      </h1>

      <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-900">
        {Projects.map((project, idx) => (
          <div
            className="relative w-full pt-5"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={idx}
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 h-full w-full bg-[#f0f0f0] dark:bg-[#0d0d0d]"
              >
                <svg className="absolute inset-0 h-full w-full">
                  <defs>
                    <filter id="noiseFilter">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    filter="url(#noiseFilter)"
                    opacity="0.15"
                  />
                </svg>
              </motion.span>
            )}
            <div className="relative w-full">
              <div
                key={project.title}
                className="relative z-10 flex items-start justify-between border-b border-neutral-200 px-5 pb-5 dark:border-neutral-900"
              >
                <div className="flex items-start justify-center gap-10">
                  <MagneticImage src={project.src} alt={project.title} />

                  <div className="relative flex flex-col items-start justify-center gap-4">
                    <h1 className="font-title flex items-center gap-2 text-xl font-black text-black dark:text-white">
                      <svg
                        className="h-8 w-8 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z"
                          clip-rule="evenodd"
                        />
                        <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
                      </svg>

                      {project.title}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button>
                            <svg
                              className="h-6 w-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="rounded bg-neutral-950 dark:bg-neutral-50 dark:text-black">
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </h1>
                    <ul className="list-disc text-sm leading-7 font-medium text-neutral-600 dark:text-neutral-400">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-4 gap-1">
                      {Skills.map((skill, idx) => (
                        <div
                          key={skill.title}
                          className="shadow-input flex cursor-pointer items-center justify-center gap-0.5 rounded border border-neutral-300 inset-shadow-sm dark:border-neutral-800 dark:inset-shadow-neutral-900"
                        >
                          <Link
                            href={"https://nextjs.org/"}
                            className="flex items-center justify-center gap-0.5 px-0.5 py-1"
                          >
                            <Image
                              src={skill.icon}
                              alt="skills"
                              height={14}
                              width={14}
                              className="h-4 w-4"
                            />
                            <h1 className="text-xs text-neutral-800 dark:text-neutral-400">
                              {skill.title}
                            </h1>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="shadow-input flex cursor-pointer items-center justify-center rounded border border-gray-300 p-1 text-sm text-black dark:border-gray-700 dark:text-white">
                        <svg
                          className="h-6 w-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="rounded bg-neutral-950 text-white dark:bg-neutral-50 dark:text-black">
                      <p>open live</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

function MagneticImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      x.set(0);
      y.set(0);
      return;
    }

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const offsetX = clientX - (rect.left + rect.width / 2);
      const offsetY = clientY - (rect.top + rect.height / 2);

      x.set(offsetX / 5);
      y.set(offsetY / 5);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [hovered, x, y]);

  return (
    <div className="relative rounded border border-neutral-200 bg-white bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] p-3 shadow-lg [--pattern-fg:theme(colors.neutral.100)] dark:border-neutral-900 dark:bg-black dark:[--pattern-fg:theme(colors.neutral.900)]">
      <motion.div
        ref={ref}
        style={{ x, y }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="relative z-10 h-48 w-auto rounded border border-white object-cover shadow-lg dark:border-black"
        />
      </motion.div>
    </div>
  );
}
