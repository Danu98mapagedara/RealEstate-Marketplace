import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import images from '../../constants/images';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={images.logo} alt="Logo" />
            </div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/apartment' className='nav-link'>Apartments</NavLink>
                <NavLink to='/house' className='nav-link'>Houses</NavLink>
                <NavLink to='/yourland' className='nav-link'>Lands</NavLink>
                <NavLink to='/contactus' className='nav-link'>Contact Us</NavLink>
                <NavLink to='/aboutus' className='nav-link'>About Us</NavLink>
                <NavLink to='/sellyourland' className='nav-link'>Sell Your Land</NavLink>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>
        </div>
    );
};

export default Navbar;
