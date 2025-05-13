import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
  "Software Engineer",
  "Frontend Developer",
  "React.js Enthusiast",
  "UI/UX Developer",
  "Clean Code Advocate",
  "Tech Explorer",
  "Problem Solver"
],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
