import { Navbar, Nav } from "react-bootstrap";

import "./index.css";

import React from "react";

function Header(props) {
  const { data } = props;
  return (
    // Header section starts here
    <Navbar className="header-bar" expand="lg">
      <Navbar.Brand className="logo">{data.logo}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">{data.options.list1}</Nav.Link>
          <Nav.Link href="#">{data.options.list2}</Nav.Link>
          <Nav.Link href="#">{data.options.list3}</Nav.Link>
          <Nav.Link href="#">{data.options.list4}</Nav.Link>
          <Nav.Link href="#">{data.options.list5}</Nav.Link>
          <Nav.Link href="#">{data.options.list6}</Nav.Link>
          <Nav.Link href="#">{data.options.list7}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // Header section ends here
  );
}

export default Header;
