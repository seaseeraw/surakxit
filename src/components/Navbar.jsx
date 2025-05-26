


import React from 'react';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbars = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar bg={darkMode ? 'dark' : 'success'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src="./src/assets/a.png" // Your logo file path
            width="40" // Adjust the size
            height="40"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
          {' '}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
        </Nav>
        <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleTheme}>
          {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
