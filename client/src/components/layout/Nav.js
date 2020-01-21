import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link to='/'>
                <h1 style={navStyle}>Home</h1>
            </Link>
            <ul className='nav-links'>
                <Link style={navStyle} to='/mainapp'>
                    <li>Main App</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
