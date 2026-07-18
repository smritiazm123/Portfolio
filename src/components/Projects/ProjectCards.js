import React from "react";
import { CgWebsite } from "react-icons/cg";
import ProjectLivePreview from "./ProjectLivePreview";

function ProjectCards({
  title,
  description,
  imgPath,
  demoLink,
  secondaryLink,
  secondaryLabel,
  tag,
  index,
  stat,
  isBlog,
  onOpenSite,
}) {
  const openSite = () => {
    if (demoLink && onOpenSite) onOpenSite();
  };

  return (
    <article className="project-card-view">
      <button
        type="button"
        className="project-card-media"
        onClick={openSite}
        aria-label={`Preview ${title} live site`}
      >
        {imgPath && (
          <img
            src={imgPath}
            alt=""
            aria-hidden="true"
            className="project-card-fallback-img"
            loading="lazy"
          />
        )}
        {demoLink && <ProjectLivePreview url={demoLink} />}
        {!demoLink && !imgPath && (
          <div className="project-card-media-fallback">{title.slice(0, 2)}</div>
        )}
        <div className="project-card-media-shade" />
        <span className="project-card-live-cue">
          <span className="project-card-live-dot" />
          Live · tap to explore
        </span>
        {tag && <span className="project-card-chip">{tag}</span>}
        {index && <span className="project-card-index">{index}</span>}
      </button>

      <div className="project-card-body">
        <div className="project-card-head">
          <h3 className="project-card-title">{title}</h3>
          {stat && <span className="project-card-stat">{stat}</span>}
        </div>
        <p className="project-card-copy">{description}</p>

        <div className="project-card-actions">
          {!isBlog && demoLink && (
            <button
              type="button"
              className="project-btn project-btn-primary"
              onClick={openSite}
            >
              <CgWebsite aria-hidden="true" />
              Explore in modal
            </button>
          )}
          {secondaryLink && (
            <a
              className="project-btn project-btn-ghost"
              href={secondaryLink}
              target="_blank"
              rel="noreferrer"
            >
              {secondaryLabel || "App login"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
