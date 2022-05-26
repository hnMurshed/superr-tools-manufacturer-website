import React from 'react';
import About from '../About/About';
import Benner from '../Benner/Benner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <About></About>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;