import React from 'react';

const ReviewForm = props => {
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
                        {/* {star rating here} */}
                    </div>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;