import React from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div`
    font-size: 1rem;        
    text-align: center;
    border-radius: 4px;
    padding: 40px 0 10px 0;
    background: white;
`
const RatingBox = styled.div`

`
const RatingTitle = styled.div`
    
`



const ReviewForm = props => {
    const ratings = [5, 4, 3, 2, 1].map((score, i) => {
        return (
            <>
                <input type="radio" value={score} name="rating" onChange={console.log('selected:', score)} id={`rating:${score}`}/>
                <label></label>
            </>
        )
    })
    
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <p>Have you flown with {props.attributes.name}? Please share your experience!</p>
                <div className="field">
                    <input type="text" value={props.review.title} name="title" placeholder="Review Title" onChange={props.handleChange}/>
                </div>
                <div className="field">
                    <input type="text" value={props.review.description} name="description" placeholder="Description" onChange={props.handleChange}/>
                </div>
                <div className="field">
                    <div className="ratingcontainer">
                        <p className="titletext"></p>
                        {ratings}
                    </div>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;