import "./index.css";

import Container from "react-bootstrap/Container";

import { string, shape, oneOfType, number } from "prop-types";

function Resume(props) {
  const { data } = props;
  return (
    <Container fluid>
      {/* Resume and Summary section starts here  */}
      <div className="resume">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
        <div className="main">
          <div className="summary">
            <h2>{data.headings.heading1}</h2>
            <div className="section-1">
              <h5>{data.sub_headings.sub_headings1}</h5>
              <p className="description-bar">{data.highlights.summary}</p>
              <ul className="list">
                <li>{data.summary.list1}</li>
                <li>{data.summary.list2}</li>
              </ul>
            </div>
            <br />
            <h2>{data.headings.heading2}</h2>
            <div className="section-2">
              <h5>{data.sub_headings.sub_headings2}</h5>
              <h6> {data.years.session1}</h6>
              <p className="para">{data.highlights.education}</p>
              <p>{data.paragraph}</p>
            </div>
            <br />
            <div className="section-2">
              <h5>{data.sub_headings.sub_headings3}</h5>
              <h6>{data.years.session2}</h6>
              <p className="para">{data.highlights.education}</p>
              <p>{data.paragraph}</p>
            </div>
          </div>

          <div className="experience">
            <h2>{data.headings.heading3}</h2>
            <div className="section-3">
              <h5>{data.sub_headings.sub_headings4}</h5>
              <h6>{data.years.session1}</h6>
              <p className="para">{data.highlights["professional-exp"]}</p>
              <ul className="list">
                <li>{data.senior_list.list_1}</li>
                <li>{data.senior_list.list_2}</li>
                <li>{data.senior_list.list_3}</li>
                <li>{data.senior_list.list_4}</li>
              </ul>
            </div>
            <br />
            <br />
            <div className="section-4">
              <h5>{data.sub_headings.sub_headings5}</h5>
              <h6>{data.years.session3}</h6>
              <p className="para">{data.highlights["professional-exp1"]}</p>
              <ul className="list">
                <li>{data.graphic_list.list_1}</li>
                <li>{data.graphic_list.list_2}</li>
                <li>{data.graphic_list.list_3}</li>
                <li>{data.graphic_list.list_4}</li>
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
