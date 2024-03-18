import React from "react";

import "./index.css";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h5>About</h5>
            <ul className="list-parts">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Facts</h5>
            <ul className="list-parts">
              <li>
                <a href="#">Company Facts</a>
              </li>
              <li>
                <a href="#">Statistics</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Portfolio</h5>
            <ul className="list-parts">
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Client Work</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Resume</h5>
            <ul className="list-parts">
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted text-center">
              myPortfolio&copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
