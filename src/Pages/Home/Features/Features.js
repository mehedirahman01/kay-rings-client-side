import React from 'react';
// import Icon
import { IconContext } from 'react-icons';
import { FaCarAlt, FaHeadset, FaShare, FaMoneyCheck } from 'react-icons/fa'

// Features Section
const Features = () => {
    return (
        <IconContext.Provider value={{ size: "2.5em" }}>
            <div className="container my-5">
                <h1 className="my-4 d-block d-md-none">OUR FEATURES</h1>
                <div className="row text-muted">
                    <div className="col-lg-3 col-12">
                        <div className="d-flex">
                            <div>
                                <FaCarAlt />
                            </div>
                            <div className="ps-3 text-start">
                                <p className="fw-bold m-0">FREE SHIPPING</p>
                                <p>Free Shipping on all US orders or orders above 50$</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex">
                            <div>
                                <FaHeadset />
                            </div>
                            <div className="ps-3 text-start">
                                <p className="fw-bold m-0">SUPPORT 24/7</p>
                                <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex">
                            <div>
                                <FaShare />
                            </div>
                            <div className="ps-3 text-start">
                                <p className="fw-bold m-0">30 DAYS RETURN</p>
                                <p>Simply return it within 30 days for an exchange</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="d-flex">
                            <div>
                                <FaMoneyCheck />
                            </div>
                            <div className="ps-3 text-start">
                                <p className="fw-bold m-0">100% PAYMENT SECURE</p>
                                <p>We ensure secure payment with PEV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default Features;