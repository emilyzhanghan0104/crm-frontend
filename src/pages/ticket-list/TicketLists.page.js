import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PageBreadcrumb, SearchForm, TicketTable } from '../../components';

import tickets from '../../assets/data/dummy-tickets.json';

const TicketLists = () => {
  const [str, setStr] = useState('');
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const searchTickets = (sttr) => {
    const displayTickets = tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTickets(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <LinkContainer to="/add-ticket">
            <Button variant="dark">Add New Ticket</Button>
          </LinkContainer>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
