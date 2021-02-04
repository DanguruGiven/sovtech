import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
  color: ${props => props.color};
  text-align: ${props => props.align};
`

const H2 = styled.h2`
    color: ${props => props.color};
    text-align: ${props => props.align};
`;

const H3 = styled.h3`
    color: ${props => props.color};
    text-align: ${props => props.align};
`;

const H4 = styled.h4`
    color: ${props => props.color};
    text-align: ${props => props.align};
`;

const H5 = styled.h5`
    color: ${props => props.color};
    text-align: ${props => props.align};
`;

const H6 = styled.h6`
    color: ${props => props.color};
    text-align: ${props => props.align};
`;

const P = styled.p`
    color: ${props => props.color};
    text-align: ${props => props.align};
    margin-bottom: ${props => props.marginBottom};
    text-transform: ${props => props.transform};
`;

const Typography1 = ({ children, color, align }) => <H1 color={color} align={align}>{children}</H1>;

Typography1.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Typography2 = ({ children, color, align }) => <H2 color={color} align={align}>{children}</H2>;

Typography2.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Typography3 = ({ children, color, align }) => <H3 color={color} align={align}>{children}</H3>;

Typography3.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Typography4 = ({ children, color, align }) => <H4 color={color} align={align}>{children}</H4>;

Typography4.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Typography5 = ({ children, color, align }) => <H5 color={color} align={align}>{children}</H5>;

Typography5.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Typography6 = ({ children, color, align }) => <H6 color={color} align={align}>{children}</H6>;

Typography6.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
};

export const Paragraph = ({ children, color, align, marginBottom, transform }) => <P color={color} align={align} marginBottom={marginBottom} transform={transform}>{children}</P>;

Paragraph.propTypes = {
    children: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.string,
    marginBottom: PropTypes.number,
    transform: PropTypes.string,
};

export default Typography1;