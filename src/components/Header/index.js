import { Navbar, Nav } from "react-bootstrap";

import "./index.css";

import React from "react";

function Header() {
  return (
      // Header section starts here 
      <Navbar className="header-bar" expand="lg">
        <Navbar.Brand href="#" className="logo">
          myPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Facts</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
            <Nav.Link href="#">Skill</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // Header section ends here 
  );
}

export default Header;
