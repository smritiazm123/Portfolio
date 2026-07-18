import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return undefined;

    document.documentElement.classList.add("has-custom-cursor");

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;

      const under = document.elementFromPoint(x, y);
      const interactive = under?.closest(
        "a, button, .tilt-3d, .theme-toggle, .cmd-launcher, .cmd-item, .hero-btn, .nav-link"
      );
      document.documentElement.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const onLeave = () => {
      document.documentElement.classList.remove("cursor-hover");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor", "cursor-hover");
      document.querySelectorAll(".text-zoom-hot").forEach((el) => {
        el.classList.remove("text-zoom-hot");
      });
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}

export default CustomCursor;
