import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: #1976D2;
    padding: 4px;
    width: 120px;
    height: 40px;
    color: #FFFFFF;
    text-transform: capitalize;
    border: none;
    border-radius: 10px;
`

const Button = ({ type, name, value, id, label }) => <Btn type={type} name={name} value={value} id={id} >{label}</Btn>;

Button.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
};

export default Button;