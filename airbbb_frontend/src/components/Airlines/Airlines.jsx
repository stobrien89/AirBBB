import React, { useState, useEffect } from 'react';
import AirlineCard from './AirlineCard';
import axios from 'axios';

const Airlines = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/airlines.json')
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
        <div className="wrapper">
            <header>
                <h1>AirBBB</h1>
                <p>Your source for unfiltered, unbiased airline reviews.</p>
            </header>
            <div className="container">
                <ul>{airlineList}</ul>
            </div>
        </div>
    )
}

export default Airlines;