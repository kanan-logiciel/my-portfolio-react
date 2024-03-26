import "./index.css";

import Container from "react-bootstrap/Container";

import ProgressBar from "react-bootstrap/ProgressBar";

function Skill(props) {
  const { data } = props;
  return (
    <Container fluid>
      {/* Skill section starts here */}
      <div className="skill">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
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

export default Skill;
