import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={match ? { color: 'rgb(17, 150, 255)', border: '1px solid rgb(17, 150, 255)', padding: '5px 8px', margin: '11px', borderRadius: '5px' } : { color: '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
                {match && ""}
            </div >
        );
    }

    return (
        <nav className='navbar-links'>
            <CustomLink to='/home'>HOME</CustomLink>
            <CustomLink to='/reviews'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;