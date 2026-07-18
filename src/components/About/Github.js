import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">code</strong>
      </h1>
      <p style={{ color: "var(--mist-muted)", maxWidth: 520, textAlign: "center" }}>
        Consistently shipping frontend at Spectacom — explore my open work on{" "}
        <a
          href="https://github.com/smritiazm123"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          GitHub
        </a>{" "}
        or connect on{" "}
        <a
          href="https://www.linkedin.com/in/smriti-yadav-973a73218"
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          LinkedIn
        </a>
        .
      </p>
    </Row>
  );
}

export default Github;
