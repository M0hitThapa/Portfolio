import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[820px] bg-white dark:bg-neutral-950",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
