import { useEffect } from "react";

/** Soft ambient glow that follows the pointer (no text zoom). */
function CursorGlow() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return undefined;

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        glow.classList.add("is-on");
      });
    };

    const onLeave = () => glow.classList.remove("is-on");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      glow.remove();
    };
  }, []);

  return null;
}

export default CursorGlow;
