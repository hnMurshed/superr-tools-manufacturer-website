import React from 'react';
import { useForm } from 'react-hook-form';

const About = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-5'>
            <div className="container mx-auto">

                <div class="hero">
                    <div class="hero-content items-start flex-col lg:flex-row">
                        <div className='basis-1/2'>
                            <h2 className='text-4xl mb-4 text-center font-bold'>About <span className='text-secondary'>Superr Tools</span></h2>
                            <p className='my-4'>The Alok Tools Brand is 40 years old and an ISO 9001:2015 certified company Headquartered in Gurugram, Haryana, INDIA.  Ozar Tools, the global tool brand from the house of ALOK INTERNATIONAL PVT. LTD., is a world-renowned high-quality Tools manufacturing company. We are a leading supplier of ever-increasing “range” of high-quality tools used in a variety of markets and applications throughout the world.</p>
                            <p>It’s something of a cliché, but we genuinely are big enough to cope and small enough to care. Many of our team have backgrounds in manufacturing & construction, so we know only too well the importance of a reliable supplier.</p>
                            <button class="btn btn-outline btn-secondary mt-5">Learn More</button>
                        </div>
                        <div className='bg-secondary p-4 pb-5 rounded-xl basis-1/3 text-center'>
                            <h4 className='text-center text-2xl text-white font-bold mb-5'>Request a callback</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <input type='text' id='name' name='name' placeholder='Your Name*' className='input w-full' {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                    {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <input type='text' id='number' name='number' placeholder='Your Name*' className='input w-full' {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                    {errors.number?.type === 'required' && <p className='text-red-400'>{errors.number.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <input type='email' id='email' name='email' placeholder='Your Email*' className='input w-full' {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        }
                                    })} />
                                    {errors.email?.type === 'required' && <p className='text-red-400'>{errors.email.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <input type='text' id='country' name='country' placeholder='Your Country' className='input w-full' {...register("country", {
                                        required: {
                                            value: false,
                                            message: 'Country is required'
                                        }
                                    })} />
                                    {errors.country?.type === 'required' && <p className='text-red-400'>{errors.country.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <select class="select w-full" {...register("sellerType", {
                                        required: {
                                            value: true,
                                            message: 'Please select one option'
                                        }
                                    })}>
                                        <option disabled selected>Please select one</option>
                                        <option value='Re-seller'>Re-seller</option>
                                        <option value='End User'>End User</option>
                                    </select>
                                    {errors.country?.type === 'required' && <p className='text-red-400'>{errors.sellerType.message}</p>}
                                </div>
                                <div className='mb-3'>
                                    <textarea placeholder='Write your message*' className='input w-full h-20' {...register("message", {
                                        required: {
                                            value: true,
                                            message: 'Message is required'
                                        }
                                    })} />
                                    {errors.country?.type === 'required' && <p className='text-red-400'>{errors.message.message}</p>}
                                </div>

                                <input type="submit" value='Request A Callback' className='btn btn-wide uppercase text-white bg-black border-0' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;