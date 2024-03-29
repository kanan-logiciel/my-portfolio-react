import "./index.css";

import Container from "react-bootstrap/Container";

import ProgressBar from "react-bootstrap/ProgressBar";

import { string, shape } from "prop-types";

import { useState, useEffect } from "react";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";
function Skill() {
  // const { skillData } = useContext(DataContext);

  const [skillData, setData] = useState();

  const getSkillData = () => {
    fetch("/data/skill.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching skill data:", error));
  };

  useEffect(() => {
    setTimeout(() => {
      getSkillData();
    }, 3000);
  });
  if (!skillData) {
    return <div>Loading...</div>;
  }
  return (
    <Container fluid>
      {/* Skill section starts here */}
      <div className="skill">
        <h1>{skillData.title}</h1>
        <hr></hr>
        <p>{skillData.description}</p>
        <div className="progress-tab">
          <span className="name">HTML</span>
          <span>
            <ProgressBar className="course" now={100} label={`${100}%`} />
          </span>
          <br />
          <span className="name">CSS</span>
          <span>
            <ProgressBar className="course" now={90} label={`${90}%`} />
          </span>
          <br />
          <span className="name">JavaScript</span>
          <span>
            <ProgressBar className="course" now={75} label={`${75}%`} />
          </span>
        </div>

        <div className="progress-bar">
          <span className="name">PHP</span>
          <span>
            <ProgressBar className="course" now={80} label={`${80}%`} />
          </span>
          <br />
          <span className="name">Wordpress/CMS</span>
          <span>
            <ProgressBar className="course" now={90} label={`${90}%`} />
          </span>
          <br />
          <span className="name">Photoshop</span>
          <span>
            <ProgressBar className="course" now={55} label={`${55}%`} />
          </span>
        </div>
        <br />
        <br />
      </div>
      {/* Skill section ends here */}

      <br />
      <br />
    </Container>
  );
}

Skill.propTypes = {
  data: shape({
    title: string,
    description: string,
  }),
};
export default Skill;
