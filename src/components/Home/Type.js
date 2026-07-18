import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "React · Next.js · TypeScript",
          "Junior → Mid → Senior journey",
          "Performance · Accessibility · CI/CD",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 28,
        delay: 38,
      }}
    />
  );
}

export default Type;
