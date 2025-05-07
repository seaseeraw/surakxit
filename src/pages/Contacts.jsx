import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';

function Contacts() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <Card.Body>
          <h3 className="text-center mb-4">Contact Form</h3>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contacts;
