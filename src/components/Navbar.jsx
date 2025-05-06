// Navbars.js
import React from 'react';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
const Navbars = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar bg={darkMode ? 'dark' : 'success'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant={darkMode ? 'light' : 'dark'} onClick={toggleTheme}>
  {darkMode ? <BsSunFill /> : <BsMoonFill />}
</Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;

