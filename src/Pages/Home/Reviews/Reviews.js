import React from 'react';
import banner from '../../../images/reviews2.jpeg'

const bannerStyle = {
    backgroundImage: `url(${banner})`,
    height: "100vh",
    backgroundSize: "auto",
    backgroundRepeat: 'no-repeat'
}



const Reviews = () => {
    return (
        <div className="py-5" style={bannerStyle}>
            <h1>Customer Feedback</h1>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner text-dark">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div>
                            <div className="container py-5">
                                <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                                    <div className="bg-light bg-opacity-75 w-50 overflow-auto py-3">
                                        <h1>Sohel</h1>
                                        <p>This is the best shop</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="container py-5">
                            <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                                <div className="bg-light bg-opacity-75 w-50 overflow-auto py-3">
                                    <h1>Sohel</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iure perspiciatis! Reprehenderit quisquam illo recusandae placeat dolorem. Nemo quae, aliquid maiores qui cum atque, corporis, sapiente accusantium ipsa nesciunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="container py-5">
                            <div className="d-flex justify-content-center" style={{ height: "250px" }}>
                                <div className="bg-light bg-opacity-75 w-50 overflow-auto py-3">
                                    <h1>Sohel</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iure perspiciatis! Reprehenderit quisquam illo recusandae placeat dolorem. Nemo quae, aliquid maiores qui cum atque, corporis, sapiente accusantium ipsa nesciunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
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