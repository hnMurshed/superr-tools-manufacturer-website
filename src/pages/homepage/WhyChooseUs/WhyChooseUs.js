import React from 'react';
import idea from '../../../images/icons/idea.png';
import quality from '../../../images/icons/quality.png';
import support from '../../../images/icons/support.png';
import bg from '../../../images/benner/why-choose-us-bg.jpg';

const WhyChooseUs = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };
    return (
        <section style={style} className='text-white py-10'>
            <div className="custom-container">
                <h2 className='text-center text-3xl font-bold'>Why Choose Us</h2>
                <hr className='my-8' />
                <p style={{maxWidth: '930px'}} className='text-center mx-auto'>Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in the world. Here’s some reasons why we’re unique</p>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div class="card">
                        <figure class="px-10 pt-10">
                            <img src={idea} alt="Idia Icon" class="" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Expertise & Innovation</h2>
                            <p>Since 2013 we’ve been supplying the highest quality tools to a variety of specialist markets.</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure class="px-10 pt-10">
                            <img src={support} alt="Idia Icon" class="" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Service & Support</h2>
                            <p>We have invested heavily to ensure that our products, processes and customer service are second to none.</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure class="px-10 pt-10">
                            <img src={quality} alt="Idia Icon" class="" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Quality</h2>
                            <p>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;