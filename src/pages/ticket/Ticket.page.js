import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb, MessageHistory, UpdateTicket } from '../../components';

const Ticket = () => {
  const [msg, setMsg] = useState('');
  const [ticket, setTicket] = useState('');
  const { tId } = useParams();

  useEffect(() => {
    const foundTicket = tickets.find(({ id }) => parseInt(tId) === id);

    setTicket(foundTicket);
  }, [msg, tId]);

  const handleOnSubmit = () => {
    alert('form has been submitted');
  };

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>

      <Row>
        <Col className="font-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Open: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="dark">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <UpdateTicket msg={msg} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
