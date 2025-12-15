import Container from "./container";

export const About = () => {
  return (
    <Container className="flex flex-col items-start justify-start px-5 pt-4">
      <h1 className="text-lg font-semibold tracking-tight text-neutral-950 text-shadow-md md:text-2xl dark:text-neutral-100">
        About
      </h1>
      <p className="w-auto pt-2 pr-5 text-sm text-neutral-700 md:text-base/7 dark:text-neutral-300">
        {" "}
        I am a{" "}
        <span className="font-semibold tracking-normal text-neutral-900 text-shadow-2xs dark:text-neutral-200">
          {" "}
          Frontend Developer{" "}
        </span>{" "}
      passionate about creating great user experiences, with a solid foundation in  <span className="font-semibold tracking-normal text-neutral-900 text-shadow-2xs dark:text-neutral-200">
          {" "}
         backend development{" "}
        </span>{" "} and a commitment to continuous learning and modern technologies.
        
      </p>
    </Container>
  );
};

