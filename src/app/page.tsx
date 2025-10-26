import Container from "@/components/container";
import { Projects } from "@/components/projects";
import { Hero } from "@/components/ui/hero";
import { Skills } from "@/components/ui/skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-[100vh] border-r border-l border-gray-200 bg-white md:pb-8 dark:border-neutral-900 dark:bg-black">
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
        <div className="relative">
          <Hero />

          <div className="flex flex-col items-start justify-start px-5 pt-4">
            <h1 className="font-title text-2xl font-bold tracking-tight text-black text-shadow-md dark:text-white">
              About
            </h1>
            <p className="text-secondary pt-2 pr-5 text-base/7">
              I'm a passionate software engineer dedicated to crafting elegant
              solutions for complex problems. With expertise in full-stack
              development, I enjoy building user-centric applications that make
              a difference.
            </p>
          </div>

          <Skills />
          <Projects />
        </div>
      </Container>
    </div>
  );
}
