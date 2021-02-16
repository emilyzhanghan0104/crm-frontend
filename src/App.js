import React from 'react';

import './App.css';
import { Dashboard, AddTicket, TicketLists } from './pages';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div>
      <DefaultLayout>
        {/*  <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
