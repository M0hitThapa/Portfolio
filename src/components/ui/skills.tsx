"use client";

import Image from "next/image";
import Container from "../container";
import { motion } from "motion/react";
import { useState } from "react";

const svgIcons = [
  { icon: "/better-auth.svg", title: "Better-Auth" },
  { icon: "/javascript.svg", title: "JavaScript" },
  { icon: "/aws_dark.svg", title: "AWS" },
  { icon: "/cloudflare-workers.svg", title: "Cloudflare Workers" },
  { icon: "/docker.svg", title: "Docker" },
  { icon: "/motion_dark.svg", title: "Framer Motion" },
  { icon: "/neon.svg", title: "Neon" },
  { icon: "/neovim.svg", title: "Neovim" },
  { icon: "/nextjs_icon_dark.svg", title: "Next.js" },
  { icon: "/nodejs.svg", title: "Node.js" },
  { icon: "/postgresql.svg", title: "PostgreSQL" },
  { icon: "/tailwindcss.svg", title: "Tailwind CSS" },
  { icon: "/typescript.svg", title: "TypeScript" },
  { icon: "/react_dark.svg", title: "React" },
  { icon: "/clerk.svg", title: "Clerk" },
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
    <div>
      <div className="flex flex-col pt-2">
        <h1 className="font-title text-2xl font-bold tracking-tight text-black text-shadow-md">
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
              <div className="rounded bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                {svgIcons[hoveredIndex].title}
                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
              </div>
            </motion.div>
          )}

          <div className="border-t border-b border-dashed border-gray-300 mask-r-from-85% mask-l-from-85%">
            <div className="mx-auto flex w-fit border-l border-dashed border-gray-300">
              {svgIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex h-13 w-13 cursor-pointer items-center justify-center border-r border-dashed border-gray-300"
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
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={45}
                      width={45}
                      className="p-2"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
