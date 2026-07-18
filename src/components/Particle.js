import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#ff6b4a", "#ffc857", "#ffb088"],
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.08,
          },
          size: {
            value: 1.4,
          },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.08,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
