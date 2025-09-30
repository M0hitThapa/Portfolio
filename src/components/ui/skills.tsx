"use client";

import Image from "next/image";
import Container from "../container";
import { motion } from "motion/react";

const svgIcons = [
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
];

export const Skills = () => {
  return (
    <Container>
      <div className="flex flex-col pt-5">
        <h1 className="text-primary text-2xl font-bold tracking-tight text-shadow-md">
          Skills
        </h1>
        <div className="relative py-5">
          <div className="border-t border-b border-gray-200 mask-r-from-80% mask-l-from-80%">
            <div className="mx-auto flex w-fit border-l border-gray-200 bg-gray-50">
              {svgIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex h-13 w-13 items-center justify-center border-r border-gray-200"
                >
                  {/* Icon with hover animation */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                    transition={{
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
    </Container>
  );
};
