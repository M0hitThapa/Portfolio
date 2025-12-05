interface BlogHeaderProps {
  title?: string;
  description?: string;
  date: string;
}

export function BlogHeader({ title, description, date }: BlogHeaderProps) {
  return (
    <div className="mb-8 dark:border-neutral-800">
      <h1 className="mb-4 text-xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
        {title}
      </h1>
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
