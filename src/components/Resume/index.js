import "./index.css";

import { httpPost } from "../../http";

import { httpGet } from "../../http";

import Container from "react-bootstrap/Container";

import { string, shape, oneOfType, number } from "prop-types";

import { useState, useEffect } from "react";

import axios from "axios";

function Resume() {
  const [resumeData, setResumeData] = useState();

  const postData = async () => {
    try {
      const jsonData = require("../../data/resume.json");
      const url =
        "https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio";
      const response = await httpPost(url, jsonData);

      console.log("post response:", response);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 6;
  const getDataById = async (id) => {
    try {
      const url = `https://65d86728c96fbb24c1bb70f7.mockapi.io/api/v1/portfolio/${id}`;
      const response = await httpGet(url);

      console.log("Get response:", response);
      setResumeData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };
  useEffect(() => {
    getDataById(id);
    // postData();
  }, []);

  if (!resumeData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <Container fluid>
      {/* Resume and Summary section starts here  */}
      <div className="resume">
        <h1>{resumeData.title}</h1>
        <hr></hr>
        <p>{resumeData.description}</p>
        <div className="main">
          <div className="summary">
            <h2>{resumeData.headings.heading1}</h2>
            <div className="section-1">
              <h5>{resumeData.sub_headings.sub_headings1}</h5>
              <p className="description-bar">{resumeData.highlights.summary}</p>
              <ul className="list">
                <li>{resumeData.summary.list1}</li>
                <li>{resumeData.summary.list2}</li>
              </ul>
            </div>
            <br />
            <h2>{resumeData.headings.heading2}</h2>
            <div className="section-2">
              <h5>{resumeData.sub_headings.sub_headings2}</h5>
              <h6> {resumeData.years.session1}</h6>
              <p className="para">{resumeData.highlights.education}</p>
              <p>{resumeData.paragraph}</p>
            </div>
            <br />
            <div className="section-2">
              <h5>{resumeData.sub_headings.sub_headings3}</h5>
              <h6>{resumeData.years.session2}</h6>
              <p className="para">{resumeData.highlights.education}</p>
              <p>{resumeData.paragraph}</p>
            </div>
          </div>

          <div className="experience">
            <h2>{resumeData.headings.heading3}</h2>
            <div className="section-3">
              <h5>{resumeData.sub_headings.sub_headings4}</h5>
              <h6>{resumeData.years.session1}</h6>
              <p className="para">
                {resumeData.highlights["professional-exp"]}
              </p>
              <ul className="list">
                <li>{resumeData.senior_list.list_1}</li>
                <li>{resumeData.senior_list.list_2}</li>
                <li>{resumeData.senior_list.list_3}</li>
                <li>{resumeData.senior_list.list_4}</li>
              </ul>
            </div>
            <br />
            <br />
            <div className="section-4">
              <h5>{resumeData.sub_headings.sub_headings5}</h5>
              <h6>{resumeData.years.session3}</h6>
              <p className="para">
                {resumeData.highlights["professional-exp1"]}
              </p>
              <ul className="list">
                <li>{resumeData.graphic_list.list_1}</li>
                <li>{resumeData.graphic_list.list_2}</li>
                <li>{resumeData.graphic_list.list_3}</li>
                <li>{resumeData.graphic_list.list_4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Resume and Summary section ends here   */}

      <br />
      <br />
    </Container>
  );
}

Resume.propTypes = {
  data: shape({
    title: string.isRequired,
    description: string.isRequired,
    headings: shape({
      heading1: string.isRequired,
      heading2: string.isRequired,
      heading3: string.isRequired,
    }),
    sub_headings: shape({
      sub_headings1: string.isRequired,
      sub_headings2: string.isRequired,
      sub_headings3: string.isRequired,
      sub_headings4: string.isRequired,
      sub_headings5: string.isRequired,
    }),
    years: shape({
      session1: oneOfType([string, number]).isRequired,
      session2: oneOfType([string, number]).isRequired,
      session3: oneOfType([string, number]).isRequired,
    }),
    summary: shape({
      list1: oneOfType([string, number]).isRequired,
      list2: oneOfType([string, number]).isRequired,
    }),
    paragraph: string.isRequired,
    highlights: shape({
      summary: string.isRequired,
      education: string.isRequired,
      "professional-exp": string.isRequired,
      "professional-exp1": string.isRequired,
    }),
    senior_list: shape({
      list_1: string.isRequired,
      list_2: string.isRequired,
      list_3: string.isRequired,
      list_4: string.isRequired,
    }),
    graphic_list: shape({
      list_1: string.isRequired,
      list_2: string.isRequired,
      list_3: string.isRequired,
      list_4: string.isRequired,
    }),
  }),
};
export default Resume;
