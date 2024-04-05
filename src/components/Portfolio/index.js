import "./index.css";

import { httpPost } from "../../http";

import { httpGet } from "../../http";

import { API_URLS } from "../../configs/api";

import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

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
  const [portfolioData, setPortfolioData] = useState();

  const postData = async () => {
    try {
      const jsonData = require("../../data/portfolio.json");
      const response = await httpPost(API_URLS.PORTFOLIO, jsonData);

      console.log("post response:", response);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 7;
  const getDataById = async (id) => {
    try {
      const url = `${API_URLS.PORTFOLIO}/${id}`;
      const response = await httpGet(url);

      console.log("Get response:", response);
      setPortfolioData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };

  useEffect(() => {
    getDataById(id);
    // postData();
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
