// Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Homes = ({ darkMode }) => {
  return (
    <Container className="py-5">
      <h1>Welcome to the Home Page</h1>
      <p>This theme is now applied globally.</p>
    </Container>
  );
};

export default Homes;
