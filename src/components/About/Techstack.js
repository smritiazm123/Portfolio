import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCsswizardry,
  SiGithub,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiTypescript,
  SiBootstrap,
  SiVite,
  SiVercel,
  SiJira,
  SiFigma,
  SiFirebase,
  SiNetlify
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import "./Techstack.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiReact className="react-icons-di" />
          <p className="tech-label">React</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <TbBrandNextjs className="react-icons-tb" />
          <p className="tech-label">Next.js</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiTypescript className="react-icons-si" />
          <p className="tech-label">TypeScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiRedux className="react-icons-si" />
          <p className="tech-label">Redux</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiJavascript1 className="react-icons-di" />
          <p className="tech-label">JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiTailwindcss />
          <p className="tech-label">Tailwind</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <TiHtml5 />
          <p className="tech-label">HTML5</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiCsswizardry />
          <p className="tech-label">CSS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiBootstrap />
          <p className="tech-label">Bootstrap</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiVite />
          <p className="tech-label">Vite</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiMui />
          <p className="tech-label">Material UI</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiSass />
          <p className="tech-label">Sass</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiVercel />
          <p className="tech-label">Vercel</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiGithub />
          <p className="tech-label">GitHub</p>
        </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiJira />
          <p className="tech-label">Jira</p>
        </div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiFigma />
          <p className="tech-label">Figma</p>
        </div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiFirebase />
          <p className="tech-label">Firebase</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiNetlify />
          <p className="tech-label">Netlify</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;