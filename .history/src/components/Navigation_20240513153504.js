import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link as ReactLink} from "react-router-dom";






const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          </Nav>
  
          <div className='Nav'>
            <ReactLink to="/login">Logout</ReactLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarComponent;