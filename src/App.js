import React from 'react';

import './App.css';
import { Dashboard, AddTicket } from './pages';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div>
      <DefaultLayout>
        {/*  <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
