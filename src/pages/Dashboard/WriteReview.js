import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const WriteReview = () => {
    const [user, loading] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-xl text-center'>Write a review</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="name">Full Name <span className=' text-slate-400'>(Public)</span></label>
                    <input id='name' type='text' value={user.displayName} placeholder='Your Name (Public)*' className=' w-full border p-2' {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })} />
                    {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email Address <span className=' text-slate-400'>(Private)</span></label>
                    <input type='email' id='email' value={user.email} placeholder='Email Address (Private)*' className=' w-full border p-2' {...register("email", {
                        required: {
                            value: true,
                            message: 'email is required'
                        }
                    })} />
                    {errors.email?.type === 'required' && <p className='text-red-400'>{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="rating">Rating</label>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="reviewTitle">Review Title</label>
                    <input type='text' id='reviewTitle' placeholder='Give your reveiw a title' className=' w-full border p-2' {...register("reviewTitle", {
                        required: {
                            value: false,
                            message: 'reviewTitle is required'
                        }
                    })} />
                    {errors.reviewTitle?.type === 'required' && <p className='text-red-400'>{errors.reviewTitle.message}</p>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="review">Review</label>
                    <textarea id='review' placeholder='Write your review here*' className=' w-full border p-2 h-20' {...register("review", {
                        required: {
                            value: true,
                            message: 'review is required'
                        }
                    })} />
                    {errors.review?.type === 'required' && <p className='text-red-400'>{errors.review.message}</p>}
                </div>

                <input type="submit" value='Submit Review' className='btn btn-accent uppercase text-white border-0' />
            </form>
        </div>
    );
};

export default WriteReview;