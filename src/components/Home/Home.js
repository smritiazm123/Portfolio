import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Scene3D from "../Scene3D";
import useMagneticButtons from "../../hooks/useMagneticButtons";

function Home() {
  const sectionRef = useRef(null);
  const atmosphereRef = useRef(null);
  const contentRef = useRef(null);
  const orbRef = useRef(null);
  const gridRef = useRef(null);
  const stageRef = useRef(null);
  useMagneticButtons();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (atmosphereRef.current) {
          atmosphereRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(1.06)`;
        }
        if (gridRef.current) {
          gridRef.current.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
          contentRef.current.style.opacity = String(
            Math.max(0.5, 1 - y / (window.innerHeight * 1.6))
          );
        }
        if (orbRef.current) {
          orbRef.current.style.transform = `translate3d(${y * 0.06}px, ${
            y * -0.16
          }px, 0)`;
        }
        if (stageRef.current) {
          stageRef.current.style.transform = `translate3d(0, ${y * -0.04}px, 0) rotate(${
            y * 0.008
          }deg)`;
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
    <section className="home-page" ref={sectionRef}>
      <Container fluid className="home-section" id="home">
        <div className="hero-atmosphere" ref={atmosphereRef} aria-hidden="true" />
        <div className="hero-grid" ref={gridRef} aria-hidden="true" />
        <div className="hero-orb" ref={orbRef} aria-hidden="true" />
        <Scene3D />
        <div className="hero-watermark" aria-hidden="true">
          SSE
        </div>
        <div className="hero-orbit" aria-hidden="true" ref={stageRef}>
          <span />
        </div>
        <Particle />
        <Container className="home-content" ref={contentRef}>
          <Row className="align-items-center hero-row hero-row-cool">
            <Col lg={7} className="home-header">
              <div className="hero-terminal">
                <span className="hero-terminal-dot" />
                <code className="hero-terminal-full">
                  smriti@spectacom:<span>~</span>$ whoami
                </code>
                <code className="hero-terminal-short">
                  whoami
                </code>
                <em>
                  senior-software-engineer
                  <i className="hero-caret" aria-hidden="true" />
                </em>
              </div>

              <p className="hero-eyebrow-line">
                <span>Available</span>
                <span>Gurugram</span>
                <span>2026</span>
              </p>

              <h1 className="hero-brand hero-brand-xl" aria-label="Smriti Yadav">
                <span className="hero-name-row">
                  {"Smriti".split("").map((ch, i) => (
                    <span
                      key={`s-${ch}-${i}`}
                      className="hero-letter"
                      style={{ "--i": i }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
                <span className="hero-name-row hero-name-row-last">
                  {"Yadav".split("").map((ch, i) => (
                    <span
                      key={`y-${ch}-${i}`}
                      className="hero-letter hero-letter-accent"
                      style={{ "--i": i + 6 }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </h1>

              <p className="hero-support hero-support-simple">
                Frontend systems that survive production — React, Next.js,
                GraphQL, performance, a11y.
              </p>

              <div className="hero-actions">
                <Link to="/project" className="hero-btn hero-btn-primary magnetic-btn">
                  <span>Inspect work</span>
                  <span className="hero-btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/resume" className="hero-btn hero-btn-ghost magnetic-btn">
                  Resume.pdf
                </Link>
                <button
                  type="button"
                  className="hero-btn hero-btn-ghost magnetic-btn hero-cmd-btn"
                  onClick={() =>
                    window.dispatchEvent(new Event("open-command-palette"))
                  }
                >
                  ⌘K command
                </button>
              </div>

              <ul className="hero-metrics-mobile" aria-label="Key outcomes">
                <li>
                  <strong>1.6s</strong>
                  <span>LCP</span>
                </li>
                <li>
                  <strong>3+</strong>
                  <span>yrs</span>
                </li>
                <li>
                  <strong>10k+</strong>
                  <span>users</span>
                </li>
                <li>
                  <strong>AA</strong>
                  <span>a11y</span>
                </li>
              </ul>
            </Col>

            <Col lg={5} className="hero-side-cool d-none d-lg-flex">
              <div className="hero-glass">
                <div className="hero-glass-top">
                  <span className="hero-glass-live">Live outcomes</span>
                  <span className="hero-glass-ver">v2026.1</span>
                </div>
                <ul className="hero-metrics hero-metrics-stack" aria-label="Key outcomes">
                  <li>
                    <strong>4.1s → 1.6s</strong>
                    <span>Largest Contentful Paint</span>
                  </li>
                  <li>
                    <strong>3+ years</strong>
                    <span>Shipping production UI</span>
                  </li>
                  <li>
                    <strong>10k+ users</strong>
                    <span>Ticketing & event platforms</span>
                  </li>
                  <li>
                    <strong>WCAG 2.1 AA</strong>
                    <span>Accessibility by default</span>
                  </li>
                </ul>
                <div className="hero-glass-foot">
                  <span>Spectacom Global</span>
                  <span className="hero-glass-bar" aria-hidden="true" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span />
          scroll / story
        </div>
      </Container>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {[
                "React",
                "Next.js",
                "TypeScript",
                "GraphQL",
                "Apollo",
                "TanStack Query",
                "WCAG 2.1 AA",
                "Cloudflare",
                "Performance",
                "CI/CD",
              ].map((item) => (
                <span key={`${copy}-${item}`}>
                  {item} <i>*</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
