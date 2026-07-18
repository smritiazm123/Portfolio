import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { PROJECT_LINKS } from "../../data/projectLinks";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = width > 1100 ? 1.35 : width > 786 ? 1.05 : width > 500 ? 0.72 : 0.52;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container className="resume-wrap">
        <div className="resume-hero">
          <p className="section-eyebrow">Curriculum Vitae</p>
          <h1 className="section-title resume-page-title">
            Smriti Yadav —{" "}
            <span className="purple">Senior Software Engineer</span>
          </h1>
          <p className="resume-lead">
            Grew from Junior Software Engineer → Software Engineer → Senior
            Software Engineer at Spectacom. 3+ years building React and Next.js
            products with TypeScript, GraphQL, and Apollo.
          </p>

          <div className="resume-meta">
            <a href="mailto:smritiazm123@gmail.com">
              <HiOutlineMail /> smritiazm123@gmail.com
            </a>
            <span>
              <HiOutlineLocationMarker /> Gurugram, India
            </span>
            <a
              href="https://www.linkedin.com/in/smriti-yadav-973a73218"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              href="https://github.com/smritiazm123"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="resume-actions">
            <a className="hero-btn hero-btn-primary" href={pdf} download>
              <AiOutlineDownload /> Download CV
            </a>
            <a
              className="hero-btn hero-btn-ghost"
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineEye /> Open PDF
            </a>
          </div>
        </div>

        <Row className="resume-highlights">
          <Col md={4}>
            <article className="resume-highlight">
              <span>01</span>
              <h3>Junior Software Engineer</h3>
              <p>Spectacom Global · started here</p>
            </article>
          </Col>
          <Col md={4}>
            <article className="resume-highlight">
              <span>02</span>
              <h3>Software Engineer</h3>
              <p>Spectacom Global · grew ownership</p>
            </article>
          </Col>
          <Col md={4}>
            <article className="resume-highlight is-current-highlight">
              <span>03</span>
              <h3>Senior Software Engineer</h3>
              <p>Spectacom Global · current role</p>
            </article>
          </Col>
        </Row>

        <div className="resume-links-strip" aria-label="Work links">
          <span className="resume-links-label">Work live at</span>
          <a href={PROJECT_LINKS.getMyBib} target="_blank" rel="noreferrer">
            GetMyBib
          </a>
          <a
            href={PROJECT_LINKS.masterDashboard}
            target="_blank"
            rel="noreferrer"
          >
            MasterDashboard
          </a>
          <a href={PROJECT_LINKS.snapdme} target="_blank" rel="noreferrer">
            Snapdme
          </a>
          <a href={PROJECT_LINKS.hrms} target="_blank" rel="noreferrer">
            HRMS
          </a>
          <a href={PROJECT_LINKS.yoddhaRace} target="_blank" rel="noreferrer">
            Yoddha Race
          </a>
          <a href={PROJECT_LINKS.devilCircuit} target="_blank" rel="noreferrer">
            Devils Circuit
          </a>
          <a href={PROJECT_LINKS.spectacom} target="_blank" rel="noreferrer">
            Spectacom
          </a>
        </div>

        <div className="resume-viewer">
          <div className="resume-viewer-chrome">
            <div className="resume-viewer-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="resume-viewer-title">resume.pdf</p>
            {numPages > 1 && (
              <div className="resume-pager">
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                >
                  Prev
                </button>
                <span>
                  {pageNumber} / {numPages}
                </span>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={() =>
                    setPageNumber((p) => Math.min(numPages, p + 1))
                  }
                >
                  Next
                </button>
              </div>
            )}
          </div>
          <div className="resume-canvas">
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              loading={<div className="resume-loading">Loading resume…</div>}
              onLoadSuccess={({ numPages: n }) => {
                setNumPages(n);
                setPageNumber(1);
              }}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </div>

        <div className="resume-actions resume-actions-bottom">
          <a className="hero-btn hero-btn-primary" href={pdf} download>
            <AiOutlineDownload /> Download CV
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default ResumeNew;
