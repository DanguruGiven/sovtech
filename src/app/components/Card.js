import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';
import Row from './Row';
import { ColAuto, Col } from './Col';
import { Paragraph } from './Typography';

import { Link } from 'react-router-dom';

const CardContainer = styled.div `
    box-shadow: 5px 5px 8px #E0E0E0;
    border: 1px solid #F5F5F5;
    padding: 16px;
    border-radius: 10px;
    margin: ${props => props.margin};
`

export const Card = ({ margin, text, src }) => {
    return(
        <CardContainer margin={margin}>
            <Row>
                <ColAuto>
                    <Avatar src={src} width={80} height={80} alt="" />
                </ColAuto>
                <Col>
                    <Paragraph>{text}</Paragraph>
                </Col>
            </Row>
        </CardContainer>
    )
};

Card.propTypes = {
    margin: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.any,
};

export const CardItem = ({ label, onClick, margin, to }) => {
    return(
        <CardContainer margin={margin} onClick={onClick}>
            <Row>
                <Col>
                    <Paragraph marginBottom={0}>{label}</Paragraph>
                </Col>
                <ColAuto>
                    <Link to={to}>&gt;</Link>
                </ColAuto>
            </Row>
        </CardContainer>
    )
};

CardItem.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    margin: PropTypes.string,
    to: PropTypes.string,
};

export { Card, CardItem };