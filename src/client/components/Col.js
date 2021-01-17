import React from 'react';
import PropTypes from 'prop-types';

export const Col = ({ children }) => <div className="col">{children}</div>;
Col.propTypes = {
    children: PropTypes.any,
};

export const ColAuto = ({ children }) => <div className="col-auto">{children}</div>;
ColAuto.propTypes = {
    children: PropTypes.any,
};

export const Col6 = ({ children }) => <div className="col-6">{children}</div>;
Col6.propTypes = {
    children: PropTypes.any,
};

export const Col12 = ({ children }) => <div className="col-12">{children}</div>;
Col12.propTypes = {
    children: PropTypes.any,
};

export default { Col, ColAuto, Col6, Col12 };