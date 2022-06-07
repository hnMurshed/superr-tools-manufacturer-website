import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section>
            <div className='custom-container py-8'>
                <div class="drawer drawer-mobile gap-x-5">
                    <input id="drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        {/* <!-- Page content here --> */}
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="">
                                <h2 className='text-4xl font-semibold '>Md Murshedul Karim</h2>
                                <h4 className='text-2xl'>Web Developer</h4>
                            </div>
                            <div className="flex flex-col">
                                <span>(+880) 1882820824</span>
                                <span>murshedbinamir@gmail.com</span>
                                <span>4350, Fatikchhari, Chattagram, Bangladesh</span>
                                <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href='https://www.linkedin.com/in/md-murshedul-227747192/' target='_blank' rel='noreferrer'>linkedin.com/in/md-murshedul-227747192/</a>
                                <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href='https://github.com/hnMurshed' target='_blank' rel='noreferrer'>github.com/hnMurshed</a>

                            </div>
                        </div>
                        <div className="">
                            <h3 className='uppercase text-2xl font-semibold border-b-2 border-slate-800 my-5'>Projects</h3>
                            <div className="mb-5">
                                <div className='flex items-center text-xl'>
                                    <span className='font-bold mr-1'>Vegetable House -</span>
                                    <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href="https://vegetable-house-by-murshedul.web.app/" target='_blank' rel='noreferrer'>Live site link</a>
                                    <span className='mx-2'>|</span>
                                    <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href="https://github.com/hnMurshed/warehouse-management-website-client" target='_blank' rel='noreferrer'>Client-side code</a>
                                    <span className='mx-2'>|</span>
                                    <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href="https://github.com/hnMurshed/vegetable-house-server" target='_blank' rel='noreferrer'>Server-side code</a>
                                </div>
                                <ul className='pl-7 list-styled my-5'>
                                    <li>Developed as an inventory management website for an online vegetable seller.</li>
                                    <li>Incorporated with managing inventories, adding new items, updating stock, delivering ordered stock, and sign in/up/out system.</li>
                                    <li>Added admin route and user route, secured user sensitive data using JWT</li>
                                </ul>
                                <p className='pl-7'><span className='font-bold'>Used Technologies:</span> HTML, CSS, JavaScript, React, Bootstrap, Firebase, Axios, React hook form, NodeJs, Express, MongoDB, etc.</p>
                            </div>
                            <div className="">
                                <div className='flex items-center text-xl'>
                                    <span className='font-bold mr-1'>Best Photography -</span>
                                    <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href="https://best-photography-by-murshedul.web.app/" target='_blank' rel='noreferrer'>Live site link</a>
                                    <span className='mx-2'>|</span>
                                    <a className=' text-secondary border-b-2 border-transparent hover:border-secondary' href="https://github.com/hnMurshed/best-photography" target='_blank' rel='noreferrer'>Code Link</a>
                                </div>
                                <ul className='pl-7 list-styled my-5'>
                                    <li>Developed and designed for a single person to sell photography service</li>
                                    <li>Implemented sign-in, signup, and sign-out system with firebase authentication.</li>
                                    <li>Added admin route and user route, secured user sensitive data using JWT</li>
                                </ul>
                                <p className='pl-7'><span className='font-bold'>Used Technologies:</span> HTML, CSS, JavaScript, React, Bootstrap, Firebase, etc.</p>
                            </div>
                        </div>
                        <div className="my-5">
                            <h3 className='uppercase text-2xl font-semibold border-b-2 border-slate-800'>Certifications</h3>
                            <div className="flex items-center my-5">
                                <span className='font-bold mr-4'>June, 2022</span>
                                <p className='mr-1'>Complete Web Development Course by Jhankar Mahbub -</p>
                                <a href="https://web.programming-hero.com/" target='_blank' rel='noreferrer'>Programming Hero</a>
                            </div>
                        </div>
                    </div>
                    <div class="drawer-side">
                        <label htmlFor="drawer" class="drawer-overlay"></label>
                        <div class="p-4 overflow-y-auto w-80 bg-[#323B4C] text-white">
                            {/* <!-- Sidebar content here --> */}
                            <div className="my-5">
                                <img className='rounded-full w-48 mx-auto' src="https://i.ibb.co/HBq3w0k/fiverr-profile.jpg" alt="Murshedul" />
                            </div>
                            <div className='mb-8'>
                                <h4 className='text-xl text-semibold border-b-2 border-slate-300 mb-5 pb-1'>Education</h4>
                                <div className="flex flex-col text-slate-300 mb-4">
                                    <h5 className='text-[18px] text-white'>BA (Hons)</h5>
                                    <span>Political Science</span>
                                    <span>Chittagong College</span>
                                    <span>2020-2024</span>
                                </div>
                                <div className="flex flex-col text-slate-300">
                                    <h5 className='text-[18px] text-white'>Fazil (Degree)</h5>
                                    <span>Arabic</span>
                                    <span>Jamea Ahmadia Sunnia Alia</span>
                                    <span>2019-2022</span>
                                </div>
                            </div>
                            <div className='mb-8'>
                                <h4 className='text-xl text-semibold border-b-2 border-slate-300 mb-5 pb-1'>Skills</h4>
                                <div className="flex flex-col text-slate-300 mb-4">
                                    <h5 className='text-[18px] text-white'>// Professional</h5>
                                    <span>PSD to HTML</span>
                                    <span>React Application</span>
                                    <span>Shopify Managment</span>
                                    <span>Stunning Landing Page</span>
                                    <span>Shopify Theme Customization</span>
                                    <span>Wordpress Theme Customization</span>
                                </div>
                                <div className="flex flex-col text-slate-300">
                                    <h5 className='text-[18px] text-white'>// Technical</h5>
                                    <span>HTML / HTML5</span>
                                    <span>CSS / CSS3</span>
                                    <span>Bootstrap</span>
                                    <span>Tailwind css / component library</span>
                                    <span>JavaScript</span>
                                    <span>React (JS library)</span>
                                    <span>Note.js</span>
                                    <span>MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;