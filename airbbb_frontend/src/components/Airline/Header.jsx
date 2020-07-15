import React from 'react';

const Header = props => {
    const { name, image_url, average_score } = props.attributes;
    const total = props.reviews.length;
    
    return (
        <div className="wrapper">
            <h1><img src={image_url} alt={name}/>Airline name</h1>
            <div className="container">
                <div className="totalreviews">{total} User Reviews</div>
                <div className="starrating"></div>
                <div className="totalof">{average_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header;