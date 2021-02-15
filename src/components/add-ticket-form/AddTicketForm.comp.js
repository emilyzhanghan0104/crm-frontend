import React from 'react';
import { Form, Jumbotron, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './add-ticket-form.style.css';

const AddTicketForm = ({ frmData, handleOnSubmit, handleOnChange }) => (
  <Jumbotron className="mt-2 add-new-ticket bg-dark">
    <h2 className="text-light text-center mb-4">Add New Ticket</h2>
    <Form onSubmit={handleOnSubmit} className="text-white">
      <Form.Group as={Row}>
        <Form.Label column="true" sm={3}>
          Subject
        </Form.Label>
        <Col column="true" sm={9}>
          <Form.Control
            name="subject"
            value={frmData.subject}
            onChange={handleOnChange}
            placeholder="Subject"
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column="true" sm={3}>
          Issue Date
        </Form.Label>
        <Col column="true" sm={9}>
          <Form.Control
            type="date"
            name="issueDate"
            value={frmData.issueDate}
            onChange={handleOnChange}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Label className="mb-2">Details</Form.Label>
        <Form.Control
          as="textarea"
          name="details"
          value={frmData.details}
          onChange={handleOnChange}
          rows="5"
          required
        />
      </Form.Group>
      <Button className="mt-5" type="submit" variant="light" block>
        Submit
      </Button>
    </Form>
  </Jumbotron>
);

AddTicketForm.propTypes = {
  frmData: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default AddTicketForm;
