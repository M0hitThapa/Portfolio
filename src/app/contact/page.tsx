import { ContactForm } from "@/components/contact-form";
import Container from "@/components/container";
import { Scales } from "@/components/scales";

export default function Page() {
  return (
    <Container className="relative min-h-screen border-x border-gray-200 bg-white p-4 md:pt-10 md:pb-5 dark:border-neutral-900 dark:bg-black">
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
      <div className="relative px-8">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Contact Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 md:text-sm">
          Contact me through the way you are comfortable.
        </p>

        <ContactForm />
      </div>
    </Container>
  );
}
