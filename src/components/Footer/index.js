import "./index.css";

import { Container, Row, Col } from "react-bootstrap";

import { string, shape } from "prop-types";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";

import { useState, useEffect } from "react";
const Footer = () => {
  // const { footerData } = useContext(DataContext);

  const [footerData, setData] = useState();

  const getFooterData = () => {
    fetch("/data/footer.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching footer data:", error));
  };

  useEffect(() => {
    setTimeout(() => {
      getFooterData();
    }, 3000);
  });

  if (!footerData) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <footer className="footer mt-auto py-3 main-content">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h5>{footerData.title}</h5>
            <ul className="list-parts">
              <li>{footerData.list_content.list1}</li>
              <li>{footerData.list_content.list2}</li>
              <li>{footerData.list_content.list3}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{footerData.title2}</h5>
            <ul className="list-parts">
              <li>{footerData.list_content.list4}</li>
              <li>{footerData.list_content.list5}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{footerData.title3}</h5>
            <ul className="list-parts">
              <li>{footerData.list_content.list6}</li>
              <li>{footerData.list_content.list7}</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>{footerData.title4}</h5>
            <ul className="list-parts">
              <li>{footerData.list_content.list8}</li>
              <li>{footerData.list_content.list9}</li>
              <li>{footerData.list_content.list10}</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted text-center">
              {footerData.copyright}&copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propsTypes = {
  data: shape({
    title: string.isRequired,
    list_content: shape({
      list1: string.isRequired,
      list2: string.isRequired,
      list3: string.isRequired,
      list4: string.isRequired,
      list5: string.isRequired,
      list6: string.isRequired,
      list7: string.isRequired,
      list8: string.isRequired,
      list9: string.isRequired,
      list10: string.isRequired,
    }),
    copyright: string.isRequired,
  }),
};

export default Footer;
