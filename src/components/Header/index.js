import { shape, string } from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

import "./index.css";

import { useState, useEffect } from "react";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";

function Header() {
  // const { headerData } = useContext(DataContext);

  const [headerData, setData] = useState();

  const getHeaderData = () => {
    fetch("/data/header.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error fetching data from header.json", error)
      );
  };

  useEffect(() => {
    setTimeout(() => {
      getHeaderData();
    }, 3000);
  });

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
