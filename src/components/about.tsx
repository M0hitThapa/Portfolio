import Container from "./container";

export const About = () => {
  return (
    <Container className="flex flex-col items-start justify-start px-5 pt-4">
      <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        About
      </h1>
      <p className="w-auto pt-2 pr-5 text-sm/7 text-neutral-700 md:text-base/7 dark:text-neutral-300">
        I am a{" "}
        <span className="font-bold tracking-normal text-neutral-950 text-shadow-2xs dark:text-neutral-100">
          FULL-STACK DEVELOPER{" "}
        </span>
        with a passion for designing great web experience with code. Helping
        myself to improve daily by learning new things daily. Always ahead to
        learn and get into new things.
      </p>
    </Container>
  );
};
