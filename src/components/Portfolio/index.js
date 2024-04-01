import Container from "react-bootstrap/Container";

import "./index.css";

import { useState, useEffect } from "react";

import axios from "axios";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";

import { string, shape } from "prop-types";
const images = [
  "product1.jpg",
  "product2.jpg",
  "product5.jpg",
  "product5.jpg",
  "product6.jpg",
  "product1.jpg",
];

function Portfolio() {
  // const { portfolioData } = useContext(DataContext);

  const [portfolioData, setPortfolioData] = useState();

  // const getPortfolioData = () => {
  //   fetch("/data/portfolio.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching resume data:", error));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getPortfolioData();
  //   }, 3000);
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data/portfolio.json");
        setPortfolioData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <Container fluid>
      {/* Portfolio section starts from here  */}
      <div className="portfolio">
        <h1>{portfolioData.title}</h1>
        <hr></hr>
        <p>{portfolioData.description}</p>
        <div className="docs">
          <div className="row g-3">
            {images.map((image, index) => {
              return (
                <div className="col-4" key={index}>
                  <img
                    src={`./images/${image}`}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Portfolio section ends here  */}

      <br />
      <br />
    </Container>
  );
}

Portfolio.propTypes = {
  data: shape({
    title: string.isRequired,
    description: string.isRequired,
  }),
};
export default Portfolio;
