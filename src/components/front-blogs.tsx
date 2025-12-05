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
      <h1 className="pb-3 text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Articles
      </h1>
      <div className="flex flex-col gap-4 py-10">
        {/* {allBlogs.map((blog, idx) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h1 className="text-primary text-2xl font-semibold tracking-tight dark:text-neutral-300">
                {blog.title}
              </h1>
              <p className="text-secondary text-sm md:text-sm">
                {blog.date
                  ? new Date(blog.date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                  : "No date"}
              </p>
            </div>
            <div className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
              {truncate(blog.description || "", 150)}
            </div>
          </Link>
        ))} */}
        <Link href="/blog/nextjs-portfolio-guide">
          <BlogHeader
            title="Building a Modern Portfolio with Next.js and Tailwind CSS"
            description="A step-by-step guide to creating a stunning portfolio website using Next.js 15, Tailwind CSS v4, and modern web development best practices."
            date="2025-09-23"
          />{" "}
        </Link>
      </div>
    </div>
  );
};
