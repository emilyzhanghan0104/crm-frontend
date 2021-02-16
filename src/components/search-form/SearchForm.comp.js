import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({ handleOnChange, str }) => (
  <Form>
    <Form.Group as={Row}>
      <Form.Label column="true" sm={3}>
        Search:{' '}
      </Form.Label>

      <Col column="true" sm={9}>
        <Form.Control
          name="searchStr"
          placeholder="Search..."
          value={str}
          onChange={handleOnChange}
        />
      </Col>
    </Form.Group>
  </Form>
);

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
