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
                <div id="slide1" className="carousel-item relative w-full" style={handToolSlide}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" style={cuttingToolSlide}>
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" alt='' className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full" style={industrialToolSlide}>
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt='' className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full" style={partnershipSlide}>
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' className="w-full" /> /
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