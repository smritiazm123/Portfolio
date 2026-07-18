import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectSiteModal from "./ProjectSiteModal";
import Particle from "../Particle";
import { PROJECT_LINKS } from "../../data/projectLinks";
import Reveal from "../Reveal";
import getmybib from "../../Assets/Projects/getmybib.png";
import master from "../../Assets/Projects/master.png";
import snapd from "../../Assets/Projects/snapd.png";
import yoddha from "../../Assets/Projects/yoddharace.png";
import devil from "../../Assets/Projects/devil_circuit.png";
import hrms from "../../Assets/Projects/hrms.jpg";
import spectacom from "../../Assets/Projects/spectacom.jpg";

const projects = [
  {
    id: "01",
    title: "GetMyBib",
    tag: "Ticketing",
    stat: "10k+ attendees",
    imgPath: getmybib,
    demoLink: PROJECT_LINKS.getMyBib,
    description:
      "Ticketing platform with 25+ reusable Next.js/React components across 15+ event flows. Formik + Yup + GraphQL/REST for 5,000+ daily submissions; live check-in (QR, webcam, Maps) for 10,000+ attendees. Cut LCP 4.1s → 1.6s and Lighthouse SEO 68 → 95 with WCAG 2.1 AA.",
  },
  {
    id: "02",
    title: "MasterDashboard",
    tag: "Analytics",
    stat: "3d → 6h",
    imgPath: master,
    demoLink: PROJECT_LINKS.masterDashboard,
    description:
      "Analytics and ops dashboard at backoffice.getmybib.com — role-based access for 5 user types, GraphQL auth guards, TanStack Query + Highcharts, and virtualized tables for 50,000+ rows.",
  },
  {
    id: "03",
    title: "Snapdme",
    tag: "Photo AI",
    stat: "22s → 8s",
    imgPath: snapd,
    demoLink: PROJECT_LINKS.snapdme,
    secondaryLink: PROJECT_LINKS.snapdmeOrganizer,
    secondaryLabel: "Organizer login",
    description:
      "Led Snapdme v2 frontend in Next.js + TypeScript in 11 weeks. Chunked uploads with live previews (22s → 8s), selfie-based facial matching, and Cloudflare Pages releases (45 min → 8 min).",
  },
  {
    id: "04",
    title: "Spectacom HRMS",
    tag: "Internal",
    stat: "12+ hooks",
    imgPath: hrms,
    demoLink: PROJECT_LINKS.hrms,
    description:
      "Leave, Reimbursement, and RBAC modules streamlining HR for 50+ employees — GraphQL-powered dashboards for Admin, HR, Manager, and Employee roles with 12+ reusable hooks.",
  },
  {
    id: "05",
    title: "The Yoddha Race",
    tag: "Events",
    imgPath: yoddha,
    demoLink: PROJECT_LINKS.yoddhaRace,
    description:
      "India's ultimate fitness challenge site — race concept, cities, categories, and ticket purchase flowing into GetMyBib for registration and race-day ops.",
  },
  {
    id: "06",
    title: "Devils Circuit",
    tag: "Events",
    imgPath: devil,
    demoLink: PROJECT_LINKS.devilCircuit,
    description:
      "Asia's biggest obstacle race platform — 12 cities, obstacles, categories, and registration that hands off to GetMyBib for checkout and event ops.",
  },
  {
    id: "07",
    title: "Spectacom Global",
    tag: "Brand",
    imgPath: spectacom,
    demoLink: PROJECT_LINKS.spectacom,
    description:
      "Company site for Spectacom Global — Movement Meets Machine. Showcases events (Devils Circuit, Yoddha Race) and technology products (GetMyBib, Snapdme) built in India for the world.",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-shell">
        <Reveal>
          <header className="project-hero-head">
            <p className="project-eyebrow">Selected work · 07 builds</p>
            <h1 className="project-heading">
              Products that made it to{" "}
              <span className="title-scribble">production</span>
            </h1>
            <p className="project-lead">
              Live URLs rendered in each card — tap a preview to explore the
              site in a modal browser.
            </p>
          </header>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={60 + i * 40}
              className="project-grid-item"
            >
              <ProjectCard
                {...project}
                isBlog={false}
                index={project.id}
                onOpenSite={() => setActiveProject(project)}
              />
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectSiteModal project={activeProject} onClose={closeModal} />
    </Container>
  );
}

export default Projects;
