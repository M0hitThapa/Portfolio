"use client";
import { motion, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";
import Container from "./container";
import { GithubIcon, SquareArrowRightIcon } from "./icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const Projects = [
    {
      title: "Dark Pricing Page",
      src: "https://i.pinimg.com/1200x/1a/f1/10/1af110a98630bc2b446392b10fef7618.jpg",
      href: "#",
      description:
        "A sleek, modern pricing page with a dark theme, designed for SaaS products and subscription services.",
      features: [
        " Responsive design for all screen sizes",
        " Multiple payment gateway integrations",
        " Animated pricing cards with hover effects",
        " Secure checkout process",
        " Usage analytics dashboard",
      ],
    },
    {
      title: "Blog Section",
      src: "https://i.pinimg.com/1200x/1a/18/e9/1a18e9b3d3fd97d7b4291e0af63c46b9.jpg",
      href: "#",
      description:
        "A clean and engaging blog section layout, perfect for sharing articles and updates with readers.",
      features: [
        " Rich text editor with markdown support",
        " Advanced search and filtering options",
        " Comment system with moderation",
        " Mobile-optimized reading experience",
        " Tag-based content organization",
      ],
    },
    {
      title: "Dashboard Design",
      src: "https://i.pinimg.com/1200x/c3/7c/8d/c37c8d887c04bce699b62739ed1d18f1.jpg",
      href: "#",
      description:
        "An intuitive dashboard interface for managing analytics, user data, and business metrics.",
      features: [
        " Real-time data visualization",
        " Customizable widget layouts",
        " Lightning-fast performance",
        " Smart notification system",
        " Export data in multiple formats",
      ],
    },
    {
      title: "Bento Grid Design",
      src: "https://i.pinimg.com/1200x/c0/49/06/c049064ccc7757ca93b0825d36b586f4.jpg",
      href: "#",
      description:
        "A visually appealing bento grid layout, ideal for showcasing multiple features or portfolio items.",
      features: [
        " Drag-and-drop grid customization",
        " Dynamic color theming",
        " Auto-responsive grid system",
        " Smooth transition animations",
        " Support for images and videos",
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
                    <h1 className="font-title flex gap-2 text-xl font-black text-black dark:text-white">
                      <SquareArrowRightIcon />
                      {project.title}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="shadow-input flex cursor-pointer items-center justify-center rounded-md border border-gray-100 p-0.5 text-sm dark:border-neutral-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="rounded bg-neutral-950 dark:bg-neutral-50 dark:text-black">
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </h1>
                    <ul className="list-disc text-sm leading-7 font-medium text-neutral-600">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-4 gap-1">
                      {Skills.map((skill, idx) => (
                        <div
                          key={skill.title}
                          className="shadow-input flex items-center justify-center gap-0.5 rounded border border-neutral-300 dark:border-neutral-800"
                        >
                          <div className="flex items-center justify-center gap-1 px-0.5 py-1">
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="shadow-input flex cursor-pointer items-center justify-center rounded-md border border-gray-100 p-0.5 text-sm text-black dark:border-neutral-800 dark:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                          <path d="M11 13l9 -9" />
                          <path d="M15 4h5v5" />
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

{
  /*
  
  
      <div className="">
                    {Skills.map((skill, idx) => (
                      <div
                        key={skill.title}
                        className="flex items-center justify-center gap-0.5"
                      >
                        <Image
                          src={skill.icon}
                          alt="skills"
                          height={20}
                          width={20}
                        />
                        <h1 className="text-sm">{skill.title}</h1>
                      </div>
                    ))}
                  </div>
  */
}
