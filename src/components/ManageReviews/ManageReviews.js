import React from 'react';
import './ManageReviews.css';

const ManageReviews = (props) => {
    const { image, name, rating, text } = props.review;

    return (
        <div className='manage-reviews text-center'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p className='star'>{rating}</p>
            <p>{text}</p>
        </div>
    );
};

export default ManageReviews;