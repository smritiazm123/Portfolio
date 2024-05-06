import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GETMYBIB"
              description="GetMyBib is a ticketing platform with two flows: the user flow, where users can find events and purchase tickets, and the organizer flow, where organizers can create events and access a dashboard for their organization."
              demoLink="https://getmybib.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MasterDashboard"
              description="The MasterDashboard serves as the Super Admin of GETMYBIB, providing complete details of all organizers including payouts, event onboarding, active events, etc."
              demoLink="https://backoffice.bunkerfit.com/signin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The Yoddha Race"
              description="It's a static website where we can find complete information about `The Yoddha Race` and register directly for the race, which will redirect to GetMyBib as the events are created there."
              demoLink="https://www.theyoddharace.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Devil Circuit"
              description="Devil Circuit is an obstacle race. This website contains all the information regarding its obstacles, seasons, and cities. Users can register directly for the events from this website and then jump onto GetMyBib."
              demoLink="https://www.devilscircuit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Snapd"
              description="A website where photographers can create albums, upload all the photos, and share the link with users. Users can directly click a selfie to upload it and get all the photos where they appear, which they can then download."
              demoLink="https://snapd.me/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
