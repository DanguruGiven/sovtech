import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => <div className={"row reverse-row"}>{children}</div>;

Row.propTypes = {
    children: PropTypes.any,
};

export default Row;