import { ContactForm } from "@/components/contact-form";
import Container from "@/components/container";
import { Scales } from "@/components/scales";

export default function Page() {
  return (
    <Container className="relative h-screen bg-white dark:bg-black">
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
        <h1>Contact Me</h1>
        <p>I am ready to work with you contact me</p>
        <ContactForm />
      </div>
    </Container>
  );
}
