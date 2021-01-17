import React from 'react';
import PropTypes from 'prop-types';

const H1 = styled.h1`
    color: ${color};
`;

const H2 = styled.h2`
    color: ${color};
`;

const H3 = styled.h3`
    color: ${color};
`;

const H4 = styled.h4`
    color: ${color};
`;

const H5 = styled.h5`
    color: ${color};
`;

const H6 = styled.h6`
    color: ${color};
`;

const P = styled.p`
    color: ${color};
`;

export const H1 = ({ children }) => <H1>{children}</H1>;
H1.propTypes = {
    children: PropTypes.string,
};

export const H2 = ({ children }) => <H2>{children}</H2>;
H2.propTypes = {
    children: PropTypes.string,
};

export const H3 = ({ children }) => <H3>{children}</H3>;
H3.propTypes = {
    children: PropTypes.string,
};

export const H4 = ({ children }) => <H4>{children}</H4>;
H4.propTypes = {
    children: PropTypes.string,
};

export const H5 = ({ children }) => <H5>{children}</H5>;
H5.propTypes = {
    children: PropTypes.string,
};

export const H6 = ({ children }) => <H6>{children}</H6>;
H6.propTypes = {
    children: PropTypes.string,
};