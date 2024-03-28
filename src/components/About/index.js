import "./index.css";

import { number, oneOfType, shape, string } from "prop-types";

import Container from "react-bootstrap/Container";

import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";

function About() {
  const { aboutData } = useContext(DataContext);
  if (!aboutData) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <Container fluid>
      {/* About section starts here */}
      <div className="about">
        <h1>{aboutData.title}</h1>
        <hr></hr>
        <p>{aboutData.description}</p>
        <div className="row">
          <div className="col-lg-4">
            <img src="./images/gentlmen.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0">
            <h3>{aboutData.user_details.role}</h3>
            <p>{aboutData.user_details.header_intro}</p>
            <br />
            <div className="row">
              <div className="col-lg-6 list-content">
                <ul>
                  <li>
                    <i className="list"></i> <strong>Birthday:</strong>{" "}
                    <span>{aboutData.user_details.birthday}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Website:</strong>{" "}
                    <span>{aboutData.user_details.website}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Phone:</strong>{" "}
                    <span>{aboutData.user_details.phone}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>City:</strong>{" "}
                    <span>{aboutData.user_details.city}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 list-content">
                <ul>
                  <li>
                    <i className="list"></i> <strong>Age:</strong>{" "}
                    <span>{aboutData.user_details.age}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Degree:</strong>{" "}
                    <span>{aboutData.user_details.degree}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>PhEmailone:</strong>{" "}
                    <span>{aboutData.user_details.email}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Freelance:</strong>{" "}
                    <span>{aboutData.user_details.freelance}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>{aboutData.user_details.footer_intro}</p>
          </div>
        </div>
      </div>
      {/* About section ends here */}
      <br /> <br />
    </Container>
  );
}

About.propTypes = {
  aboutData: shape({
    title: string.isRequired,
    description: string.isRequired,
    user_details: shape({
      role: oneOfType([string, number]).isRequired,
      header_intro: oneOfType([string, number]).isRequired,
      footer_intro: oneOfType([string, number]).isRequired,
      birthday: oneOfType([string, number]).isRequired,
      website: string.isRequired,
      phone: oneOfType([string, number]).isRequired,
      city: string.isRequired,
      age: oneOfType([string, number]).isRequired,
      degree: oneOfType([string, number]).isRequired,
      email: string.isRequired,
      freelance: string.isRequired,
    }),
  }),
};

export default About;
