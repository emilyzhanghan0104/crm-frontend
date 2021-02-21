import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { TicketTable, PageBreadcrumb } from '../../components';
import tickets from '../../assets/data/dummy-tickets.json';

const Dashboard = () => (
  <Container>
    <Row>
      <Col>
        <PageBreadcrumb page="Dashboard" />
      </Col>
    </Row>
    <Row>
      <Col className="text-center mt-5 mb-2">
        <LinkContainer to="/add-ticket">
          <Button variant="dark" style={{ fontSize: '2rem', padding: '10px 30px' }}>
            Add New Ticket
          </Button>
        </LinkContainer>
      </Col>
    </Row>
    <Row>
      <Col className="text-center mb-2">
        <div>Total tickets: 50</div>
        <div>Pending tickets: 50</div>
      </Col>
    </Row>
    <Row>
      <Col className="mt-2">Recently Added Tickets</Col>
    </Row>
    <Row>
      <Col className="recent-ticket">
        <TicketTable tickets={tickets} />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
