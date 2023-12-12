import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function Programare() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form data (e.g., send it to the server)
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
