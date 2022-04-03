import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container mt-5 home-container'>
            <div className='home-details'>
                <h1 className='m-0'>Your Next Headphone</h1>
                <h1 className='mt-0' style={{ color: "rgb(17, 152, 255)" }}>Your Best Headphone</h1>
                <p>Welcome to our analysis website! We analyse the products that's been sold the most. Our customers trust us with service & we serve them with the most honest analysis.</p>
                <button className='btn'>Live Demo</button>
            </div>
            <div>
                <img className='home-image' width='550px' src={require('../../images/product/headphone-2.jpg')} alt="" />
            </div>
        </div >
    );
};

export default Home;