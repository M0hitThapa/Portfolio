"use client";
import { motion, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const Projects = [
    {
      title: "Dark Pricing Page",
      src: "https://i.pinimg.com/1200x/1a/f1/10/1af110a98630bc2b446392b10fef7618.jpg",
      href: "#",
      description:
        "A sleek, modern pricing page with a dark theme, designed for SaaS products and subscription services.",
      features: [
        "🎯 Responsive design for all screen sizes",
        "💳 Multiple payment gateway integrations",
        "✨ Animated pricing cards with hover effects",
        "🔒 Secure checkout process",
        "📊 Usage analytics dashboard",
      ],
    },
    {
      title: "Blog Section",
      src: "https://i.pinimg.com/1200x/1a/18/e9/1a18e9b3d3fd97d7b4291e0af63c46b9.jpg",
      href: "#",
      description:
        "A clean and engaging blog section layout, perfect for sharing articles and updates with readers.",
      features: [
        "📝 Rich text editor with markdown support",
        "🔍 Advanced search and filtering options",
        "💬 Comment system with moderation",
        "📱 Mobile-optimized reading experience",
        "🏷️ Tag-based content organization",
      ],
    },
    {
      title: "Dashboard Design",
      src: "https://i.pinimg.com/1200x/c3/7c/8d/c37c8d887c04bce699b62739ed1d18f1.jpg",
      href: "#",
      description:
        "An intuitive dashboard interface for managing analytics, user data, and business metrics.",
      features: [
        "📈 Real-time data visualization",
        "🎨 Customizable widget layouts",
        "⚡️ Lightning-fast performance",
        "🔔 Smart notification system",
        "📤 Export data in multiple formats",
      ],
    },
    {
      title: "Bento Grid Design",
      src: "https://i.pinimg.com/1200x/c0/49/06/c049064ccc7757ca93b0825d36b586f4.jpg",
      href: "#",
      description:
        "A visually appealing bento grid layout, ideal for showcasing multiple features or portfolio items.",
      features: [
        "🎭 Drag-and-drop grid customization",
        "🌈 Dynamic color theming",
        "📐 Auto-responsive grid system",
        "✨ Smooth transition animations",
        "🖼️ Support for images and videos",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="pb-5 text-2xl font-bold tracking-tight text-black">
        Projects
      </h1>

      <div className="flex flex-col border-t border-neutral-200">
        {Projects.map((project, idx) => (
          <div
            className="relative w-full pt-5"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={idx}
          >
            {hovered === idx && (
              <motion.span
                layoutId="hovered-span"
                className="absolute inset-0 h-full w-full rounded-md bg-neutral-50"
              />
            )}
            <div className="relative w-full">
              {/* Dashed Grid */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 0",
                  maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                  WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              <div
                key={project.title}
                className="relative z-10 flex gap-10 border-b border-neutral-200 pb-5"
              >
                <MagneticImage src={project.src} alt={project.title} />

                <div className="relative flex flex-col items-start justify-center gap-2">
                  <h1 className="flex gap-2 text-xl font-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="#000000"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-label-important"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-12.52a1 1 0 0 1 -.78 -1.625l3.5 -4.375l-3.5 -4.375a1 1 0 0 1 .668 -1.62l.112 -.005z" />
                    </svg>
                    {project.title}
                  </h1>
                  <ul className="list-disc text-sm leading-7 font-medium text-neutral-600">
                    {project.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function MagneticImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
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
    <div className="relative rounded border border-neutral-200 bg-white bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] p-3 shadow-lg [--pattern-fg:theme(colors.neutral.100)]">
      <motion.div
        ref={ref}
        style={{ x, y }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="relative z-10 h-48 w-auto rounded border border-white object-cover shadow-lg"
        />
      </motion.div>
    </div>
  );
}
