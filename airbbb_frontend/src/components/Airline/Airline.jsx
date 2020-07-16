import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header';
import ReviewForm from './ReviewForm';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: auto;
    margin-right: auto;
`

const Column = styled.div`
    overflow: scroll;
    height: 100vh;
    background: yellow;

    &last-child {
        background: black;
    }
`

const Main = styled.div`
    padding-left: 50px;
`


const Airline = props => {
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

    const handleChange = (event) => {
        event.preventDefault();

        setReview(Object.assign({}, review, {[event.target.name]: event.target.value}));
        console.log('review:', review)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const airline_id = airline.data.id;
        axios.post('http://localhost:3000/api/v1/reviews', {review, airline_id})
        .then(res => {
            const included = [...airline.included, res.data];
            setAirline({...airline, included});
            setReview({title: '', description: '', score: 0})
        })
        .catch(res => console.log(res))
    }

    const setRating = (score, event) => {
        event.preventDefault();

        setReview({...review, score})
    }
    
    return (
        <Wrapper>
            {
            rendered && 
            <> 
                <Column>
                    <Main>
                        <Header 
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                            />
                        <div className="reviews"></div>
                    </Main>
                </Column>
                <Column>
                    <ReviewForm 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        attributes={airline.data.attributes}
                        review={review}
                        setRating={setRating}
                    />
                </Column>
            </>
         }
        </Wrapper>
        )
}

export default Airline;