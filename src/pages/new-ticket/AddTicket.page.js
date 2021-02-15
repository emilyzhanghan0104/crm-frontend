import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PageBreadcrumb, AddTicketForm } from '../../components';

const initFrmDt = {
  subject: '',
  issueDate: null,
  details: '',
};

const AddTicket = () => {
  const [frmData, setFrmData] = useState(initFrmDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            handleOnChange={handleOnChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
