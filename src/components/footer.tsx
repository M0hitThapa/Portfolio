import Link from "next/link";
import Container from "./container";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import CalWidget from "./cal-widget";

export const Footer = () => {
  return (
    <Container className="flex flex-col border-t border-neutral-200 dark:border-neutral-900 px-5 py-3 items-center justify-center">
      <h1 className="text-xl font-semibold text-shadow-xl pb-5 text-neutral-800 dark:text-neutral-300">I am Available here..</h1>
      <CalWidget />
      <div className="flex items-center pt-5 justify-center gap-4 text-sm text-neutral-500">
        <Link href="https://x.com/manuaaji">
          <IconBrandX className="size-8 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/manuaaji">
          <IconBrandLinkedin className="size-8 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/manuaaji">
          <IconBrandGithub className="size-8 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
      <p className="text-xs pt-5 text-neutral-500">Build by Mohit Thapa with Love.</p>

    </Container>
  );
};
