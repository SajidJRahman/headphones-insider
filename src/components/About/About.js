import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='text-center'>
            <div className='about-us'>
                <h1 className='py-5'>About Us</h1>
                <p className='container'>We are The Headphones Insiders. Our job is to analyze the best sold products on market. We've got the best analyst in our company. Thousands of people trust us before buying a brand new product. We love to serve them with our best service possible. We've got good solutions for customers with a budgets. Our customer's trust is what keeping us going on. We're proud to have the trust of our customers & we look forward to serve them with even better service.</p>
            </div>
            <div className='about-us-images'>
                <img className='img-fluid' width='400px' src={require('../../images/product/headphone-2.jpg')} alt="" />
                <img className='img-fluid' width='400px' src={require('../../images/product/headphone-3.jpg')} alt="" />
                <img className='img-fluid' width='400px' src={require('../../images/product/headphone-4.jpg')} alt="" />
            </div>
            <footer className='copyright text-center pt-5'>
                <p>Copyright © 2022 by Sajid Rahman</p>
            </footer>
        </div>
    );
};

export default About;