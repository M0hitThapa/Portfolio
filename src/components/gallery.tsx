import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
    return (
        <Container className="pt-10 pb-5">
            <h2 className="px-5 pb-3 text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
                Gallery
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-5 relative">
                {[
                    "/gallery1.png",
                    "/gallery2.png",
                    "/gallery3.png",
                    "/gallery4.png",
                ].map((src, index) => (
                    <div
                        key={index}
                        className="relative hover:bg-neutral-100 dark:hover:bg-neutral-900 flex flex-col z-10 overflow-hidden rounded-sm border border-neutral-100 shadow-input dark:border-neutral-900 transition-all p-2"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-md">
                            <Image
                                src={src}
                                alt={`Gallery Preview ${index + 1}`}
                                fill
                                className="object-cover object-top transition-transform duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
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