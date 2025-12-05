import Container from "@/components/container";
import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Scales } from "@/components/scales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return {
      title: "blog not found",
    };
  }

  return {
    title: blog.frontmatter.title + "by Mohit Thapa",
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 md:pt-10 md:pb-10 dark:border-neutral-900 dark:bg-black">
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

      {/* Blog Header */}
      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100">
            {frontmatter.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            {frontmatter.date && (
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {frontmatter.image && (
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="mb-12 w-full rounded-2xl object-cover shadow-lg"
          />
        )}

        {/* Blog Content */}
        <article className="relative prose-neutral prose max-w-none dark:prose-invert">
          {content}
        </article>
      </div>
    </Container>
  );
}
