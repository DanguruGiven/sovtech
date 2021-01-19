import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    display: block;
    margin: auto;
`

const Avatar = ({ src, width, height, alt }) => <Img src={src} width={width} height={height} alt={alt} />;

Avatar.propTypes = {
    src: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
};

export default Avatar;