import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = ({ email, password, handleOnChange, handleOnSubmit, switchFormType }) => (
  <Container>
    <Row>
      <Col>
        <h1 className="text-info text-center">Client Login</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col>
        <a href="#!" onClick={() => switchFormType('reset')}>
          Forget Password?
        </a>
      </Col>
    </Row>
  </Container>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  switchFormType: PropTypes.func.isRequired,
};
export default LoginForm;
