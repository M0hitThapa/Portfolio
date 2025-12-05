import { promises as fs } from "fs";
import path from "path";

type BlogMetadata = {
    slug: string;
    title: string;
    description: string;
    date: string;
    image?: string;
};

export async function getBlogs(): Promise<BlogMetadata[]> {
    const blogDir = path.join(process.cwd(), "src/app/blog");
    const entries = await fs.readdir(blogDir, { withFileTypes: true });

    const blogs: BlogMetadata[] = [];

    for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== "[slug]") {
            const mdxPath = path.join(blogDir, entry.name, "page.mdx");

            try {
                const content = await fs.readFile(mdxPath, "utf-8");
                const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

                if (frontmatterMatch) {
                    const frontmatter = frontmatterMatch[1];
                    const metadata: any = {};

                    frontmatter.split("\n").forEach((line) => {
                        const match = line.match(/^(\w+):\s*"?(.+?)"?$/);
                        if (match) {
                            metadata[match[1]] = match[2].replace(/^"|"$/g, "");
                        }
                    });

                    blogs.push({
                        slug: entry.name,
                        title: metadata.title || entry.name,
                        description: metadata.description || "",
                        date: metadata.date || "",
                        image: metadata.image,
                    });
                }
            } catch (error) {
                console.error(`Error reading blog ${entry.name}:`, error);
            }
        }
    }

    return blogs.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
