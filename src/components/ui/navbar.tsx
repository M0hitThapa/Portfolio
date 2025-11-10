import Container from "../container";
import Link from "next/link";
import { Copy, Dot, Mail } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const navItems = [
    { title: "Projects", link: "/project" },
    { title: "Blogs", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Container className="relative border-r border-l border-gray-200 bg-white dark:border-neutral-900 dark:bg-black">
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
      <div className="relative flex items-center justify-between border-b border-gray-200 px-5 py-3 dark:border-neutral-900">
        <div className="flex items-end gap-2">
          <h1 className="font-title text-3xl font-black text-black text-shadow-md dark:text-neutral-100">
            M.T
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-2 text-base/7 font-medium text-neutral-700 dark:text-neutral-300">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                className="font-title rounded-md px-2 py-1 font-semibold transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

{
  /* <div className="flex gap-2">
            <p className="flex gap-1 font-medium tracking-tighter text-neutral-500">
              <Mail className="size-5 text-neutral-700" />
              mohitthapa2058@gmail.com
            </p>
            <Copy className="size-4" />
          </div> */
}
