"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const Gallery = () => {
  return (
    <Container className="pt-10 pb-5">
      <h2 className="px-5 pb-3 text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        Gallery
      </h2>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative grid grid-cols-1 gap-4 px-5 md:grid-cols-2"
      >
        {[
          "/gallery1.png",
          "/gallery2.png",
          "/gallery3.png",
          "/gallery4.png",
        ].map((src, index) => (
          <div
            key={index}
            className="shadow-input relative z-10 flex flex-col overflow-hidden rounded-sm border border-neutral-100 p-2 transition-all hover:bg-neutral-100 dark:border-neutral-900 dark:hover:bg-neutral-900"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={src}
                alt={`Gallery Preview ${index + 1}`}
                fill
                className="object-cover object-top transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/gallery"
          className="rounded bg-neutral-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          View More
        </Link>
      </div>
    </Container>
  );
};
