import React from 'react';
import PropTypes from 'prop-types';

export const Col = ({ children, style }) => <div className="col" style={style}>{children}</div>;
Col.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

export const ColAuto = ({ children, style }) => <div className="col-auto" style={style}>{children}</div>;
ColAuto.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

export const Col6 = ({ children, style }) => <div className="col-6" style={style}>{children}</div>;
Col6.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

export const Col12 = ({ children, style }) => <div className="col-12" style={style}>{children}</div>;
Col12.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

export const ColR = ({ children, style }) => <div className="col-12 col-md-6 col-lg-6" style={style}>{children}</div>;
ColR.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
};

export { Col, ColAuto, Col6, Col12 };