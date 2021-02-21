import React from 'react';
import { Table } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketTable = ({ tickets }) => (
  <Table hover bordered striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Subjects</th>
        <th>Status</th>
        <th>Opened Date</th>
      </tr>
    </thead>
    <tbody>
      {tickets.length ? (
        tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>
              <Link to={`/ticket/${ticket.id}`}>{ticket.subject}</Link>
            </td>
            <td>{ticket.status}</td>
            <td>{ticket.addedAt}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center">
            No Ticket Shown
          </td>
        </tr>
      )}
    </tbody>
  </Table>
);
TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default TicketTable;
