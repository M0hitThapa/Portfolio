"use client";

// import type { Transition, Variants } from "motion/react";
// import { motion, useAnimation } from "motion/react";
// import type { HTMLAttributes } from "react";
// import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
// import { cn } from "@/lib/utils";

// export interface MoonIconHandle {
//   startAnimation: () => void;
//   stopAnimation: () => void;
// }

// interface MoonIconProps extends HTMLAttributes<HTMLDivElement> {
//   size?: number;
// }

// const svgVariants: Variants = {
//   normal: {
//     rotate: 0,
//   },
//   animate: {
//     rotate: [0, -10, 10, -5, 5, 0],
//   },
// };

// const svgTransition: Transition = {
//   duration: 1.2,
//   ease: "easeInOut",
// };

// const MoonIcon = forwardRef<MoonIconHandle, MoonIconProps>(
//   ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
//     const controls = useAnimation();
//     const isControlledRef = useRef(false);

//     useImperativeHandle(ref, () => {
//       isControlledRef.current = true;

//       return {
//         startAnimation: () => controls.start("animate"),
//         stopAnimation: () => controls.start("normal"),
//       };
//     });

//     const handleMouseEnter = useCallback(
//       (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!isControlledRef.current) {
//           controls.start("animate");
//         } else {
//           onMouseEnter?.(e);
//         }
//       },
//       [controls, onMouseEnter],
//     );

//     const handleMouseLeave = useCallback(
//       (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!isControlledRef.current) {
//           controls.start("normal");
//         } else {
//           onMouseLeave?.(e);
//         }
//       },
//       [controls, onMouseLeave],
//     );
//     return (
//       <div
//         className={cn(className)}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         {...props}
//       >
//         <motion.svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={size}
//           height={size}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           variants={svgVariants}
//           animate={controls}
//           transition={svgTransition}
//         >
//           <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//         </motion.svg>
//       </div>
//     );
//   },
// );

// MoonIcon.displayName = "MoonIcon";

// export { MoonIcon };

// export interface SunIconHandle {
//   startAnimation: () => void;
//   stopAnimation: () => void;
// }

// interface SunIconProps extends HTMLAttributes<HTMLDivElement> {
//   size?: number;
// }

// const pathVariants: Variants = {
//   normal: { opacity: 1 },
//   animate: (i: number) => ({
//     opacity: [0, 1],
//     transition: { delay: i * 0.1, duration: 0.3 },
//   }),
// };

// const SunIcon = forwardRef<SunIconHandle, SunIconProps>(
//   ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
//     const controls = useAnimation();
//     const isControlledRef = useRef(false);

//     useImperativeHandle(ref, () => {
//       isControlledRef.current = true;

//       return {
//         startAnimation: () => controls.start("animate"),
//         stopAnimation: () => controls.start("normal"),
//       };
//     });

//     const handleMouseEnter = useCallback(
//       (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!isControlledRef.current) {
//           controls.start("animate");
//         } else {
//           onMouseEnter?.(e);
//         }
//       },
//       [controls, onMouseEnter],
//     );

//     const handleMouseLeave = useCallback(
//       (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!isControlledRef.current) {
//           controls.start("normal");
//         } else {
//           onMouseLeave?.(e);
//         }
//       },
//       [controls, onMouseLeave],
//     );
//     return (
//       <div
//         className={cn(className)}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         {...props}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={size}
//           height={size}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="4" />
//           {[
//             "M12 2v2",
//             "m19.07 4.93-1.41 1.41",
//             "M20 12h2",
//             "m17.66 17.66 1.41 1.41",
//             "M12 20v2",
//             "m6.34 17.66-1.41 1.41",
//             "M2 12h2",
//             "m4.93 4.93 1.41 1.41",
//           ].map((d, index) => (
//             <motion.path
//               key={d}
//               d={d}
//               animate={controls}
//               variants={pathVariants}
//               custom={index + 1}
//             />
//           ))}
//         </svg>
//       </div>
//     );
//   },
// );

// SunIcon.displayName = "SunIcon";

// export { SunIcon };

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-sun"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
      <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
      <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  );
};

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-moon"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
    </svg>
  );
};

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SquareArrowRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SquareArrowRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const squareVariants: Variants = {
  normal: { transition: { duration: 0.4 } },
  animate: { transition: { duration: 0.6, ease: "easeInOut" } },
};

const pathVariants: Variants = {
  normal: { d: "M8 12h8", opacity: 1 },
  animate: {
    d: ["M8 12h8", "M8 12h5", "M8 12h8"],
    transition: { duration: 0.4 },
  },
};

const secondPathVariants: Variants = {
  normal: { d: "m12 8 4 4-4 4", translateX: 0, opacity: 1 },
  animate: {
    d: "m12 8 4 4-4 4",
    translateX: [0, -3, 0],
    transition: { duration: 0.4 },
  },
};

const SquareArrowRightIcon = forwardRef<
  SquareArrowRightIconHandle,
  SquareArrowRightIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;
    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) controls.start("animate");
      else onMouseEnter?.(e);
    },
    [controls, onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) controls.start("normal");
      else onMouseLeave?.(e);
    },
    [controls, onMouseLeave],
  );

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          width="18"
          height="18"
          x="3"
          y="3"
          rx="2"
          variants={squareVariants}
          animate={controls}
          initial="normal"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          initial="normal"
          d="M8 12h8"
        />
        <motion.path
          variants={secondPathVariants}
          animate={controls}
          initial="normal"
          d="m12 8 4 4-4 4"
        />
      </svg>
    </div>
  );
});

SquareArrowRightIcon.displayName = "SquareArrowRightIcon";

export { SquareArrowRightIcon };

export interface GithubIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface GithubIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const bodyVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
};

const tailVariants: Variants = {
  normal: {
    pathLength: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  draw: {
    pathLength: [0, 1],
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  wag: {
    pathLength: 1,
    rotate: [0, -15, 15, -10, 10, -5, 5],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const GithubIcon = forwardRef<GithubIconHandle, GithubIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const bodyControls = useAnimation();
    const tailControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: async () => {
          bodyControls.start("animate");
          await tailControls.start("draw");
          tailControls.start("wag");
        },
        stopAnimation: () => {
          bodyControls.start("normal");
          tailControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          bodyControls.start("animate");
          await tailControls.start("draw");
          tailControls.start("wag");
        } else {
          onMouseEnter?.(e);
        }
      },
      [bodyControls, onMouseEnter, tailControls],
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          bodyControls.start("normal");
          tailControls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [bodyControls, tailControls, onMouseLeave],
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            variants={bodyVariants}
            initial="normal"
            animate={bodyControls}
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <motion.path
            variants={tailVariants}
            initial="normal"
            animate={tailControls}
            d="M9 18c-4.51 2-5-2-7-2"
          />
        </svg>
      </div>
    );
  },
);

GithubIcon.displayName = "GithubIcon";

export { GithubIcon };
