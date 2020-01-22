import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

function Nav() {
    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, user } = userContext;

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a href='#!'>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    ); // if there is a user, display the users name

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    ); // if there is a user, display the users name

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className='navbar bg-primary'>
            <Link to='/'>
                <h1 style={navStyle}>
                    <i className='fas fa-graduation-cap'></i> Home
                </h1>
            </Link>
            <ul className='nav-links'>
                {isAuthenticated ? authLinks : guestLinks}
                {/*                 <Link style={navStyle} to='/mainapp'>
                    <li>Main App</li>
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;
