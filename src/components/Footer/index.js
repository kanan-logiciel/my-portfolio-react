import React from "react";

import "./index.css";

import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
  const { data } = props;
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h5>{data.title}</h5>
            <ul className="list-parts">
              <li>{data.list_content.list1}</li>
              <li>{data.list_content.list2}</li>
              <li>{data.list_content.list3}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{data.title2}</h5>
            <ul className="list-parts">
              <li>{data.list_content.list4}</li>
              <li>{data.list_content.list5}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{data.title3}</h5>
            <ul className="list-parts">
              <li>{data.list_content.list6}</li>
              <li>{data.list_content.list7}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{data.title4}</h5>
            <ul className="list-parts">
              <li>{data.list_content.list8}</li>
              <li>{data.list_content.list9}</li>
              <li>{data.list_content.list10}</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted text-center">
              {data.copyright}&copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
