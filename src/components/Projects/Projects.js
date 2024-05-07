import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getmybib from '../../Assets/Projects/getmybib.png';
import master from '../../Assets/Projects/master.png';
import devil_circuit from '../../Assets/Projects/devil_circuit.png';
import yoddha from '../../Assets/Projects/yoddharace.png';
import snapd from '../../Assets/Projects/snapd.png';

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
              imgPath={getmybib}
              isBlog={false}
              title="GETMYBIB"
              description="GetMyBib is a ticketing platform with two flows: the user flow, where users can find events and purchase tickets, and the organizer flow, where organizers can create events and access a dashboard for their organization."
              demoLink="https://getmybib.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={master}
              title="MasterDashboard"
              description="The MasterDashboard serves as the Super Admin of GETMYBIB, providing complete details of all organizers including payouts, event onboarding, active events, etc."
              demoLink="https://backoffice.bunkerfit.com/signin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={yoddha}
              title="The Yoddha Race"
              description="It's a static website where we can find complete information about `The Yoddha Race` and register directly for the race, which will redirect to GetMyBib as the events are created there."
              demoLink="https://www.theyoddharace.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={devil_circuit}
              title="Devil Circuit"
              description="Devil Circuit is an obstacle race. This website contains all the information regarding its obstacles, seasons, and cities. Users can register directly for the events from this website and then jump onto GetMyBib."
              demoLink="https://www.devilscircuit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={snapd}
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
