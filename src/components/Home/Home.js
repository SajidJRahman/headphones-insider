import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    return (
        <div className='container mt-5 '>
            <div className='home-container'>
                <div className='home-details'>
                    <h1 className='m-0'>The Headphones Insider</h1>
                    <h1 className='mt-0' style={{ color: "rgb(17, 152, 255)" }}>The Insider Reviews</h1>
                    <p>Welcome to the insider website! We analyse the products that's been sold the most. Our customers trust us with our service & we serve them with the most honest analysis.</p>
                    <button className='btn'>Live Demo</button>
                </div>
                <div>
                    <img className='home-image' width='550px' src={require('../../images/product/headphone-2.jpg')} alt="" />
                </div>
            </div>
            <div className='text-center'>
                <Review></Review>
                <Link to='/reviews'>
                    <button className='see-all-reviews mb-5 btn'>See All Reviews</button>
                </Link>
            </div>
        </div >
    );
};

export default Home;