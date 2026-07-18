import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import CareerJourney from "../CareerJourney";
import Reveal from "../Reveal";
import Tilt3D from "../Tilt3D";
import { PROJECT_LINKS } from "../../data/projectLinks";


const impactProjects = [
  {
    id: "01",
    title: "GetMyBib",
    tag: "Ticketing",
    href: PROJECT_LINKS.getMyBib,
    blurb:
      "Live ticket management and check-in (QR, webcam, Maps) for 10,000+ attendees. Formik/Yup forms handling 5,000+ daily submissions with 60% fewer validation errors.",
    stat: "10k+",
    statLabel: "attendees served",
    accent: "teal",
  },
  {
    id: "02",
    title: "MasterDashboard",
    tag: "Analytics",
    href: PROJECT_LINKS.masterDashboard,
    blurb:
      "Role-based analytics for 5 user types, virtualized tables for 50,000+ rows, and dashboard delivery cut from 3 days to 6 hours with TanStack Query and Highcharts.",
    stat: "3d → 6h",
    statLabel: "dashboard delivery",
    accent: "amber",
  },
  {
    id: "03",
    title: "Snapdme v2",
    tag: "Facial recognition",
    href: PROJECT_LINKS.snapdme,
    secondaryHref: PROJECT_LINKS.snapdmeOrganizer,
    blurb:
      "Led the Next.js + TypeScript rebuild in 11 weeks. Chunked uploads brought average upload time from 22s to 8s, with selfie-based photo discovery.",
    stat: "22s → 8s",
    statLabel: "upload time",
    accent: "coral",
  },
  {
    id: "04",
    title: "HRMS",
    tag: "Internal tools",
    href: PROJECT_LINKS.hrms,
    blurb:
      "Leave, Reimbursement, and RBAC modules for 50+ employees — plus 12+ reusable hooks shared across internal projects.",
    stat: "12+",
    statLabel: "shared hooks",
    accent: "teal",
  },
];

function Home2() {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const avatarRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight - rect.top) /
              (window.innerHeight + rect.height)
          )
        );
        const offset = (progress - 0.5) * 56;

        if (copyRef.current) {
          copyRef.current.style.transform = `translate3d(0, ${offset * 0.28}px, 0)`;
        }
        if (avatarRef.current) {
          avatarRef.current.style.transform = `translate3d(0, ${
            -offset * 0.42
          }px, 0)`;
        }
        if (socialRef.current) {
          socialRef.current.style.transform = `translate3d(0, ${offset * 0.15}px, 0)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" ref={sectionRef}>
      <div className="about-parallax-glow" aria-hidden="true" />
      <Container>
        <Row className="align-items-center intro-row">
          <Col md={7} className="home-about-description" ref={copyRef}>
            <p className="section-eyebrow">Chapter 01 · About</p>
            <h2 className="section-title">
              Interfaces with <span className="title-scribble">soul</span>
              <br />
              and systems with <span className="purple">spine</span>
            </h2>
            <p className="home-about-body">
              I’m a <strong>Senior Software Engineer</strong> at{" "}
              <strong>Spectacom Global Private Limited</strong> in Gurugram.
              I started as a Junior Software Engineer, stepped up to Software
              Engineer, and now own frontend systems end to end — from first
              layout to production deploy.
            </p>
            <p className="home-about-body">
              Before that, I interned at Refactor Academy in Bengaluru, where I
              shipped responsive React apps, fixed cross-browser UI issues, and
              learned to treat testing and polish as part of delivery — not an
              afterthought.
            </p>
            <p className="home-about-body">
              I graduated with a B.Sc. (Hons) in Computer Science from Shyama
              Prasad Mukherjee College, Delhi University (2019–2022). Outside
              work you’ll usually find me outdoors, travelling, singing, or
              dancing.
            </p>
            <Link to="/about" className="inline-link">
              Full story on the About page →
            </Link>
          </Col>
          <Col md={5} className="myAvtar" ref={avatarRef}>
            <Tilt
              glareEnable
              glareMaxOpacity={0.18}
              glareColor="#5ecfc0"
              scale={1.03}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={1200}
            >
              <div className="avatar-frame">
                <img
                  src={myImg}
                  className="img-fluid avatar-img"
                  alt="Smriti Yadav"
                />
              </div>
            </Tilt>
          </Col>
        </Row>

        <div id="journey">
          <Reveal>
            <CareerJourney />
          </Reveal>
        </div>

        <section className="home-block craft-block" id="craft">
          <Reveal>
            <div className="section-head">
              <p className="section-eyebrow">Chapter 02 · Craft</p>
              <h2 className="section-title">Four things I never skip</h2>
              <p className="section-lead">
                The habits behind faster pages, calmer releases, and UI that holds
                up in production — not just in a Figma file.
              </p>
            </div>
          </Reveal>
          <div className="craft-grid">
            <Reveal delay={40} className="craft-reveal">
              <Tilt3D as="article" className="craft-item" maxTilt={8}>
                <div className="craft-top">
                  <span className="pillar-num">01</span>
                  <span className="craft-metric">4.1s → 1.6s LCP</span>
                </div>
                <h3>Performance</h3>
                <p>
                  Lazy loading, memoization, image strategy, and route-level code
                  splitting across 200+ routes — so users feel the speed before
                  they notice the UI.
                </p>
              </Tilt3D>
            </Reveal>
            <Reveal delay={100} className="craft-reveal">
              <Tilt3D as="article" className="craft-item" maxTilt={8}>
                <div className="craft-top">
                  <span className="pillar-num">02</span>
                  <span className="craft-metric">WCAG 2.1 AA</span>
                </div>
                <h3>Accessibility</h3>
                <p>
                  Semantic HTML and thoughtful ARIA by default — interfaces that
                  work for more people, keyboard-first, screen-reader friendly,
                  and still beautiful.
                </p>
              </Tilt3D>
            </Reveal>
            <Reveal delay={160} className="craft-reveal">
              <Tilt3D as="article" className="craft-item" maxTilt={8}>
                <div className="craft-top">
                  <span className="pillar-num">03</span>
                  <span className="craft-metric">40% faster delivery</span>
                </div>
                <h3>Component systems</h3>
                <p>
                  25+ reusable Next.js and React pieces across 15+ event flows,
                  plus shared hooks the whole team can pick up without reinventing
                  the wheel.
                </p>
              </Tilt3D>
            </Reveal>
            <Reveal delay={220} className="craft-reveal">
              <Tilt3D as="article" className="craft-item" maxTilt={8}>
                <div className="craft-top">
                  <span className="pillar-num">04</span>
                  <span className="craft-metric">45m → 8m releases</span>
                </div>
                <h3>Delivery</h3>
                <p>
                  GitHub Actions and Cloudflare Pages pipelines that keep shipping
                  calm — fewer late-night deploys, more predictable launches.
                </p>
              </Tilt3D>
            </Reveal>
          </div>
        </section>

        <section className="home-block impact-block" id="impact">
          <div className="section-head">
            <p className="section-eyebrow">Chapter 03 · Impact</p>
            <h2 className="section-title">
              Wins that made it to{" "}
              <span className="title-scribble">production</span>
            </h2>
            <p className="section-lead">
              Production work with measurable outcomes — open any site from the
              card.
            </p>
          </div>

          <div className="impact-bento">
            <Tilt3D className="impact-reveal" maxTilt={7} scale={1.015}>
              <a
                className="impact-tile impact-tile-hero"
                href={impactProjects[0].href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="impact-tile-body">
                  <div className="impact-meta">
                    <span className="impact-index">01</span>
                    <span className="impact-tag">{impactProjects[0].tag}</span>
                    <span className="impact-live">Live</span>
                  </div>
                  <h3>{impactProjects[0].title}</h3>
                  <p>{impactProjects[0].blurb}</p>
                  <div className="impact-tile-foot">
                    <div className="impact-stat">
                      <strong>{impactProjects[0].stat}</strong>
                      <span>{impactProjects[0].statLabel}</span>
                    </div>
                    <span className="impact-link">Open site →</span>
                  </div>
                </div>
              </a>
            </Tilt3D>

            {impactProjects.slice(1, 3).map((project) => (
              <Tilt3D
                key={project.id}
                className="impact-reveal"
                maxTilt={8}
                scale={1.02}
              >
                <div className="impact-tile impact-tile-mid">
                  <div className="impact-tile-body">
                    <div className="impact-meta">
                      <span className="impact-index">{project.id}</span>
                      <span className="impact-tag">{project.tag}</span>
                      <span className="impact-live">Live</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.blurb}</p>
                    <div className="impact-tile-foot">
                      <div className="impact-stat">
                        <strong>{project.stat}</strong>
                        <span>{project.statLabel}</span>
                      </div>
                    </div>
                    <div className="impact-link-row">
                      <a
                        className="impact-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open site →
                      </a>
                      {project.secondaryHref && (
                        <a
                          className="impact-link impact-link-secondary"
                          href={project.secondaryHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Organizer login →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt3D>
            ))}

            <Tilt3D
              className="impact-reveal impact-reveal-wide"
              maxTilt={6}
              scale={1.01}
            >
              <a
                href={PROJECT_LINKS.hrms}
                target="_blank"
                rel="noreferrer"
                className="impact-tile impact-tile-wide"
              >
                <div className="impact-wide-copy">
                  <div className="impact-meta">
                    <span className="impact-index">04</span>
                    <span className="impact-tag">Internal tools</span>
                    <span className="impact-live">Live</span>
                  </div>
                  <h3>HRMS</h3>
                  <p>
                    Leave, Reimbursement, and RBAC for 50+ employees — plus 12+
                    reusable hooks shared across internal projects.
                  </p>
                </div>
                <div className="impact-wide-stat">
                  <strong>12+</strong>
                  <span>shared hooks shipped</span>
                  <em>Open hrms.spectacom.in →</em>
                </div>
              </a>
            </Tilt3D>
          </div>
        </section>

        <section className="home-block home-stack-block" id="toolkit">
          <div className="section-head">
            <p className="section-eyebrow">Chapter 04 · Toolkit</p>
            <h2 className="section-title">My weekly creative stack</h2>
          </div>
          <p className="home-stack-lead">
            TypeScript and JavaScript on React and Next.js. Data with GraphQL,
            Apollo Client, TanStack Query, and REST. Styling with Tailwind, SCSS,
            and Material UI. Quality with Jest, React Testing Library, Cypress,
            and Storybook. Shipping with GitHub Actions, Vite, Webpack, and
            Cloudflare.
          </p>
          <div className="stack-chips" aria-label="Core technologies">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "GraphQL",
              "Apollo",
              "TanStack Query",
              "Redux Toolkit",
              "Tailwind",
              "SCSS",
              "Jest",
              "Cypress",
              "Cloudflare",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <Row>
          <Col md={12} className="home-about-social" ref={socialRef}>
            <h2 className="social-heading">
              Let’s build something <span className="purple">worth opening</span>
            </h2>
            <p className="social-copy">
              Open to frontend roles, collaborations, and thoughtful product
              conversations. Reach me at{" "}
              <a className="inline-link" href="mailto:smritiazm123@gmail.com">
                smritiazm123@gmail.com
              </a>{" "}
              or +91 63868 61474.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/smritiazm123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/smriti-yadav-973a73218"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/smritiazm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
