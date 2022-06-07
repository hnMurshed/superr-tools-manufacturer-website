import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const { name, description, price, img, _id } = tool;
    return (
        <div onClick={() => navigate(`/products/${_id}`)} className="tool card card-compact bg-base-100 shadow-xl cursor-pointer">
            <figure><img src={img} alt={name} className='w-full hover:scale-125 duration-1000' /></figure>
            <div className="quick-view px-3 ">
                <button className="bg-secondary w-full py-3 text-white text-bold">Quick View</button>
            </div>
            <div className="card-body bg-white z-20">
                <h2 className="font-bold text-center">{name}</h2>
                <p className='text-center text-secondary font-bold'>${price}</p>
            </div>
        </div>
    );
};

export default Tool;