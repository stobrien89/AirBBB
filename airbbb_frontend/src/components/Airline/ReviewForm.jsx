import React from 'react';

const ReviewForm = props => {
    return (
        <div className="wrapper">
            <form>
                <p>Have you flown with (airline name) ? Please share your experience!</p>
                <div className="field">
                    <input type="text"/>
                </div>
                <div className="field">
                    <input type="text"/>
                </div>
                <div className="field">
                    <input type="text"/>
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