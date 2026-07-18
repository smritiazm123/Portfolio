import { useEffect } from "react";

function useMagneticButtons() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return undefined;

    const onMove = (event) => {
      const btn = event.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty("--btn-x", `${x}%`);
      btn.style.setProperty("--btn-y", `${y}%`);
    };

    const buttons = Array.from(document.querySelectorAll(".magnetic-btn"));
    buttons.forEach((btn) => btn.addEventListener("pointermove", onMove));
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("pointermove", onMove));
    };
  }, []);
}

export default useMagneticButtons;
