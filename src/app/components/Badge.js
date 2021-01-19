import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.div`
    background-color: #E1F5FE;
    padding: 4px;
    border-radius: 10px;
    width: 120px;
    text-align: center;
    color: #1E88E5;
    font-weight: 500;
    text-transform: capitalize;
    float: right;
`

const Badge = ({ text }) => <Span>{text}</Span>;

Badge.propTypes = {
    text: PropTypes.string,
};

export default Badge;