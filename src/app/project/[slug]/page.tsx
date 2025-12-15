import Container from "@/components/container";
import { projects, skills } from "@/constants/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Scales } from "@/components/scales";
import { ViewTransition } from "@/components/view-transition";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="relative bg-white px-12 pt-10 pb-20 dark:bg-black">
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

      <ViewTransition className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl dark:text-neutral-50">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex cursor-pointer items-center gap-2 rounded bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Visit Live Site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex cursor-pointer items-center gap-2 rounded border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="lucide lucide-github"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View Source
          </Link>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <Image
            src={project.lightSrc}
            alt={project.title}
            fill
            className="object-cover object-top dark:hidden"
            priority
          />
          <Image
            src={project.darkSrc}
            alt={project.title}
            fill
            className="hidden object-cover object-top dark:block"
            priority
          />
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Technologies
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {skills
                .filter((skill) => project.skills.includes(skill.title))
                .map((skill, idx) => (
                  <div
                    key={skill.title}
                    className="shadow-input flex cursor-pointer items-center justify-center gap-0.5 rounded border border-neutral-300 inset-shadow-sm dark:border-neutral-800 dark:inset-shadow-neutral-900"
                  >
                    <Link
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-1 py-1.5"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.title}
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
      </ViewTransition>
    </Container>
  );
}
