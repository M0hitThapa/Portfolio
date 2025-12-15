import Link from "next/link";
import Container from "./container";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import CalWidget from "./cal-widget-wrapper";

export const Footer = () => {
  return (
    <Container className="flex flex-col border-t border-neutral-200 dark:border-neutral-900 px-5 py-3 items-center justify-center">
      <h1 className="text-xl font-semibold text-shadow-xl pb-5 text-neutral-800 dark:text-neutral-300">Come So Far.   Let's Connect</h1>
      <CalWidget />
      <div className="flex items-center pt-5 justify-center gap-4 text-sm text-neutral-500">
        <Link href="https://x.com/ThapaMohit49320">
          <IconBrandX className="size-6 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/mohit-thapa-859a69300/">
          <IconBrandLinkedin className="size-6 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/M0hitThapa">
          <IconBrandGithub className="size-6 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
      <p className="text-xs pt-5 text-neutral-500">Build by Mohit Thapa with Love❤️.</p>

    </Container>
  );
};
