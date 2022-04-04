import React from 'react';
import './ManageReviews.css';

const ManageReviews = (props) => {
    const { image, name, rating, text } = props.review;

    return (
        <div className='manage-reviews text-center'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p className='star'>{rating}</p>
            <p>{text}</p>
        </div>
    );
};

export default ManageReviews;