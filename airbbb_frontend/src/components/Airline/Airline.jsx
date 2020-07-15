import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header';

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
    
    return (
        <Wrapper>
            <Column>
                <Main>
                    {rendered && <Header 
                        attributes={airline.data.attributes}
                        reviews={airline.included}
                        />
                    }
                    <div className="reviews"></div>
                </Main>
            </Column>
            <Column>
                <div className="review-form">Review form</div>
            </Column>
        </Wrapper>
        )
}

export default Airline;