import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '../../layout/DefaultLayout';

const isAuth = true;
const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={() => (isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />)}
  />
);

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
