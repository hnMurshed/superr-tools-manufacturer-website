import React, { useState } from 'react';
import handToolBennerBg from '../../../images/benner/Hand-Tools.jpg';
import cuttingToolBennerBg from '../../../images/benner/cutting-tools.jpg';
import industrialToolBennerBg from '../../../images/benner/Industrial_Tools.jpg';
import partnershipBennerBg from '../../../images/benner/become-our-partner-1.jpg';

const Benner = () => {
    const [clicked, setClicked] = useState(1);

    const handToolSlide = {
        backgroundImage: `url(${handToolBennerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const cuttingToolSlide = {
        backgroundImage: `url(${cuttingToolBennerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const industrialToolSlide = {
        backgroundImage: `url(${industrialToolBennerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const partnershipSlide = {
        backgroundImage: `url(${partnershipBennerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <section className='relative'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item flex items-center justify-center relative w-full h-screen" style={handToolSlide}>
                    <div className=' w-1/2 text-white bg-[rgba(0,0,0,0.5)] p-5'>
                        <h2 className='text-4xl font-bold uppercase text-green-400'>Hand tools</h2>
                        <p className='my-4'>Top rated high-quality hand tools manufacturer and exporter. Your customers will never feel bad after purchasing.</p>
                        <button class="btn btn-sm bg-secondary hover:bg-blue-400 text-white rounded-[20px] border-0 px-5">Explore Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item flex justify-center items-center relative w-full h-screen" style={cuttingToolSlide}>
                    <div className=' w-1/2 text-white bg-[rgba(0,0,0,0.5)] p-5'>
                        <h2 className='text-4xl font-bold uppercase text-orange-500'>Cutting Tools</h2>
                        <p className='my-4'>When quality matters to your customers, choosing the right and quality tools is mostly importand.</p>
                        <button class="btn btn-sm bg-secondary hover:bg-blue-400 text-white rounded-[20px] border-0 px-5">Explore Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item flex justify-center items-center relative w-full h-screen" style={industrialToolSlide}>
                    <div className=' w-1/2 text-white bg-[rgba(0,0,0,0.5)] p-5'>
                        <h2 className='text-4xl font-bold uppercase'>Industrial tools</h2>
                        <p className='my-4'>Serving the market for over 7 years providing exclusive and quality tools</p>
                        <button class="btn btn-sm bg-secondary hover:bg-blue-400 text-white rounded-[20px] border-0 px-5">Explore Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item flex justify-center items-center relative w-full h-screen" style={partnershipSlide}>
                    <div className=' w-1/2 text-white bg-[rgba(0,0,0,0.5)] p-5'>
                        <h2 className='text-4xl font-bold uppercase text-cyan-500'>Partnership Business</h2>
                        <p className='my-4'>We are really happy to work with you as partnership. We incredible partnership opportunities for you.</p>
                        <button class="btn btn-sm bg-secondary hover:bg-blue-400 text-white rounded-[20px] border-0 px-5">Explore Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
                    <a onClick={() => setClicked(1)} href="#slide1" className={`btn btn-circle btn-xs ${clicked === 1 ? 'bg-[#AFBFCF]' : 'bg-white'}`}></a>
                    <a onClick={() => setClicked(2)} href="#slide2" className={`btn btn-circle btn-xs ${clicked === 2 ? 'bg-[#AFBFCF]' : 'bg-white'}`}></a>
                    <a onClick={() => setClicked(3)} href="#slide3" className={`btn btn-circle btn-xs ${clicked === 3 ? 'bg-[#AFBFCF]' : 'bg-white'}`}></a>
                    <a onClick={() => setClicked(4)} href="#slide4" className={`btn btn-circle btn-xs ${clicked === 4 ? 'bg-[#AFBFCF]' : 'bg-white'}`}></a>
                </div>
            </div>
        </section>
    );
};

export default Benner;