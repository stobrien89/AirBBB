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
                    <ReviewForm/>
                </Column>
            </>
         }
        </Wrapper>
        )
}

export default Airline;