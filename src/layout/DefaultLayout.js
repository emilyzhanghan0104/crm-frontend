import React from 'react';
import PropTypes from 'prop-types';

import Footer from './partials/Footer.comp';
import Header from './partials/Header.comp';

const DefaultLayout = ({ children }) => (
  <div className="default-layout">
    <header className="header mb-2">
      <Header />
    </header>
    <main className="main">{children}</main>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
