import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import CareerJourney from "../CareerJourney";
import Tilt3D from "../Tilt3D";
import Reveal from "../Reveal";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Reveal>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know who <strong className="purple">I am</strong>
              </h1>
              <Aboutcard />
            </Reveal>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt3D maxTilt={12} scale={1.04}>
              <img src={laptopImg} alt="about" className="img-fluid about-3d-img" />
            </Tilt3D>
          </Col>
        </Row>

        <Reveal>
          <CareerJourney />
        </Reveal>

        <h1 className="project-heading">Experience</h1>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-meta">
              <h3>Senior Software Engineer · Spectacom Global</h3>
              <span>Feb 2023 – Present · Gurugram</span>
            </div>
            <p>
              Grew from Junior Software Engineer → Software Engineer → Senior
              Software Engineer. Own frontend for GetMyBib, MasterDashboard,
              Snapdme, and HRMS — reusable Next.js/React systems, GraphQL +
              Apollo, performance (LCP 4.1s → 1.6s), WCAG 2.1 AA, and
              Cloudflare CI/CD.
            </p>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <h3>Intern · Frontend Engineer · Refactor Academy</h3>
              <span>Jul 2022 – Jan 2023 · Bengaluru</span>
            </div>
            <p>
              Shipped 10+ responsive React apps with Lighthouse mobile scores
              above 90, fixed 40+ UI issues, and strengthened component testing
              across browsers.
            </p>
          </article>
        </div>

        <h1 className="project-heading">
          Professional <strong className="purple">skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
