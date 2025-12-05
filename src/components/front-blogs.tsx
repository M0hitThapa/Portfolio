import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

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
      <div className="">
        {allBlogs.map((blog, idx) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h1 className="text-primary text-2xl font-semibold tracking-tight dark:text-neutral-200">
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
  );
};
