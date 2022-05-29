import React from 'react';
import notFoundImg from '../../images/benner/page-not-found.png';

const NotFound = () => {
    return (
        <section className=' bg-neutral py-10'>
            <img className='mx-auto' src={notFoundImg} alt='404, Page Not Found' />
        </section>
    );
};

export default NotFound;