"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";
import Container from "../container";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { title: "About", link: "/about" },
    { title: "Projects", link: "/project" },
    { title: "Blogs", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Container className="border-r border-l border-gray-200">
      <div className="flex items-center justify-between border-b border-gray-100 p-3">
        <h1 className="text-3xl font-bold text-neutral-950 text-shadow-md dark:text-neutral-100">
          M.T
        </h1>
        <div className="text-md flex gap-2 font-medium text-neutral-700 dark:text-neutral-300">
          {navItems.map((item, idx) => (
            <NavItem key={idx} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

function NavItem({ title, link }: { title: string; link: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      // reset when not hovered
      x.set(0);
      y.set(0);
      return;
    }

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const offsetX = clientX - (rect.left + rect.width / 2);
      const offsetY = clientY - (rect.top + rect.height / 2);

      x.set(offsetX / 5);
      y.set(offsetY / 5);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [hovered, x, y]);

  return (
    <Link
      href={link}
      className="rounded-md px-2 py-1 transition-all duration-300 hover:bg-neutral-100"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.1 },
        }}
        transition={{
          duration: 0.3,
        }}
        ref={ref}
        style={{ x, y }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {title}
      </motion.div>
    </Link>
  );
}

export default Navbar;
