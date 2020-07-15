import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;

    img {
        height: 70px;
        width: 70px;
        margin-bottom: -8px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,.1)
    }
    h1 {
        font-size: 3rem;
    }
`

const TotalReviews = styled.div`
    font-size: 1rem;
    padding: 10px 0;
`

const Average = styled.div`
    padding: 10px 0;
    font-weight: bold;
    font-size 1rem;
`


const Header = props => {
    const { name, image_url, average_score } = props.attributes;
    const total = props.reviews.length;
    
    return (
        <Wrapper>
            <h1><img src={image_url} alt={name}/>Airline name</h1>
            <div className="container">
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className="starrating"></div>
                <Average>{average_score} out of 5</Average>
            </div>
        </Wrapper>
    )
}

export default Header;