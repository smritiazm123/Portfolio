import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { SiMui } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMui />
      </Col>

    </Row>
  );
}

export default Techstack;
