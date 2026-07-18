import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiSass } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCsswizardry,
  SiGithub,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiTypescript,
  SiVite,
  SiGraphql,
  SiApollographql,
  SiJest,
  SiCypress,
  SiStorybook,
  SiCloudflare,
  SiNextdotjs,
} from "react-icons/si";
import "./Techstack.css";

function Techstack() {
  const skills = [
    { icon: <DiReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <SiGraphql />, label: "GraphQL" },
    { icon: <SiApollographql />, label: "Apollo" },
    { icon: <SiRedux />, label: "Redux Toolkit" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { icon: <DiSass />, label: "SCSS" },
    { icon: <SiMui />, label: "Material UI" },
    { icon: <TiHtml5 />, label: "HTML5" },
    { icon: <SiCsswizardry />, label: "CSS3" },
    { icon: <SiVite />, label: "Vite" },
    { icon: <SiJest />, label: "Jest" },
    { icon: <SiCypress />, label: "Cypress" },
    { icon: <SiStorybook />, label: "Storybook" },
    { icon: <SiCloudflare />, label: "Cloudflare" },
    { icon: <SiGithub />, label: "GitHub" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={4} md={2} className="tech-icons" key={skill.label}>
          <div className="tech-icon-container">
            {skill.icon}
            <p className="tech-label">{skill.label}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
