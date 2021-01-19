import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Search = styled.input`
    border: 1px solid #1976D2;
    width: 250px;
    border-radius: 10px;
    height: 40px;
    padding: 8px;
    margin: 20px auto;
`

export const SearchField = ({ value, type, placeholder, id, autoComplete, name, onChange }) => <Search value={value} type={type} placeholder={placeholder} id={id} autoComplete={autoComplete} name={name} onChange={onChange} />;
SearchField.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default { SearchField };