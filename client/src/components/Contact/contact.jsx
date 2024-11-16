import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './contact.css';
import { submitContactForm } from '../../utilities';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await submitContactForm(formData);
      setSuccess('Your message has been sent successfully!');
      console.log('Form submitted:', response);
      // Optionally reset the form here if needed
      setFormData({
        name: '',
        email: '',
        address: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <Container className="contact-container">
      <div className="contact-form-wrapper">
        <h2 className="text-center mb-4">Contact Us</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="formName" className="form_group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="form_group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAddress" className="form_group">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="form_group">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Please describe what our professionals can do for you!"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="custom-submit-button">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;