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
    font-size: 1.5rem;
    padding-bottom: 20px;
    font-weight: bold;
`

const Field = styled.div`
    border-radius: 4px;

    input {
        width: 95%;
        margin: 12px 0;
        padding: 12px;
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid black;
    }

    textarea {
        min-height: 80px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid black;
        margin: 12px 0;
        padding: 12px;
    }
`

const Wrapper = styled.div`
    height: 100vh;
    background: #333;
    padding: 20px;
    padding-top: 100px;
`

const SubmitButton = styled.button`
    width: 100%;
    color: white;
    background: #333
    padding: 12px;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #333;
    transition: ease-in-out 0.1s;
    &:hover {
        background: #fff;
        color: black;
        border: 1px solid #fff;
    }
`

const Headline = styled.div`
    padding: 20px;
    font-size: 1.5rem;
    font-weight: bold;
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
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <Headline>Have you flown with {props.attributes.name}? Please share your experience!</Headline>
                <Field>
                    <input type="text" value={props.review.title} name="title" placeholder="Review Title" onChange={props.handleChange}/>
                </Field>
                <Field>
                    <input type="text" value={props.review.description} name="description" placeholder="Description" onChange={props.handleChange}/>
                </Field>
                <Field>
                    <RatingTitle>Your Rating</RatingTitle>
                    <RatingContainer>
                        <RatingBox>
                            {ratings}
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitButton type="submit">Submit Review</SubmitButton>
            </form>
        </Wrapper>
    )
}

export default ReviewForm;