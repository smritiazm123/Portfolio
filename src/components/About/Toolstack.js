import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiJira,
  SiWebpack,
  SiGithubactions,
} from "react-icons/si";
import { FaFigma, FaDiscord } from "react-icons/fa";
import "./Techstack.css";

function Toolstack() {
  const tools = [
    { icon: <FaFigma />, label: "Figma" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiGithubactions />, label: "GitHub Actions" },
    { icon: <SiWebpack />, label: "Webpack" },
    { icon: <SiJira />, label: "Jira" },
    { icon: <SiSlack />, label: "Slack" },
    { icon: <FaDiscord />, label: "Discord" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.label}>
          <div className="tech-icon-container">
            {tool.icon}
            <p className="tech-label">{tool.label}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
