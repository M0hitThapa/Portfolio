import Container from "@/components/container";
import { Scales } from "@/components/scales";
import { ViewTransition } from "@/components/view-transition";
import Image from "next/image";

export default function GalleryPage() {
    return (
        <Container className="relative min-h-screen border-r border-l border-gray-200 bg-white px-5 md:px-8 md:pb-8 dark:border-neutral-900 dark:bg-black">
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
            <ViewTransition className="py-10 px-5">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                    Gallery
                </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 relative">
                    {[
                        "/gallery1.png",
                        "/gallery2.png",
                        "/gallery3.png",
                        "/gallery4.png",
                        "/gallery5.png",
                        "/gallery-6.png",
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="relative hover:bg-neutral-100 dark:hover:bg-neutral-900 flex flex-col z-10 overflow-hidden rounded-sm border border-neutral-100 shadow-input dark:border-neutral-900 transition-all p-2"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-md">
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </ViewTransition>

        </Container>
    );
}
