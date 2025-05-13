import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           <p>
  Hi Everyone, I’m <i className="purple"><b>Smriti</b></i> from <i className="purple"><b>Azamgarh, Uttar Pradesh, India</b></i>.<br />
  I currently work as a <i className="purple"><b>Software Engineer</b></i> at 
  <i className="purple"><b> Spectacom Global Private Limited</b></i>, where I build scalable and user-focused web applications.
  <br /><br />
  I hold a <i className="purple"><b>BSc (Hons) degree in Computer Science</b></i> from 
  <i className="purple"><b> Shyama Prasad Mukherjee College, University of Delhi</b></i>, 
  graduating with a <i className="purple"><b>9.17 CGPA</b></i>. I also secured 
  <i className="purple"><b> 85%</b></i> in my 12th and an <i className="purple"><b>8.8 CGPA</b></i> in my 10th grade at 
  <i className="purple"><b> Kendriya Vidyalaya Azamgarh</b></i>.
  <br /><br />
  Beyond coding, I’m passionate about:
  <ul>
    <li><i className="purple"><b>Outdoor activities</b></i></li>
    <li><i className="purple"><b>Singing</b></i></li>
    <li><i className="purple"><b>Travelling</b></i></li>
    <li><i className="purple"><b>Dancing</b></i></li>
  </ul>
  <br />
  {/* <i className="purple"><b>“Strive to build things that make a difference!”</b></i> */}
</p>

          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Outdoor Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Smriti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
