import "./index.css";
import { httpPost } from "../../http";
import { httpGet } from "../../http";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import { string, shape } from "prop-types";
import { useState, useEffect } from "react";
import { API_URLS } from "../../configs/api";

function Skill() {
  const [skillData, setSkillData] = useState();
  const postData = async () => {
    try {
      const jsonData = require("../../data/skill.json");
      const response = await httpPost(API_URLS.PORTFOLIO, jsonData);

      console.log("post response:", response);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 10;
  const getDataById = async (id) => {
    try {
      const url = `${API_URLS.PORTFOLIO}/${id}`;
      const response = await httpGet(url);

      console.log("Get response:", response);
      setSkillData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };

  useEffect(() => {
    // postData();
    getDataById(id);
  }, []);

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
