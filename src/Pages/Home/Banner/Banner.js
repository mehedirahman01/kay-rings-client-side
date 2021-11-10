import React from 'react';
// Import Banner Images
import banner from '../../../images/banner.jpg'
import banner2 from '../../../images/banner2.jpg'


const Banner = () => {
    return (
        <div className="position-relative">
            {/* Carousel */}
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    {/* First Item */}
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption text-white d-none d-md-block position-absolute top-50">
                            <div className="bg-dark bg-opacity-50 py-4">
                                <h3>Autumn-Spring Collections</h3>
                                <h1>WEDDING SEASON 50% OFF</h1>
                                <button className="btn btn-dark btn-outline-light border border-0">Buy Now</button>
                            </div>

                        </div>
                    </div>
                    {/* Second Item */}
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption text-white d-none d-md-block position-absolute top-50">
                            <div className="bg-dark bg-opacity-50 py-4">
                                <h3>Must-have For Your Ring Collection</h3>
                                <h1>70% OFF NEW COLLECTIONS</h1>
                                <button className="btn btn-dark">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;