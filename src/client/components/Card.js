import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';
import Row from './Row';
import { ColAuto, Col } from './Col';
import Badge from './Badge';
import { Paragraph } from './Typography';
import Button from './Button';

const CardContainer = styled.div `
    box-shadow: 5px 5px 8px #E0E0E0;
    border: 1px solid #F5F5F5;
    padding: 16px;
    border-radius: 10px;
    margin: ${props => props.margin};
`

const src = 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80';

export const Card = ({ margin }) => {
    return(
        <CardContainer margin={margin}>
            <Row>
                <ColAuto>
                    <Avatar src={src} width={80} height={80} alt="" />
                </ColAuto>
                <Col>
                    <Badge text="animal" />
                    <Paragraph>Chuck Norris is the reason why babies cry.</Paragraph>
                    <Button label="view joke"/>
                </Col>
            </Row>
        </CardContainer>
    )
};

Card.propTypes = {
    margin: PropTypes.string,
};

export const CardItem = ({ label, onClick, margin }) => {
    return(
        <CardContainer margin={margin} onClick={onClick}>
            <Row>
                <Col>
                    <Paragraph marginBottom={0}>{label}</Paragraph>
                </Col>
                <ColAuto>
                    <Paragraph transform="capitalize" marginBottom={0}>&gt;</Paragraph>
                </ColAuto>
            </Row>
        </CardContainer>
    )
};

CardItem.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    margin: PropTypes.string,
};

export default { Card, CardItem };

// https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80