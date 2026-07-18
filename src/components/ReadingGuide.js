import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HOME_CHAPTERS = [
  { id: "home", label: "Start here", hint: "Meet Smriti" },
  { id: "about", label: "Chapter 01", hint: "About & story" },
  { id: "journey", label: "Journey", hint: "Junior → Senior" },
  { id: "craft", label: "Chapter 02", hint: "Craft habits" },
  { id: "impact", label: "Chapter 03", hint: "Production wins" },
  { id: "toolkit", label: "Toolkit", hint: "Stack & hello" },
];

function ReadingGuide() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState(HOME_CHAPTERS[0]);
  const [visible, setVisible] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      setProgress(0);
      return;
    }

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const next = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
        setProgress(next);
        setVisible(window.scrollY > 120);

        let active = HOME_CHAPTERS[0];
        for (const item of HOME_CHAPTERS) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight * 0.38) {
            active = item;
          }
        }
        setChapter(active);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  if (!isHome) return null;

  return (
    <>
      <div
        className="read-progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      <aside
        className={`read-cue ${visible ? "is-visible" : ""}`}
        aria-live="polite"
      >
        <span className="read-cue-label">{chapter.label}</span>
        <strong className="read-cue-hint">{chapter.hint}</strong>
        <span className="read-cue-bar" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </span>
        <span className="read-cue-note">Take a beat · scroll the story</span>
      </aside>
    </>
  );
}

export default ReadingGuide;
