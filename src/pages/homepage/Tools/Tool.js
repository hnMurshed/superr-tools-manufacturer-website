import React from 'react';

const Tool = ({tool}) => {
    const {name, description, price, img } = tool;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} className='w-full hover:scale-125 duration-1000' /></figure>
            <div className="card-body z-10">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary w-full hover:text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;