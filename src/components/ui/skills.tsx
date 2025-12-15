"use client";

import Image from "next/image";
import Container from "../container";
import { motion } from "motion/react";
import { useState } from "react";

const svgIcons = [
  { icon: "/nextjs_icon_dark.svg", title: "Next.js" },
  { icon: "/react_dark.svg", title: "React" },
  { icon: "/javascript.svg", title: "JavaScript" },
  { icon: "/typescript.svg", title: "TypeScript" },
  { icon: "/motion_dark.svg", title: "Framer Motion" },
  { icon: "/tailwindcss.svg", title: "Tailwind CSS" },
  { icon: "/postgresql.svg", title: "PostgreSQL" },
  { icon: "/neon.svg", title: "Neon" },
  { icon: "/nodejs.svg", title: "Node.js" },
  { icon: "/clerk.svg", title: "Clerk" },
  { icon: "/supabase.svg", title: "Supabase" },
  { icon: "/tanstack.svg", title: "TanStack" },

  { icon: "/authjs.svg", title: "AuthJS" },
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    idx: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIndex(idx);
    setTooltipPosition({
      x: rect.left + rect.width / 2, // Remove window.scrollX
      y: rect.top, // Remove window.scrollY
    });
  };

  return (
    <Container className="">
      <div className="flex flex-col px-5 pt-4">
        <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
          Skills
        </h1>
        <div className="relative pt-3">
          {/* Tooltip Portal - rendered outside the border container */}
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none fixed z-50 -translate-x-1/2 whitespace-nowrap"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y - 40}px`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg dark:bg-neutral-200 dark:text-black"
              >
                {svgIcons[hoveredIndex].title}
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900 dark:bg-neutral-200"></div>
              </motion.div>
            </motion.div>
          )}

          <div className="border-t border-b border-dashed border-neutral-200 mask-r-from-90% mask-l-from-90% dark:border-neutral-900">
            <div className="mx-auto flex w-fit border-dashed border-gray-300">
              {svgIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex h-7 w-7 cursor-pointer items-center justify-center border-r border-dashed border-neutral-200 md:h-13 md:w-13 dark:border-neutral-900"
                  onMouseEnter={(e) => handleMouseEnter(idx, e)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.1,
                      ease: "easeInOut",
                    }}
                    className="flex items-center justify-center hover:bg-neutral-100 hover:backdrop:blur-sm dark:hover:bg-neutral-900"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={45}
                      width={45}
                      className="h-7 w-7 p-1 md:h-12 md:w-12 md:p-2"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
