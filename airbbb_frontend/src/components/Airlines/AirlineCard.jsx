import React from 'react';

const AirlineCard = (props) => {
    return (
        <div>
            <div className="airline-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className="airline-name">{props.attributes.name}</div>
            <div className="airline-score">{props.attributes.avg_score}</div>
            <div className="airline-link">
                <a href={`/airlines/${props.attributes.slug}`}>View Airline</a>
            </div>
        </div>
    )
}

export default AirlineCard;