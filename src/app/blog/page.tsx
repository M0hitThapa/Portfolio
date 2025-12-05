import Container from "@/components/container";
import { Scales } from "@/components/scales";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All Blogs - Mohit Thapa",
  description: "all my blogs",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 md:pt-10 md:pb-5 dark:border-neutral-900 dark:bg-black">
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          opacity="0.15"
        />
      </svg>
      <Scales />
      <div className="relative px-8">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl dark:text-neutral-200">
          All Blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 md:text-sm dark:text-neutral-500">
          This is a place where i share all of my learnings to the people to
          learn and improve themselves and from their feedback i can learn and
          improve myself.
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
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
          ))}
        </div>
      </div>
    </Container>
  );
}
