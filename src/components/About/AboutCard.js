import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Smriti </span>
            from <span className="purple"> Azamgarh Uttar Pradesh, India.</span>
            <br />
            I am currently employed as a software developer at Spectacom Global Private Limited.
            <br />
            I have completed my graduation from <span className="purple">Shyama Prasad Mukherjee College for Women (University of Delhi)</span> with distinction, and I also achieved excellent scores in my 10th and 12th grades at <span className="purple">Kendriya Vidyalaya Azamgarh</span>, securing <span className="purple">8.8 CGPA</span> in 10th grade and  <span className="purple">85%</span> in 12th. Additionally, I obtained an outstanding overall score of  <span className="purple">9.2 CGPA</span> during my college tenure.<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
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
          </ul>

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
