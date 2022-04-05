import React from 'react';
import './HomeReviews.css';

const HomeReviews = (props) => {
    const { image, name, rating, text } = props.review;

    return (
        <div className='manage-home-reviews text-center'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p className='star'>{rating}</p>
            <p>{text}</p>
        </div>
    );
};

export default HomeReviews;