import { number, oneOfType, shape, string } from "prop-types";
import "./index.css";

import Container from "react-bootstrap/Container";

function About(props) {
  const { data } = props;

  return (
    <Container fluid>
      {/* About section starts here */}
      <div className="about">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
        <div className="row">
          <div className="col-lg-4">
            <img src="./images/gentlmen.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0">
            <h3>{data.user_details.role}</h3>
            <p>{data.user_details.header_intro}</p>
            <br />
            <div className="row">
              <div className="col-lg-6 list-content">
                <ul>
                  <li>
                    <i className="list"></i> <strong>Birthday:</strong>{" "}
                    <span>{data.user_details.birthday}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Website:</strong>{" "}
                    <span>{data.user_details.website}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Phone:</strong>{" "}
                    <span>{data.user_details.phone}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>City:</strong>{" "}
                    <span>{data.user_details.city}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 list-content">
                <ul>
                  <li>
                    <i className="list"></i> <strong>Age:</strong>{" "}
                    <span>{data.user_details.age}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Degree:</strong>{" "}
                    <span>{data.user_details.degree}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>PhEmailone:</strong>{" "}
                    <span>{data.user_details.email}</span>
                  </li>
                  <li>
                    <i className="list"></i> <strong>Freelance:</strong>{" "}
                    <span>{data.user_details.freelance}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>{data.user_details.footer_intro}</p>
          </div>
        </div>
      </div>
      {/* About section ends here */}
      <br /> <br />
    </Container>
  );
}

About.propTypes = {
  data: shape({
    user_details: shape({
      role: oneOfType([string, number]).isRequired,
    }),
  }),
};

export default About;
