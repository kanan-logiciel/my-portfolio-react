import "./index.css";

import { httpPost } from "../../http";

import { httpGet } from "../../http";

import { API_URLS } from "../../configs/api";

import { shape, string } from "prop-types";

import { Navbar, Nav } from "react-bootstrap";

import { useState, useEffect } from "react";

function Header() {
  const [headerData, setHeaderData] = useState();

  const postData = async () => {
    try {
      const jsonData = require("../../data/header.json");
      const response = await httpPost(API_URLS.PORTFOLIO, jsonData);

      console.log("post response:", response.data);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 5;
  const getDataById = async (id) => {
    try {
      const url = `${API_URLS.PORTFOLIO}/${id}`;
      const response = await httpGet(url);

      console.log("Get response:", response);
      setHeaderData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };

  useEffect(() => {
    // postData();
    getDataById(id);
  }, []);

  if (!headerData) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    // Header section starts here
    <Navbar className="header-bar" expand="lg">
      <Navbar.Brand className="logo">{headerData.logo}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">{headerData.options.list1}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list2}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list3}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list4}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list5}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list6}</Nav.Link>
          <Nav.Link href="#">{headerData.options.list7}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // Header section ends here
  );
}

Header.propTypes = {
  data: shape({
    logo: string.isRequired,
    options: shape({
      list1: string.isRequired,
      list2: string.isRequired,
      list3: string.isRequired,
      list4: string.isRequired,
      list5: string.isRequired,
      list6: string.isRequired,
      list7: string.isRequired,
    }),
  }),
};
export default Header;
