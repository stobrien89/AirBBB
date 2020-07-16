import React from 'react';
import styled from 'styled-components';
import { gray, selected, hover } from './stars'

const RatingContainer = styled.div`
    font-size: 1rem;        
    text-align: center;
    border-radius: 4px;
    padding: 40px 0 10px 0;
    background: white;
`
const RatingBox = styled.div`
    display: flex;
    position: relative;
    background: white;
    justify-content: center;
    flex-direction: row-reverse;
    
    input {
        display: none;
    }

    label {
        cursor: pointer;
        height: 40px;
        width: 40px;
        background-image: url("data:image/svg+xml;charset=UTF-8,${gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${hover}");
    }
`
const RatingTitle = styled.div`
    
`

const Field = styled.div`
    
`



const ReviewForm = props => {
    const ratings = [5, 4, 3, 2, 1].map((score, i) => {
        return (
            <>
                <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={console.log('selected:', score)} id={`rating:${score}`}/>
                <label onClick={props.setRating.bind(this, score)}></label>
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
                    <RatingContainer>
                        <RatingBox>
                            {ratings}
                        </RatingBox>
                    </RatingContainer>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;