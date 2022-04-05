import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = reviews.slice(0, 3);

    return (
        <div className='container mt-5 '>
            <div className='home-container'>
                <div className='home-details'>
                    <h1 className='m-0'>Headphones Insider</h1>
                    <h1 className='mt-0' style={{ color: "rgb(17, 152, 255)" }}>The Insider Reviews</h1>
                    <p>Welcome to the insider website! We analyse the products that's been sold the most. Our customers trust us with our service & we serve them with the most honest analysis.</p>
                    <button className='btn'>Live Demo</button>
                </div>
                <div>
                    <img className='home-image' width='550px' src={require('../../images/product/headphone.jpg')} alt="" />
                </div>
            </div>
            <div className='text-center'>
                <h3 className='home-review-header mt-5'>Reviews ({homeReviews.length})</h3>
                <div className='review my-5'>
                    {
                        homeReviews.map(review =>
                            <HomeReviews
                                key={review.id}
                                review={review}
                            ></HomeReviews>)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='see-all-reviews mb-5 btn'>See All Reviews</button>
                </Link>
            </div>
        </div >
    );
};

export default Home;