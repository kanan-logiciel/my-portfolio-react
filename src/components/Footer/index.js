import React from 'react';

import "./index.css";

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="1">About Us</a></li>
              <li><a href="2">Our Team</a></li>
              <li><a href="2">Testimonials</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Facts</h5>
            <ul className="list-unstyled">
              <li><a href="1">Company Facts</a></li>
              <li><a href="1">Statistics</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Portfolio</h5>
            <ul className="list-unstyled">
              <li><a href="1">Projects</a></li>
              <li><a href="1">Client Work</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Resume</h5>
            <ul className="list-unstyled">
              <li><a href="1">Experience</a></li>
              <li><a href="1">Education</a></li>
              <li><a href="1">Skills</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        {/* <Row>
          <Col md={3}>
            <h5>Skill</h5>
            <ul className="list-unstyled">
              <li><a href="1">Programming</a></li>
              <li><a href="1">Design</a></li>
              <li><a href="1">Communication</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="1">Web Design</a></li>
              <li><a href="1">SEO</a></li>
              <li><a href="1">Content Writing</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="1">Contact Us</a></li>
              <li><a href="1">Location</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>More</h5>
            <ul className="list-unstyled">
              <li><a href="1">Privacy Policy</a></li>
              <li><a href="1">Terms of Service</a></li>
            </ul>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <p className="text-muted text-center">Your Company Name &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

