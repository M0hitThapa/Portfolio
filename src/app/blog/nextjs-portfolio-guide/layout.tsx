import Container from "@/components/container";
import { Scales } from "@/components/scales";
import { ReactNode } from "react";

export default function BlogPostLayout({ children }: { children: ReactNode }) {
    return (
        <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 md:pt-10 md:pb-10 dark:border-neutral-900 dark:bg-black">
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
            <Scales />

            <div className="relative mx-auto max-w-3xl px-4 md:px-8">
                <article className="prose prose-neutral max-w-none dark:prose-invert">
                    {children}
                </article>
            </div>
        </Container>
    );
}
