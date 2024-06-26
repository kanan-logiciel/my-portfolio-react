import "./index.css";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { string, shape } from "prop-types";
import { useState, useEffect } from "react";
import { API_URLS } from "../../configs/api";
import { httpGet } from "../../http";
import { httpPost } from "../../http";

function Contact() {
  const [contactData, setContactData] = useState();

  const postData = async () => {
    try {
      const jsonData = require("../../data/contact.json");
      const response = await httpPost(API_URLS.PORTFOLIO, jsonData);

      console.log("post response:", response);
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  const id = 2;
  const getDataById = async (id) => {
    try {
      const url = `${API_URLS.PORTFOLIO}/${id}`;
      const response = await httpGet(url);
      console.log("Get response:", response);
      setContactData(response);
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  };

  useEffect(() => {
    // postData();
    getDataById(id);
  }, []);

  if (!contactData) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      {/* Contact section starts from here  */}
      <div className="contact">
        <h1>{contactData.title}</h1>
        <hr></hr>
        <p>{contactData.description}</p>
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
      <br /> <br />
    </Container>
  );
}

Contact.propsTypes = {
  data: shape({
    title: string.isRequired,
    description: string.isRequired,
  }),
};
export default Contact;
