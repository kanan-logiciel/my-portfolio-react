import Container from "react-bootstrap/Container";

import SmileSvg from "../../svg/SmileSvg";

import RichtextSvg from "../../svg/RichtextSvg";

import HeadsetSvg from "../../svg/HeadsetSvg";

import PeopleSvg from "../../svg/PeopleSvg";

import { string, shape, number } from "prop-types";

import { useState, useEffect } from "react";

import { httpGet } from "../../http";

import { httpPost } from "../../http";

import "./index.css";

function Facts() {
  const [factsData, setFactsData] = useState();

  const postData = async () => {
    try {
      const jsonData = require("../../data/facts.json");
      const url =
        "https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio";
      const response = await httpPost(url, jsonData);

      console.log("post response:", response);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 3;
  const getDataById = async (id) => {
    try {
      const url = `https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio/${id}`;
      const response = await httpGet(url);

      console.log("Get response:", response);
      setFactsData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };
  useEffect(() => {
    // postData();
    getDataById(id);
  }, []);

  if (!factsData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <Container fluid>
      {/* Facts section ges here */}
      <div className="facts">
        <h1>{factsData.title}</h1>
        <hr></hr>
        <p>{factsData.description}</p>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <SmileSvg />
            <span className="count"> {factsData.happy_clients}</span>
            <p>
              <strong>Happy Clients</strong> as results.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <RichtextSvg />
            <span className="count">{factsData.projects}</span>
            <p>
              <strong>Projects</strong> get and done.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <HeadsetSvg />
            <span className="count">{factsData.employees}</span>
            <p>
              <strong>Hours Of Support</strong> and seek advantage.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <PeopleSvg />
            <span className="count">{factsData.hard_workers}</span>
            <p>
              <strong>Hard Workers</strong> with harsher pain of things.
            </p>
          </div>
        </div>
      </div>
      {/* Facts section ends here */}

      <br />
      <br />
    </Container>
  );
}

Facts.propsTypes = {
  data: shape({
    title: string.isRequired,
    description: string.isRequired,
    happy_clients: number.isRequired,
    projects: number.isRequired,
    employees: number.isRequired,
    hard_workers: number.isRequired,
  }),
};
export default Facts;
