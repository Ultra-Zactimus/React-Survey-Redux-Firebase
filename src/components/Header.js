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
    <Navbar.Brand href="/">Survey Says</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/new-survey">Add</Nav.Link>
        <Nav.Link href="/survey-list">View Surveys</Nav.Link>
      </Nav>
      <Nav className="d-flex">
        {/* <Nav.Link href="/signin" className="btn btn-outline-secondary">Sign-In</Nav.Link> */}
        <NavDropdown
          title="Account"
          id={`offcanvasNavbarDropdown-expand`}
        >
          <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
          <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
          <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
          {/* <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;