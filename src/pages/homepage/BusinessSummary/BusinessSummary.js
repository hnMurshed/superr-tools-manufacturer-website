import React from 'react';
import { FaFlag, FaTruck, FaUsers } from "react-icons/fa";
import feedbackIcon from '../../../images/icons/feedback.png';

const BusinessSummary = () => {
    return (
        <section className='py-8 bg-neutral'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold text-accent text-center mb-4 capitalize'>What makes us different from others</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                    <div className="card-body flex flex-col justify-center items-center">
                        <FaFlag className='text-6xl text-accent mb-4'></FaFlag>
                        <h2 className="text-6xl font-bold">57+</h2>
                        <span className='text-accent text-2xl'>Countries</span>
                    </div>

                    <div className="card-body flex flex-col justify-center items-center">
                        <FaTruck className='text-6xl text-accent mb-4'></FaTruck>
                        <h2 className="text-6xl font-bold">399+</h2>
                        <span className='text-accent text-2xl'>Completed Projects</span>
                    </div>

                    <div className="card-body flex flex-col justify-center items-center">
                        <FaUsers className='text-6xl text-accent mb-4'></FaUsers>
                        <h2 className="text-6xl font-bold">143+</h2>
                        <span className='text-accent text-2xl'>Happy Clients</span>
                    </div>

                    <div className="card-body flex flex-col justify-center items-center">
                        <img src={feedbackIcon} alt="Feedback Icon" className='mb-4' />
                        <h2 className="text-6xl font-bold">200+</h2>
                        <span className='text-accent text-2xl'>Feedbacks</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;