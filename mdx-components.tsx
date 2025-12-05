import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Link } from "next-view-transitions";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-8 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-8 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-4 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="mb-2 mt-4 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="mb-2 mt-4 text-base font-semibold text-neutral-700 dark:text-neutral-300">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-neutral-700 dark:text-neutral-300">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href as string}
      className="font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-neutral-600 hover:decoration-neutral-600 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:text-neutral-300 dark:hover:decoration-neutral-400"
    >
      {children}
    </Link>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} font-mono text-sm`}>{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-neutral-300 bg-neutral-50 py-2 pl-4 pr-4 italic text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-neutral-700 dark:text-neutral-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt as string}
      width={800}
      height={400}
      className="my-6 rounded-lg shadow-md"
    />
  ),
  hr: () => (
    <hr className="my-8 border-t border-neutral-200 dark:border-neutral-800" />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-neutral-200 dark:border-neutral-800">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-neutral-200 bg-neutral-100 px-4 py-2 text-left font-semibold text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-neutral-200 px-4 py-2 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-neutral-800 dark:text-neutral-200">
      {children}
    </em>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
