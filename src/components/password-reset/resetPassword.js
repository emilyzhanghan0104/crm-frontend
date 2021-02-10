import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Reset = ({ email, handleOnChange, handleOnResetSubmit, switchFormType }) => (
  <Container>
    <Row>
      <Col>
        <h1 className="text-info text-center">Reset Password</h1>
        <hr />
        <Form onSubmit={handleOnResetSubmit}>
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

          <Button type="submit">Send</Button>
        </Form>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col>
        <a href="#!" onClick={() => switchFormType('login')}>
          Login?
        </a>
      </Col>
    </Row>
  </Container>
);

Reset.propTypes = {
  email: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  switchFormType: PropTypes.func.isRequired,
};
export default Reset;
