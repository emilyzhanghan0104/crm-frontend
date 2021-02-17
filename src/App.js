import React from 'react';

import './App.css';
import { Dashboard, AddTicket, TicketLists, Ticket } from './pages';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div>
      <DefaultLayout>
        {/*  <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
