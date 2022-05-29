import React from 'react';
import worldMap from '../../../images/benner/world-map.jpg';

const GlobalCustomers = () => {
    return (
        <section className='py-10 bg-[#FCFCFC]'>
            <div className="custom-container">
                <h2 style={{maxWidth: '430px'}} className='text-center text-3xl font-bold border-b-2 border-red-500 mb-4 pb-5 mx-auto'>Our Global Customer Base</h2>
                <img src={worldMap} alt="Our global customers base world map" />
            </div>
        </section>
    );
};

export default GlobalCustomers;