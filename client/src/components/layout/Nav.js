import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

function Nav() {
    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, updateStars, user } = userContext;

    const onLogout = () => {
        logout();
    };

    const put = () => {
        /* THIS IS FOR TESTING UPDATE STARS */
        updateStars(user, 3);
    };

    const authLinks = (
        <Fragment>
            <button onClick={put}></button>{' '}
            {/* THIS IS FOR TESTING UPDATE STARS */}
            <li>Hello {user && user.name}</li>
            <li>
                <i className='fas fa-star'></i>
                {user && user.stars}
            </li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt'></i>
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
    ); // if there is a user, display the users star count

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className='navbar'>
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
