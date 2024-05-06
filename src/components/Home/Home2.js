import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from '../../Assets/myImg.png';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

              I started programming during my 11th-grade year, and I fell in love with it because I consistently achieved top marks in my class. My interest stemmed from there. <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, CSS, HTML, React, NextJs, MUI etc. </b>
              </i>
              <br />
              <br />

              I have developed proficient skills in various aspects of software development, including writing comprehensive  <i><b className="purple">documentation</b></i>, adeptly solving  <i><b className="purple">bugs</b></i>, meticulously  <i><b className="purple">testing</b></i> the flow manually, and successfully  <i><b className="purple">deploying both fresh projects on existing servers and those already up and running</b></i>. My experience and expertise in these areas enable me to contribute effectively to project development and maintenance.







            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/312Smriti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/smriti-yadav-973a73218"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
