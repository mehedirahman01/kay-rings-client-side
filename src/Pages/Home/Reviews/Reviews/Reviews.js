import React, { useEffect } from 'react';
import { useState } from 'react';
import reviews from '../../../../images/reviews2.jpeg'
import SingleReview from '../SingleReview/SingleReview';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';


// Background Image Style
const backgroundStyle = {
    backgroundImage: `url(${reviews})`,
    backgroundSize: "auto",
    backgroundRepeat: 'no-repeat'
}

const Reviews = () => {
    // Set State
    const [reviewsCollection, setReviewsCollection] = useState([])

    // Load Data
    useEffect(() => {
        fetch("https://frozen-chamber-03076.herokuapp.com/review")
            .then(res => res.json())
            .then(data => {
                setReviewsCollection(data)
            })
            .catch(error => console.log(error))
    }, [])

    // Get First Review
    const firstReview = reviewsCollection[0]

    // Rating function
    const showRating = n => {
        var elements = []
        for (let i = 0; i < n; i++) {
            elements.push(<FaStar></FaStar>)
        }
        return elements
    }

    return (
        <div className="py-5" style={backgroundStyle}>
            <h1>Customer Feedback</h1>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner text-dark">
                    {/* First Item */}
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div>
                            <div className="container py-5">
                                <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                                    <IconContext.Provider value={{ size: "1.5em", color: "orange" }}>
                                        <div className="bg-light bg-opacity-75 w-50 overflow-auto py-3">
                                            <h1>{firstReview?.name}</h1>
                                            <p>{firstReview?.reviewText}</p>
                                            {showRating(firstReview?.rating)}
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rest of the Items */}
                    {
                        reviewsCollection.slice(1).map(singleReview => <SingleReview
                            key={singleReview._id}
                            singleReview={singleReview}
                        ></SingleReview>)
                    }

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Reviews;