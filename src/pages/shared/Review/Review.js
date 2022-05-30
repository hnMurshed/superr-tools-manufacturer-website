import React from 'react';
import { FaStar } from "react-icons/fa";

const Review = ({textColor}) => {
    return (
        <FaStar
            className={`${textColor}`}
        ></FaStar>
    );
};

export default Review;