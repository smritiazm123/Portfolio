import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose, AiOutlineExport } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectSiteModal({ project, onClose }) {
  const closeRef = useRef(null);
  const titleId = "project-site-modal-title";

  useEffect(() => {
    if (!project) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const url = project.demoLink;
  let host = url;
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    /* keep url */
  }

  return createPortal(
    <div
      className="project-site-modal-root"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="project-site-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="project-site-chrome">
          <div className="project-site-chrome-left">
            <span className="project-site-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <div className="project-site-url" title={url}>
              <CgWebsite aria-hidden="true" />
              <span>{host}</span>
            </div>
          </div>
          <div className="project-site-chrome-actions">
            {project.secondaryLink && (
              <a
                className="project-site-tool"
                href={project.secondaryLink}
                target="_blank"
                rel="noreferrer"
              >
                {project.secondaryLabel || "App login"}
              </a>
            )}
            <a
              className="project-site-tool"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineExport aria-hidden="true" />
              New tab
            </a>
            <button
              ref={closeRef}
              type="button"
              className="project-site-close"
              onClick={onClose}
              aria-label="Close preview"
            >
              <AiOutlineClose />
            </button>
          </div>
        </header>

        <div className="project-site-frame-wrap">
          <iframe
            key={url}
            className="project-site-frame"
            src={url}
            title={`${project.title} live site`}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen; clipboard-read; clipboard-write"
          />
          <div className="project-site-note">
            <p id={titleId}>
              Exploring <strong>{project.title}</strong> inside this window. If
              the site blocks embedding, use{" "}
              <a href={url} target="_blank" rel="noreferrer">
                New tab
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectSiteModal;
