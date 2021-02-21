import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../assets/imgs/logo.png';

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <Navbar collapseOnSelect bg="dark" expand="md" variant="dark">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link className="font-weight-bolder">Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer className="font-weight-bolder" to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Button variant="light" onClick={handleLogout}>
              Logout
            </Button>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
