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
<p>
  My journey in programming began in <i className="purple"><b>11th grade</b></i>, where I discovered a 
  <i className="purple"><b>passion for coding</b></i> that quickly translated into 
  <i className="purple"><b>academic success</b></i>. This early interest laid the foundation for my continued 
  <i className="purple"><b>growth in the field of software development</b></i>.

  <br /><br />
  I’m proficient in technologies such as 
  <i className="purple"><b> C++</b></i>, 
  <i className="purple"><b> JavaScript</b></i>, 
  <i className="purple"><b> HTML</b></i>, 
  <i className="purple"><b> CSS</b></i>, 
  <i className="purple"><b> React</b></i>, 
  <i className="purple"><b> Next.js</b></i>, 
  <i className="purple"><b> Tailwind</b></i>, and 
  <i className="purple"><b> Material UI</b></i>.

  <br /><br />
  Over the past few years, I have honed my skills in building 
  <i className="purple"><b> scalable</b></i> and 
  <i className="purple"><b> user-friendly web applications</b></i>. Beyond coding, I excel at 
  <i className="purple"><b> documenting technical processes</b></i>, 
  <i className="purple"><b> resolving bugs efficiently</b></i>, 
  <i className="purple"><b> conducting thorough manual testing</b></i>, and 
  <i className="purple"><b> deploying both new and existing projects</b></i> to production environments.

  <br /><br />
  I take pride in my ability to 
  <i className="purple"><b> adapt quickly</b></i>, 
  <i className="purple"><b> collaborate effectively within teams</b></i>, and 
  <i className="purple"><b> continuously learn new tools and frameworks</b></i> to deliver 
  <i className="purple"><b> high-quality solutions</b></i>.
</p>


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
                  href="https://github.com/smritiazm123"
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
