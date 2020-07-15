import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const Airline = (props) => {
    const [airline, setAirline] = useState({});
    const [review, setReview] = useState({});
    const [rendered, setRendered] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug;
        const url = `http://localhost:3000/api/v1/airlines/${slug}`

        axios.get(url)
        .then(res => {
            setAirline(res.data);
            setRendered(true);
        })
        .catch(res => console.log(res))
    }, [])
    
    return (
        <div className="wrapper">
            <div className="column">
                {rendered && <Header 
                    attributes={airline.data.attributes}
                    reviews={airline.included}
                    />
                }
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">Review form</div>
            </div>
        </div>
        )
}

export default Airline;