import "./index.css";

import Container from "react-bootstrap/Container";

import FloatingLabel from "react-bootstrap/FloatingLabel";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { string, shape } from "prop-types";

import { useState, useEffect } from "react";

import axios from "axios";

// import React, { useContext } from "react";

// import { DataContext } from "../../context/DataContext";

function Contact() {
  // const { contactData } = useContext(DataContext);
  const [contactData, setContactData] = useState();

  // const getContactData = () => {
  //   fetch("/data/contact.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching contact data:", error));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getContactData();
  //   }, 3000);
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data/contact.json");
        setContactData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!contactData) {
    return <div>Loading...</div>; // Handle loading state
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
