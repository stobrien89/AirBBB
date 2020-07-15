import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    border: 1px solid black;
    background: yellow;
`
const AirlineLogo = styled.div`
    text-align: center;
    padding-top: 10px;
    width: 50px;
    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid black;
    }
`
const AirlineName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkContainer = styled.div`
    margin: 30px 0 20px 0;
    height 50px;

    a {
        width: 100%;
        text-decoration: none;
        color: white;
        background: black;
        border-radius: 5px;
        border: 1px solid black;
    }
`

const AirlineCard = props => {
    return (
        <Card>
            <AirlineLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </AirlineLogo>
            <AirlineName>{props.attributes.name}</AirlineName>
            <div className="airline-score">{props.attributes.avg_score}</div>
            <LinkContainer>
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
            </LinkContainer>
        </Card>
    )
}

export default AirlineCard;