import Container from "@/components/container";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";

export default async function ProjectsPage() {
  return (
    <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 md:pt-10 md:pb-5 dark:border-neutral-900 dark:bg-black">
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
      <Scales />
      <div className="relative">
        <div className="px-8">
          <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
            All Projects
          </h1>
          <p className="text-secondary max-w-lg pt-4 md:text-sm">
            All of the crafts that i have done so far. Love building projects
            while learning and improving.
          </p>
        </div>
        <div className="px-3">
          <Projects />
        </div>
      </div>
    </Container>
  );
}
