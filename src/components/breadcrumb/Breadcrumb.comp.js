import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PageBreadcrumb = ({ page }) => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
  </Breadcrumb>
);

PageBreadcrumb.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageBreadcrumb;
