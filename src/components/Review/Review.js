import React from 'react';
import useReviews from '../../hooks/useReviews';
import ManageReviews from '../ManageReviews/ManageReviews';
import './Review.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h1 className='review-header text-center my-5'>Reviews</h1>
            <div className='review m-5'>
                {
                    reviews.map(review =>
                        <ManageReviews
                            key={review.id}
                            review={review}
                        ></ManageReviews>)
                }
            </div>
        </div>



    );
};

export default Reviews;