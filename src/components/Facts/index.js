import Container from "react-bootstrap/Container";

import SmileSvg from "../../svg/SmileSvg";
import RichtextSvg from "../../svg/RichtextSvg";
import HeadsetSvg from "../../svg/HeadsetSvg";
import PeopleSvg from "../../svg/PeopleSvg";

import "./index.css";

function Facts(props) {
  const { data } = props;
  return (
    <Container fluid>
      {/* Facts section ges here */}
      <div className="facts">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <SmileSvg />
            <span className="count"> {data.happy_clients}</span>
            <p>
              <strong>Happy Clients</strong> as results.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <RichtextSvg />
            <span className="count">{data.projects}</span>
            <p>
              <strong>Projects</strong> get and done.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <HeadsetSvg />
            <span className="count">{data.employees}</span>
            <p>
              <strong>Hours Of Support</strong> and seek advantage.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 facts-content">
          <div className="count-box">
            <PeopleSvg />
            <span className="count">{data.hard_workers}</span>
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

export default Facts;
