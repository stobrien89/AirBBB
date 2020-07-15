import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airlines = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/airlines.json')
        .then(res => console.log(res.data))
        .catch(res => console.log(res.data))
    }, [airlines.length])
    
    return <div>Testing the Airlines index view</div>
}

export default Airlines;