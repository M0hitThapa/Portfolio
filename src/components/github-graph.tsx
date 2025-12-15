"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GitHubGraph() {
    const { theme } = useTheme();

    return (
        <div className="w-full overflow-x-auto  px-5">
            <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
                Contributions
            </h1>
            <div className="pt-4">
                <GitHubCalendar
                    username="M0hitThapa"
                    blockSize={10}
                    blockMargin={3.9}
                    fontSize={10}
                    colorScheme={theme === "dark" ? "dark" : "light"}
                    theme={{
                        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                />
            </div>
        </div>
    );
}
