import { BlogHeader } from "@/components/blog-header";
import Container from "@/components/container";
import { Scales } from "@/components/scales";
import { getBlogs } from "@/utils/blogs";
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
        <p className="text-secondary max-w-lg pt-4 pb-10 md:text-sm dark:text-neutral-500">
          sharing things as i learn
        </p>
        <Link href="/blog/nextjs-portfolio-guide">
          <BlogHeader
            title="Building a Modern Portfolio with Next.js and Tailwind CSS"
            description="A step-by-step guide to creating a stunning portfolio website using Next.js 15, Tailwind CSS v4, and modern web development best practices."
            date="2025-09-23"
          />{" "}
        </Link>
      </div>
    </Container>
  );
}
