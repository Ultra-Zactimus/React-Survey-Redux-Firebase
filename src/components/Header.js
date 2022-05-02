import React from 'react';
import {
  Container, 
  Navbar, 
  Nav, 
  NavDropdown} from 'react-bootstrap';
  
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Survey Says</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Add</Nav.Link>
        <Nav.Link href="#link">View Surveys</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;