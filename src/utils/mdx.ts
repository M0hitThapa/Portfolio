import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<{
      title: string;
      image: string;
      date: string;
    }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.log("failed to load blog", error);
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allBLogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");

      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return allBLogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data", `${slug}.mdx`),
    "utf-8",
  );
  if (!singleBlog) {
    return null;
  }

  const { frontmatter } = await compileMDX<Frontmatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
};
