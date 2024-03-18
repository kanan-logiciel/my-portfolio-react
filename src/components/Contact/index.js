import "./index.css";

import Container from "react-bootstrap/Container";

import data from "../../data/contact.json";

import FloatingLabel from "react-bootstrap/FloatingLabel";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container fluid>
      {/* Contact section starts from here  */}
      <div className="contact">
        <h1>{data.title}</h1>
        <hr></hr>
        <p>{data.description}</p>
        <div className="contact-form justify-content-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="subject" placeholder="Enter Subject" />
            </Form.Group>

            <Form.Label>Message</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      {/* Contact section ends here  */}
      <br/> <br/>
    </Container>
  );
}

export default Contact;
