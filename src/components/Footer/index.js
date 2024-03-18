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
              <li>About Us</li>
              <li>Our Team</li>
              <li>Testimonials</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Facts</h5>
            <ul className="list-parts">
              <li>Company Facts</li>
              <li>Statistics</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Portfolio</h5>
            <ul className="list-parts">
              <li>Projects</li>
              <li>Client Work</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Resume</h5>
            <ul className="list-parts">
              <li>Experience</li>
              <li>Education</li>
              <li>Skills</li>
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
