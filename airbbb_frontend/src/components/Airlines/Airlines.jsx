import React, { useState, useEffect } from 'react';
import AirlineCard from './AirlineCard';
import axios from 'axios';
import styled from 'styled-components';

const AirlineWrapper = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
const AirlineHeader = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 3 rem;
    }
`
const AirlineSubHeader = styled.div`
    font-size: 2rem;
    font-weight: 400;
`
const AirlineContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
`


const Airlines = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/airlines')
        .then(res => setAirlines(res.data.data))
        .catch(res => console.log(res))
    }, [airlines.length])

    const airlineList = airlines.map( item => {
        return (
            <AirlineCard 
                key={item.attributes.name}
                attributes={item.attributes} 
            /> 
            )
    })
    
    return (
        <AirlineWrapper>
            <AirlineHeader>
                <h1>AirBBB</h1>
                <AirlineSubHeader>Your source for unfiltered, unbiased airline reviews.</AirlineSubHeader>
            </AirlineHeader>
            <AirlineContainer>
                {airlineList}
            </AirlineContainer>
        </AirlineWrapper>
    )
}

export default Airlines;