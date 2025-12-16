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
    <Container className="flex flex-col border-t border-neutral-200 px-5 py-3 dark:border-neutral-900">
      <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Contact
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 pb-5">
        <CalWidget />
        <h1 className="text-shadow-xl text-xl font-medium text-neutral-600 dark:text-neutral-400">
          You can find me on these platforms.
        </h1>

        <div className="flex gap-4 text-sm text-neutral-500">
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
      </div>
      <p className="border-t border-neutral-200 pt-2 text-center text-xs text-neutral-500 dark:border-neutral-800">
        Build by Mohit Thapa with Love❤️.
      </p>
    </Container>
  );
};
