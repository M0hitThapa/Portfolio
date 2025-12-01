import Link from "next/link";
import Container from "./container";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-200 px-5 py-3 dark:border-neutral-900">
      <p className="text-xs text-neutral-500">Build with love by Mohit Thapa</p>
      <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
        <Link href="https://x.com/manuaaji">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/manuaaji">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://x.com/manuaaji">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
