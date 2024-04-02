import Container from "react-bootstrap/Container";

import SmileSvg from "../../svg/SmileSvg";
import RichtextSvg from "../../svg/RichtextSvg";
import HeadsetSvg from "../../svg/HeadsetSvg";
import PeopleSvg from "../../svg/PeopleSvg";

import { string, shape, number } from "prop-types";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";

import axios from "axios";

import { useState, useEffect } from "react";

import "./index.css";

function Facts() {
  // const { factsData } = useContext(DataContext);
  const [factsData, setFactsData] = useState();

  // const getFactsData = () => {
  //   fetch("/data/facts.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching facts data:", error));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getFactsData();
  //   }, 3000);
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data/facts.json");
      setFactsData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // postData();
    // getData();
    fetchData();
  }, []);

  const postData = async () => {
    try {
      const jsonData = require("../../data/facts.json");
      const response = await axios.post(
        "https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio",
        jsonData
      );
      console.log("post response:", response.data);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio"
      );
      console.log("Get response:", response.data);
    } catch (error) {
      console.log("Error getting data:", error);
    }
  };

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
