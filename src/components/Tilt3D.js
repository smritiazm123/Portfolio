import React, { useRef } from "react";

function Tilt3D({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const frame = useRef(0);

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    if (glare) {
      node.style.setProperty("--glare-x", "50%");
      node.style.setProperty("--glare-y", "50%");
      node.style.setProperty("--glare-opacity", "0");
    }
  };

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - y) * maxTilt * 2;

      node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glare) {
        node.style.setProperty("--glare-x", `${x * 100}%`);
        node.style.setProperty("--glare-y", `${y * 100}%`);
        node.style.setProperty("--glare-opacity", "0.55");
      }
    });
  };

  return (
    <Tag
      ref={ref}
      className={`tilt-3d ${glare ? "tilt-3d-glare" : ""} ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </Tag>
  );
}

export default Tilt3D;
