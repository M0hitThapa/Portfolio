import { getBlogs } from "@/utils/blogs";
import { Link } from "next-view-transitions";
import { BlogHeader } from "./blog-header";

export const FrontBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="px-5 py-5">
      <h1 className=" text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Articles
      </h1>
      <div className="flex flex-col gap-2 pt-5">

        <Link href="/blog/nextjs-portfolio-guide">
          <BlogHeader
            title="Building a Modern Portfolio"
            description="A step-by-step guide to creating a stunning portfolio website using Next.js 15, Tailwind CSS v4, and modern web development best practices."
            date="2025-09-23"
          />{" "}
        </Link>
        <Link href="/blog/tailwind-basics">
          <BlogHeader
            title="learn tailwind basics through first principle"
            description="A step-by-step guide to creating stunnign and Beautiful ui using tailwind css."
            date="2025-10-10"
          />{" "}

        </Link>
      </div>
    </div>
  );
};
