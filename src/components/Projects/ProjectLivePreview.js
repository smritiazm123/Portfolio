import React, { useEffect, useRef, useState } from "react";

/** Loads an iframe only when the card media is near the viewport. */
function ProjectLivePreview({ url }) {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node || !url) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [url]);

  return (
    <div ref={wrapRef} className="project-card-iframe-scale" aria-hidden="true">
      {active && (
        <iframe
          src={url}
          title="Live site preview"
          tabIndex={-1}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

export default ProjectLivePreview;
