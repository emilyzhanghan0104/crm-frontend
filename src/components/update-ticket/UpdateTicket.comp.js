import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UpdateTicket = ({ msg, handleOnSubmit, handleOnChange }) => (
  <Form onSubmit={handleOnSubmit}>
    <Form.Label>Reply</Form.Label>
    <Form.Text>Please reply your message here or update the ticket</Form.Text>
    <Form.Control as="textarea" name="details" value={msg} rows={5} onChange={handleOnChange} />
    <div className="text-right mt-3 mb-3">
      <Button variant="dark" type="submit">
        Reply
      </Button>
    </div>
  </Form>
);

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default UpdateTicket;
