import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';

const Portfolio = () => {
    return (
        <section>
            <div className='custom-container py-8'>
                <h2 className='text-center text-3xl font-bold text-secondary mb-8'>Our Blogs</h2>
                <div class="drawer drawer-mobile gap-x-5">
                    <input id="drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        {/* <!-- Page content here --> */}


                    </div>
                    <div class="drawer-side">
                        <label htmlFor="drawer" class="drawer-overlay"></label>
                        <div class="p-4 overflow-y-auto w-80 bg-[#323B4C] text-white">
                            {/* <!-- Sidebar content here --> */}
                            <div className="">
                                <img className='rounded-full' src="https://i.ibb.co/HBq3w0k/fiverr-profile.jpg" alt="Murshedul" />
                            </div>
                            <div className='mb-8'>
                                <h4 className='text-xl text-semibold border-b-2 border-slate-300 mb-5 pb-1'>Contact</h4>
                                <p className='flex items-center'>
                                    <FaMapMarkerAlt className='bg-white text-slate-700 text-xl p-1 rounded-full' />
                                    <span className='ml-1 text-slate-300'>Fatikchhari, Chattagram, Bangladesh.</span>
                                </p>
                                <p className='flex items-center'>
                                    <FaPhoneAlt className='bg-white text-slate-700 text-xl p-1 rounded-full' />
                                    <span className='ml-1 text-slate-300'>+8801882820824 / +8801608283599</span>
                                </p>
                                <p className='flex items-center'>
                                    <HiMail className='bg-white text-slate-700 text-xl p-1 rounded-full' />
                                    <span className='ml-1 text-slate-300'>murshedbinamir@gmail.com</span>
                                </p>
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