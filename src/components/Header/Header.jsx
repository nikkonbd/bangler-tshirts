import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="grandpa">Grandpa</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Header;