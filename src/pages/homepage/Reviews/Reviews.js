import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import { FaUser } from "react-icons/fa";
import Review from '../../shared/Review/Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://mysterious-ravine-35179.herokuapp.com/getreviews').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='py-10'>
            <div className="custom-container">
                <h2 style={{ maxWidth: '540px' }} className='text-center text-3xl font-bold capitalize border-b-2 border-accent mb-3 pb-8 mx-auto'>What our clients say about use</h2>
                <p className='text-center mb-10'>We have worked with hundreds of different clients around the globe. Check what a selection of them have to say about us.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reviews.map(review => <div
                            key={review._id}
                            className='flex flex-col justify-between border-2 border-slate-400 hover:border-slate-900 rounded-md p-6'
                        >
                            <div className='mb-4'>
                                <div className="flex items-center gap-1 mb-4">
                                    <FaUser></FaUser>
                                    <h5 className='text-xl font-semibold'>{review.name}</h5>
                                </div>
                                <q>{review.review}</q>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>{review.reviewTitle}</span>
                                <div className='flex items-center'>
                                    {
                                        [...Array(review.rating).keys()].map(key => <Review key={key}></Review>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;