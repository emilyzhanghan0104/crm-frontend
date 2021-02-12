import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/imgs/logo.png';

const Header = () => (
  <Navbar collapseOnSelect bg="dark" expand="md" variant="dark">
    <Navbar.Brand>
      <img src={logo} alt="logo" width="50px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/tickets">Tickets</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
