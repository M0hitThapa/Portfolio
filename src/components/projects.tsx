"use client";
import Container from "./container";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Project, projects as defaultProjects, skills } from "@/constants/projects";
import { useState } from "react";
import { hover, motion } from "motion/react"

export const Projects = ({
  projects = defaultProjects,
  title,
}: {
  projects?: Project[];
  title?: string;
}) => {
  // const [hovered, setHovered] = useState<number | null>(null)
  return (
    <Container className="pt-2">
      {title && (
        <h1 className="px-5 pb-3 text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
          {title}
        </h1>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-5 relative">

        {projects.map((project, idx) => (

          <Link
            href={`/project/${project.slug}`}
            key={idx}
            className="relative hover:bg-neutral-100 dark:hover:bg-neutral-900 flex flex-col z-10 overflow-hidden rounded-sm  border border-neutral-100 shadow-input dark:border-neutral-900 transition-all p-2 "

          >
            {/* {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-900"
              />
            )} */}


            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={project.lightSrc}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500  dark:hidden"
              />
              <Image
                src={project.darkSrc}
                alt={project.title}
                fill
                className="hidden object-cover object-top transition-transform duration-500  dark:block"
              />
            </div>

            <div className="flex flex-1 flex-col p-4 relative">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="flex cursor-pointer items-center justify-center rounded-md border border-neutral-200 p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                      >
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
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Preview</p>
                    </TooltipContent>
                  </Tooltip>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                    className="flex cursor-pointer relative items-center justify-center rounded-md border border-neutral-200 p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
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
                  </div>
                </div>
              </div>

              <p className="mb-4 line-clamp-2 relative text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 relative">
                {skills
                  .filter((skill) => project.skills.includes(skill.title))
                  .map((skill) => (
                    <Tooltip key={skill.title}>
                      <TooltipTrigger asChild>
                        <div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 p-1.5 dark:border-neutral-800 dark:bg-neutral-900">
                          <Image
                            src={skill.icon}
                            alt={skill.title}
                            width={16}
                            height={16}
                            className="h-4 w-4"

                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
