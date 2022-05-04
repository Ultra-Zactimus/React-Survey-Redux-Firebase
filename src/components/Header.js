import React from 'react';
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router';
import {
  Container, 
  Navbar, 
  Nav, 
  NavDropdown } from 'react-bootstrap';
  
const Header = (props) => {

  const user = firebase.auth().currentUser;
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      return user;
    }
  });
  
  const navigate = useNavigate();

  const doSignOut = (event) => {
    event.preventDefault();
    firebase.auth().signOut()
      .then(function () {
        console.log("Successfully signed out!");
        navigate('/');
      }).catch(function (error) {
        console.log(error.message);
      });
  }
  let signInOutText;
  if (user) {
      signInOutText = (
        <React.Fragment>
          <NavDropdown.Item 
            className="text-dark"
            onClick={doSignOut}>
              Sign Out
          </NavDropdown.Item>
        </React.Fragment>
    )
  } else {
    signInOutText = 
    <React.Fragment>
      <NavDropdown.Item 
        href="/signin" 
        className="text-dark">
          Sign In
      </NavDropdown.Item>
      <NavDropdown.Item 
        href="/signup" 
        className="text-dark">
        Sign Up
      </NavDropdown.Item>
    </React.Fragment>;
  }
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
          {signInOutText}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;