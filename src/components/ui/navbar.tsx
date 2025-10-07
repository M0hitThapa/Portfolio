import Container from "../container";
import Link from "next/link";
import { Copy, Mail } from "lucide-react";

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
        <div className="flex items-end gap-2">
          <h1 className="text-3xl font-black text-black text-shadow-md dark:text-neutral-100">
            M.T
          </h1>
          <div className="flex gap-2">
            <p className="flex gap-1 font-medium tracking-tighter text-neutral-500">
              <Mail className="size-5" />
              mohitthapa2058@gmail.com
            </p>
            <Copy className="size-4" />
          </div>
        </div>
        <div className="flex gap-2 text-base/7 font-medium text-neutral-700 dark:text-neutral-300">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              className="rounded-md px-2 py-1 transition-all duration-300 hover:bg-neutral-100"
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
