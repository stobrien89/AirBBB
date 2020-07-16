import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.span`
    display: inline-block;
    position: relative;
    &:before {
        font-family: "FontAwesome";
        content: "\f005 \0020 \f005 \0020 \f005 \0020 \f005 \0020 \f005";
    }
`
const Stars = styled.span`
    position: absolute;
    top: 0;
    left 0;
    color: black;
    overflow: hidden;
    white-space: nowrap;

    &:before {
        font-family: "FontAwesome";
        content: "\f005 \0020 \f005 \0020 \f005 \0020 \f005 \0020 \f005";
    }
`

const Rating = props => {
    const score = (props.score / 5) * 100;

    return (
        <StarContainer>
            <Stars ></Stars>
        </StarContainer>
    )
}

export default Rating;