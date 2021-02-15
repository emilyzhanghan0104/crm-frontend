import React from 'react';

import './App.css';
import Entry from './pages/entry/Entry.page';
import Dashboard from './pages/dashboard/Dashboard.comp';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
