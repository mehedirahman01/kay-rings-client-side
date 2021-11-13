import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeCollection from '../HomeCollection/HomeCollection/HomeCollection';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCollection></HomeCollection>
            <Features></Features>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;