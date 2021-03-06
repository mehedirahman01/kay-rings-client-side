import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const SingleReview = (props) => {
    const { singleReview } = props
    const showRating = n => {
        var elements = []
        for (let i = 0; i < n; i++) {
            elements.push(<FaStar></FaStar>)
        }
        return elements
    }

    return (
        // Carousel Item
        <div className="carousel-item" data-bs-interval="5000">
            <div>
                <div className="container py-5">
                    <IconContext.Provider value={{ size: "1.5em", color: "orange" }}>
                        <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                            <div className="bg-light bg-opacity-75 w-50 overflow-auto py-3">
                                <h1>{singleReview?.name}</h1>
                                <p>{singleReview?.reviewText}</p>
                                {showRating(singleReview?.rating)}
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;