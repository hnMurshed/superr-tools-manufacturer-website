import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span class="text-[20px] font-bold mb-2 text-slate-800">Quick Links</span>
                <Link to='' class="link link-hover">About Us</Link>
                <Link to='' class="link link-hover">Terms & Conditions</Link>
                <Link to='' class="link link-hover">Privacy Policy</Link>
                <Link to='' class="link link-hover">Cookie policy</Link>
            </div>
            <div>
                <span class="text-[20px] font-bold mb-2 text-slate-800">Stay Connected With</span>
                <div className="flex gap-2">
                    <Link to='' class="text-[20px] text-[#42599E] hover:text-white border-2 border-slate-800 hover:border-[#42599E] p-2 rounded-md hover:bg-[#42599E] transition duration-300"><FaFacebookF /></Link>
                    <Link to='' class="text-[20px] text-[#55ACEE] hover:text-white border-2 border-slate-800 hover:border-[#55ACEE] p-2 rounded-md hover:bg-[#55ACEE] transition duration-300"><FaTwitter /></Link>
                    <Link to='' class="text-[20px] text-[#117EB9] hover:text-white border-2 border-slate-800 hover:border-[#117EB9] p-2 rounded-md hover:bg-[#117EB9] transition duration-300"><FaLinkedinIn /></Link>
                    <Link to='' class="text-[20px] text-[#CD201F] hover:text-white border-2 border-slate-800 hover:border-[#CD201F] p-2 rounded-md hover:bg-[#CD201F] transition duration-300"><FaYoutube /></Link>
                </div>
            </div>
            <div>
                <span class="text-[20px] font-bold mb-2 text-slate-800">Contact</span>
                <p className='flex items-center'>
                    <FaMapMarkerAlt />
                    <span className='ml-1'>Fatikchhari Bibirhat, Chattagram, Bangladesh.</span>
                </p>
                <p className='flex items-center'>
                    <FaPhoneAlt />
                    <span className='ml-1'>+8801800000000 / +8801600000000</span>
                </p>
                <p className='flex items-center'>
                    <HiMail />
                    <span className='ml-1'><strong>For Corporate Affairs:</strong> info@superrtools.com</span>
                </p>
                <p className='flex items-center'>
                    <HiMail />
                    <span className='ml-1'><strong>For Domestic Sales:</strong> marketing@superrtools.com</span>
                </p>
                <p className='flex items-center'>
                    <HiMail />
                    <span className='ml-1'><strong>For International Sales:</strong> sales@superrtools.com</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;