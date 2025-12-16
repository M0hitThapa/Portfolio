"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function GitHubGraph() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full overflow-x-auto px-5 text-neutral-800 dark:text-neutral-200"
    >
      <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Contributions
      </h1>
      <div className="pt-4">
        <GitHubCalendar
          username="M0hitThapa"
          blockSize={9}
          blockMargin={3.8}
          fontSize={9}
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
    </motion.div>
  );
}
