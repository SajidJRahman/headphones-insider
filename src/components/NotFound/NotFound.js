import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found text-center'>
            <h1>404</h1>
            <h2>Hey captain! Looks like you're heading to a wrong planet!</h2>
            <Link to='/'>
                <button>Take Me Back To Homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;