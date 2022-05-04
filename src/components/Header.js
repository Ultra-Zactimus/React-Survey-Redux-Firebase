import React from 'react';
import {
  Container, 
  Navbar, 
  Nav, 
  NavDropdown } from 'react-bootstrap';
  import firebase from 'firebase/compat/app';
  
const Header = (props) => {

  const user = firebase.auth().currentUser;
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      return user;
    }
  });

  return (
    <Navbar 
      bg="primary"
      variant="dark"  //https://react-bootstrap.github.io/components/navbar/
      expand="lg">
    <Container>
    <Navbar.Brand 
      href="/" 
      className="text-white">
        Survey Says
    </Navbar.Brand>
    <Navbar.Toggle 
      aria-controls="basic-navbar-nav" />
    <Navbar.Collapse 
      id="basic-navbar-nav">
      <Nav 
        className="me-auto">

        <Nav.Link 
          href="/" 
          className="text-white">
            Home
        </Nav.Link>

        <Nav.Link 
          href="/new-survey" 
          className="text-white">
            Add
        </Nav.Link>

        <Nav.Link 
          href="/survey-list" 
          className="text-white">
            View Surveys
        </Nav.Link>

      </Nav>
      <Nav 
        className="d-flex ">
        <NavDropdown
          className="text-white"
          title={ user ? user.email : "Account" }
          id={`offcanvasNavbarDropdown-expand`}>

          <NavDropdown.Item 
            href="/signup" 
            className="text-dark form-control shadow-sm rounded">
              Sign Up
          </NavDropdown.Item>

          <NavDropdown.Item 
            href="/signin" 
            className="text-dark form-control shadow-sm rounded">
              Sign In
          </NavDropdown.Item>

          <NavDropdown.Item 
            href="/signout" 
            className="text-dark form-control shadow-sm rounded">
              Sign Out
          </NavDropdown.Item>

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;