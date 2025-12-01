import { About } from "@/components/about";
import Container from "@/components/container";
import { Footer } from "@/components/footer";
import { FrontBlogs } from "@/components/front-blogs";
import { Projects } from "@/components/projects";
import { Hero } from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
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
          <About />

          <Skills />
          <Projects />
          <FrontBlogs />
          <Footer />
        </div>
      </Container>
    </div>
  );
}
