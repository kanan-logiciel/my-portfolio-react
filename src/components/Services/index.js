import "./index.css";

import data from "../../data/services.json";

import Checklist from "../../svg/ChecklistSvg";
import Briefcase from "../../svg/BriefcaseSvg";
import ChartSvg from "../../svg/ChartSvg";
import BinocularSvg from "../../svg/BinocularSvg";
import BrightnessSvg from "../../svg/BrightnessSvg";
import CalendarSvg from "../../svg/CalendarSvg";

import Container from "react-bootstrap/Container";

function Services() {
  return (
    <Container fluid>
      {/* Services section starts from here  */}
      <div className="service">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <Briefcase />
            <h4 className="title">{data.services_headings.heading1}</h4>
            <p className="description">
              {data.services_description.paragraph1}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 ">
            <Checklist />
            <h4 className="title">{data.services_headings.heading2}</h4>
            <p className="description">
              {data.services_description.paragraph2}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 icon-box">
            <ChartSvg />
            <h4 className="title">{data.services_headings.heading3}</h4>
            <p className="description">
              {data.services_description.paragraph3}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 icon-box">
            <BinocularSvg />
            <h4 className="title">{data.services_headings.heading4}</h4>
            <p className="description">
              {data.services_description.paragraph4}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 icon-box">
            <BrightnessSvg />
            <h4 className="title">{data.services_headings.heading5}</h4>
            <p className="description">
              {" "}
              {data.services_description.paragraph5}
            </p>
          </div>

          <div className="col-lg-4 col-md-6 icon-box">
            <CalendarSvg />
            <h4 className="title">{data.services_headings.heading6}</h4>
            <p className="description">
              {data.services_description.paragraph6}
            </p>
          </div>
        </div>
      </div>
      {/* Services section ends here  */}

      <br />
      <br />
    </Container>
  );
}

export default Services;
