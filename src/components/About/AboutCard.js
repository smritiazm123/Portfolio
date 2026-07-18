import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi — I’m <span className="purple">Smriti Yadav</span>, a{" "}
            <span className="purple">Senior Software Engineer</span> (Frontend)
            based in <span className="purple">Gurugram</span>, currently at{" "}
            <span className="purple">Spectacom Global Private Limited</span>.
            <br />
            <br />
            I started as a <span className="purple">Junior Software Engineer</span>,
            grew into a <span className="purple">Software Engineer</span>, and
            now lead as a <span className="purple">Senior Software Engineer</span>{" "}
            — with <span className="purple">3+ years</span> shipping React and
            Next.js apps using TypeScript, GraphQL, and Apollo Client.
            <br />
            <br />I hold a{" "}
            <span className="purple">B.Sc. (Hons) Computer Science</span> from{" "}
            <span className="purple">
              Shyama Prasad Mukherjee College, Delhi University
            </span>{" "}
            (2019–2022).
            <br />
            <br />
            Outside work: outdoors, singing, travelling, and dancing.
          </p>
          <p style={{ color: "var(--mist-muted)" }}>
            “Strive to build things that make a difference!”
          </p>
          <footer className="blockquote-footer">Smriti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
