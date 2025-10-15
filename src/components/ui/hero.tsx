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
    <div className="relative w-full">
      {/* Noise Texture (Darker Dots) Background */}
      <div className="border-edge screen-line-before screen-line-after absolute aspect-2/1 h-48 w-full bg-zinc-950/0.25 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] select-none [--pattern-foreground:var(--color-zinc-950)]/5 after:-bottom-px dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5" />
      <div className="relative flex items-center justify-between px-5 pb-4 md:pt-5">
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
            src={
              isHovered
                ? "https://i.pinimg.com/736x/83/70/28/837028b92264d54e1e177999791b60c0.jpg"
                : "/profile.jpeg"
            }
            alt="profile"
            height={140}
            width={140}
            className="shadow-input rounded-full border-2 border-neutral-100 dark:border-neutral-950"
          />
        </motion.div>
        <div className="relative flex flex-col items-end justify-end">
          <h1 className="ibm-plex-serif-semibold-italic pt-2 pb-1 text-3xl tracking-tight text-black text-shadow-lg md:text-5xl dark:text-white">
            Mohit Thapa
          </h1>
          <p className="shadow-input max-w-lg rounded-md bg-neutral-900 px-2 py-1 font-bold text-white md:text-sm">
            &lt;👋Design Engineer&gt;
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/github">
              <svg
                height="28"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="28"
                data-view-component="true"
                className="text-[#1F2328]"
              >
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
              </svg>
            </Link>
            <Link href="/linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="text-[#0A66C2]"
                width="28"
                height="28"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
