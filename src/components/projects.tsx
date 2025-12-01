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
      title: "Bento Grid UI Kit",
      lightSrc: "/feedback-light.png",
      darkSrc: "/feedback-dark.png",
      href: "#",
      description:
        "A refined and flexible bento-style layout system designed for showcasing projects, features, and product highlights with a polished, modern look.",
      features: [
        "🧱 Deeply customizable grid blocks with drag-and-drop control for effortless layout building.",
        "🎨 Intelligent theme engine with light, dark, and auto modes for adaptive aesthetics.",
        "🌀 Smooth, expressive motion effects powered by Framer Motion for a premium feel.",
        "📸 Support for rich media including images, GIFs, videos, and icons without breaking layout.",
        "🔁 Advanced responsive scaling that automatically adjusts spacing and structure across devices.",
      ],
    },
    {
      title: "Responsive Blog Module",
      lightSrc: "/feedback-light.png",
      darkSrc: "/feedback-dark.png",
      href: "#",
      description:
        "A clean, modern blogging experience optimized for readability, performance, and effortless content creation.",
      features: [
        "📝 Markdown editor with live preview and auto-save to streamline the writing process.",
        "🔍 Smart fuzzy-search filtering for quickly locating relevant posts and topics.",
        "💬 Comment system with moderation tools and built-in spam protection.",
        "📱 Fine-tuned mobile reading experience with optimized typography and spacing.",
        "🏷️ Organized content structure using tags, categories, metadata, and reading-time indicators.",
      ],
    },
    {
      title: "Portfolio Bento Grid",
      lightSrc: "/feedback-light.png",
      darkSrc: "/feedback-dark.png",
      href: "#",
      description:
        "A customizable bento-style portfolio layout built for creators who want a clean, dynamic way to present their work.",
      features: [
        "🧱 Modular content blocks that can be reordered to match any storytelling style.",
        "🎨 Theme customization with adjustable colors, accents, and typography presets.",
        "🌀 Smooth hover, zoom, and reveal animations for an interactive browsing experience.",
        "📸 Support for images, videos, animations, and icons inside individual grid tiles.",
        "🔁 Auto-responsive scaling that maintains layout structure across all screen sizes.",
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
      <h1 className="px-5 pb-3 text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Projects
      </h1>

      <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-900">
        {Projects.map((project, idx) => (
          <div
            className="relative w-full pt-5"
            // onMouseEnter={() => setHovered(idx)}
            // onMouseLeave={() => setHovered(null)}
            key={idx}
          >
            {/* {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 h-full w-full bg-[#f8f8f8] dark:bg-[#0d0d0d]"
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
            )} */}
            <div className="relative w-full">
              <div
                key={project.title}
                className="relative z-10 flex items-start justify-between border-b border-neutral-200 px-5 pb-5 dark:border-neutral-900"
              >
                <div className="mx-auto items-center justify-center gap-10">
                  <div className="relative flex flex-col items-start justify-center gap-4">
                    <div className="flex w-full items-end justify-between">
                      <h1 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-800 text-shadow-md md:text-xl dark:text-neutral-300">
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
                            fillRule="evenodd"
                            d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z"
                            clipRule="evenodd"
                          />
                          <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
                        </svg>

                        {project.title}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="/github"
                              className="rounded-md border-2 border-neutral-300 p-1 shadow-inner shadow-neutral-200 dark:border-neutral-700 dark:shadow-neutral-800"
                            >
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
                                  fillRule="evenodd"
                                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className="rounded bg-neutral-950 dark:bg-neutral-50 dark:text-black">
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </h1>

                      <button className="flex cursor-pointer items-center justify-center gap-0.5 rounded-sm border-2 border-neutral-300 px-1.5 py-1 text-sm font-semibold text-black inset-shadow-sm dark:border-neutral-800 dark:text-white dark:inset-shadow-neutral-900">
                        <span>open live</span>
                        <svg
                          className="size-5 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <MagneticImage
                      lightSrc={project.lightSrc}
                      darkSrc={project.darkSrc}
                      alt={project.title}
                    />
                    <p className="py-2 text-base font-semibold text-neutral-800 dark:text-neutral-300">
                      {project.description}
                    </p>

                    <ul className="list-disc px-5 text-sm/7 font-medium">
                      {project.features.map((feature, featureIdx) => (
                        <li
                          className="text-neutral-700 dark:text-neutral-400"
                          key={featureIdx}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-3 gap-2 py-2 md:grid-cols-6">
                      {Skills.map((skill, idx) => (
                        <div
                          key={skill.title}
                          className="shadow-input flex cursor-pointer items-center justify-center gap-0.5 rounded border border-neutral-300 inset-shadow-sm dark:border-neutral-800 dark:inset-shadow-neutral-900"
                        >
                          <Link
                            href={"https://nextjs.org/"}
                            className="flex items-center justify-center gap-1 px-1 py-1.5"
                          >
                            <Image
                              src={skill.icon}
                              alt="skills"
                              height={14}
                              width={14}
                              className="h-4 w-4"
                            />
                            <h1 className="text-xs font-medium text-neutral-800 dark:text-neutral-400">
                              {skill.title}
                            </h1>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

function MagneticImage({
  lightSrc,
  darkSrc,
  alt,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}) {
  return (
    <div className="relative rounded border border-neutral-200 bg-neutral-50 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] p-3 shadow-lg [--pattern-fg:theme(colors.neutral.100)] dark:border-neutral-900 dark:bg-neutral-950 dark:[--pattern-fg:theme(colors.neutral.900)]">
      <div className="w-full">
        {/* Light mode image */}
        <Image
          src={lightSrc}
          alt={alt}
          width={1200}
          height={675}
          className="w-full rounded border border-white mask-radial-from-70% object-cover shadow-lg dark:hidden dark:border-neutral-900"
          priority
        />
        {/* Dark mode image */}
        <Image
          src={darkSrc}
          alt={alt}
          width={1200}
          height={675}
          className="hidden w-full rounded border border-white mask-radial-from-70% object-cover shadow-lg dark:block dark:border-neutral-900"
          priority
        />
      </div>
    </div>
  );
}
