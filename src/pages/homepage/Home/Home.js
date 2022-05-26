import React from 'react';
import About from '../About/About';
import Benner from '../Benner/Benner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Tools></Tools>
            <About></About>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;