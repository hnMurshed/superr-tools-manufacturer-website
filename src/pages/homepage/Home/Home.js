import React from 'react';
import About from '../About/About';
import Benner from '../Benner/Benner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import GlobalCustomers from '../GlobalCustomers/GlobalCustomers';
import Tools from '../Tools/Tools';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Tools></Tools>
            <About></About>
            <BusinessSummary></BusinessSummary>
            <WhyChooseUs></WhyChooseUs>
            <GlobalCustomers></GlobalCustomers>
        </div>
    );
};

export default Home;