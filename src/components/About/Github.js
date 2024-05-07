import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <p>1,107 contributions in 2023</p>
      <p>255 contributions in 2024</p>
      <p>You can also visit my LinkedIn post for the contributions </p>

    </Row>
  );
}

export default Github;
