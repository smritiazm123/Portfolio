import React, { useEffect, useRef } from "react";

function Scene3D() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        scene.style.setProperty("--mx", x.toFixed(3));
        scene.style.setProperty("--my", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="scene-3d" ref={sceneRef} aria-hidden="true">
      <div className="scene-3d-layer scene-3d-back">
        <span className="shape shape-ring" />
        <span className="shape shape-orb shape-orb-a" />
      </div>
      <div className="scene-3d-layer scene-3d-mid">
        <span className="shape shape-cube" />
        <span className="shape shape-slab" />
      </div>
      <div className="scene-3d-layer scene-3d-front">
        <span className="shape shape-orb shape-orb-b" />
        <span className="shape shape-prism" />
      </div>
    </div>
  );
}

export default Scene3D;
