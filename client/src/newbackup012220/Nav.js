import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link to='/'>
                <h1 style={navStyle}>Home</h1>
                <img src="http://www.lexmantra.net/images/home.png" alt="home icon"></img>
            </Link>
            <ul className='nav-links'>
                
                <Link style={navStyle} to='/register'>
                    <li>Register</li>
                </Link>
                <Link style={navStyle} to='/login'>
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
