import Container from "react-bootstrap/Container";

import "./index.css";

const images = [
  "product1.jpg",
  "product2.jpg",
  "product5.jpg",
  "product5.jpg",
  "product6.jpg",
  "product1.jpg",
];

function Portfolio(props) {
  const { data } = props;
  return (
    <Container fluid>
      {/* Portfolio section starts from here  */}
      <div className="portfolio">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
        <div className="docs">
          <div className="row g-3">
            {images.map((image, index) => {
              return (
                <div className="col-4" key={index}>
                  <img
                    src={`./images/${image}`}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Portfolio section ends here  */}

      <br />
      <br />
    </Container>
  );
}

export default Portfolio;
