"use client";
import Container from "../container";
import Link from "next/link";
import { Copy, Dot, Mail, Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { title: "Projects", link: "/project" },
    { title: "Blogs", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Container className="relative border-b border-gray-200 dark:border-neutral-900">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-end gap-2">
          <h1 className="text-3xl font-black text-black text-shadow-md dark:text-neutral-100">
            M.T
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="hidden gap-2 text-base/7 font-medium text-neutral-700 md:flex dark:text-neutral-300">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                className="rounded-md px-2 py-1 font-semibold transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <ModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="shadow-input absolute top-full right-0 left-0 z-50 border-b border-gray-200 bg-white md:hidden dark:border-neutral-900 dark:bg-black">
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
          <div className="flex flex-col px-5 py-3">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                className="rounded-md px-2 py-3 font-semibold text-neutral-700 transition-all duration-300 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800"
                href={item.link}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
