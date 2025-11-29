"use client";
import Link from "next/link";
import { MotionImage } from "./motion-image";
import Container from "../container";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container className="relative w-full">
      {/* Noise Texture (Darker Dots) Background */}
      {/* <div className="border-edge screen-line-before screen-line-after absolute aspect-2/1 h-52 w-full bg-zinc-950/0.25 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] select-none [--pattern-foreground:var(--color-zinc-950)]/5 after:-bottom-px dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5" /> */}

      <div className="relative flex items-center justify-between px-5 pt-2 pb-7 md:pt-6">
        <motion.div
          onClick={() => setIsHovered(!isHovered)}
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 0.8,
          }}
          className="cursor-pointer"
        >
          <MotionImage
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            src={isHovered ? "/profile2.jpeg" : "/profile.png"}
            alt="profile"
            height={1000}
            width={1000}
            className="shadow-input size-28 rounded-full border-2 border-neutral-200 bg-neutral-900 md:size-36 dark:border-neutral-800"
          />
        </motion.div>
        <div className="relative flex flex-col items-end justify-end">
          <h1 className="ibm-plex-serif-semibold-italic pt-2 pb-1 text-3xl tracking-tight text-neutral-900 text-shadow-lg md:text-6xl dark:text-neutral-100">
            <span className="ibm-plex-serif-semibold-italic text-neutral-700 dark:text-neutral-300">
              Mohit
            </span>
            <span className="ibm-plex-serif-semibold-italic">Thapa</span>
          </h1>
          <div className="rounded-sm shadow-md/40 shadow-neutral-800 dark:shadow-neutral-200">
            <p className="md:text-md flex max-w-lg items-center justify-center gap-1 rounded-sm bg-neutral-900 px-3 py-1 text-sm font-bold text-white shadow-inner shadow-neutral-400 dark:bg-neutral-50 dark:text-black dark:shadow-neutral-700">
              Design Engineer
            </p>
          </div>
          <div className="flex gap-1 pt-2">
            <Link href="/github">
              <svg
                className="text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link href="/linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin text-black dark:text-neutral-200"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </Link>
            <Link href="/twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x text-black dark:text-neutral-200"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

{
  /*
    <div className="flex gap-2 pt-2">
            <Link href="/github">
              <motion.svg
                viewBox="0 0 1024 1024"
                fill="none"
                width={30}
                height={30}
                className="shadow-input rounded bg-neutral-950 p-1"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#fff"
                />
              </motion.svg>
            </Link>
            <Link href="/linkedin">
              <motion.svg
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
                height={30}
                width={30}
                className="shadow-input rounded bg-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#0A66C2"
                />
              </motion.svg>
            </Link>
            <Link href="/twitter">
              <motion.svg
                fill="none"
                viewBox="0 0 1200 1227"
                height={30}
                width={30}
                className="shadow-input rounded bg-black p-1"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path
                  fill="#fff"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </motion.svg>
            </Link>
          </div>
  */
}
