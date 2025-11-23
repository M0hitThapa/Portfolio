import Container from "./container";

export const About = () => {
  return (
    <Container className="flex flex-col items-start justify-start px-5 pt-4">
      <h1 className="font-title text-lg font-bold tracking-tight text-black text-shadow-md md:text-2xl dark:text-white">
        About
      </h1>
      <p className="w-auto pt-2 pr-5 text-sm/7 text-neutral-600 md:text-base/7 dark:text-neutral-400">
        I am a{" "}
        <span className="font-title font-black tracking-wider text-neutral-950 text-shadow-2xs dark:text-neutral-100">
          FULL-STACK DEVELOPER{" "}
        </span>
        with a passion for designing great web experience with code. Helping
        myself to improve daily by learning new things daily. Always ahead to
        learn and get into new things.
      </p>
    </Container>
  );
};
