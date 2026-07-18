import React from "react";

const steps = [
  {
    role: "Junior Software Engineer",
    note: "Started here — building features, learning the stack, shipping UI with the team.",
  },
  {
    role: "Software Engineer",
    note: "Owned larger modules across GetMyBib, dashboards, and production releases.",
  },
  {
    role: "Senior Software Engineer",
    note: "Current role — leading frontend systems, performance, accessibility, and delivery.",
    current: true,
  },
];

function CareerJourney({ compact = false }) {
  return (
    <section className={`career-journey ${compact ? "is-compact" : ""}`}>
      {!compact && (
        <>
          <p className="section-eyebrow">My journey</p>
          <h2 className="section-title section-title-center">
            Growing into senior
          </h2>
          <p className="section-lead">
            At Spectacom Global I’ve grown from Junior Software Engineer to
            Senior Software Engineer — same company, bigger ownership.
          </p>
        </>
      )}
      <ol className="career-track">
        {steps.map((step, i) => (
          <li
            key={step.role}
            className={`career-step ${step.current ? "is-current" : ""}`}
          >
            <div className="career-step-marker" aria-hidden="true">
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="career-step-body">
              <div className="career-step-top">
                <h3>{step.role}</h3>
                {step.current && <em className="career-now">Current</em>}
              </div>
              <p>{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="career-company">
        Spectacom Global Private Limited · Gurugram · Feb 2023 – Present
      </p>
    </section>
  );
}

export default CareerJourney;
