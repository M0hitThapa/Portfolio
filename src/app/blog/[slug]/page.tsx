import Container from "@/components/container";
import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

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
  console.log(frontmatter);
  return (
    <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 dark:border-neutral-900 dark:bg-black">
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
      <img
        src={frontmatter.image}
        alt={frontmatter.title}
        className="mx-auto mb-20 w-full max-w-2xl rounded-2xl object-cover shadow-md"
      />
      <div className="prose relative"> {content}</div>
    </Container>
  );
}
