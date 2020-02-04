import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

function Nav() {
    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, user } = userContext;

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <Fragment>
            {/* THIS IS FOR TESTING UPDATE STARS */}
            <li className='nav-buffer nav-name'>Hi, {user && user.name}!</li>
            <li className='nav-buffer'>
                <i className='far fa-star stars'></i>
                <span className='small'>x </span>
                {user && user.stars}
            </li>
            <li className='hvr-underline-from-right hvr-rotate nav-link'>
                <Link to='/about' className='white'>
                    About
                </Link>
            </li>
            <li className='nav-link hvr-underline-from-left'>
                <a className='hvr-icon-forward' onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt hvr-icon white'></i>
                    <Link to='/'>
                        <span className='hide-sm white ml-1'>Logout</span>
                    </Link>
                </a>
            </li>
        </Fragment>
    ); // if there is a user, display the users name

    const guestLinks = (
        <Fragment>
            <li className='nav-link hvr-underline-from-right hvr-rotate'>
                <Link to='/about' className='white'>
                    About
                </Link>
            </li>
            <li className='nav-link hvr-underline-from-right hvr-rotate'>
                <Link to='/register' className='white'>
                    Register
                </Link>
            </li>
            <li className='nav-link hvr-underline-from-right hvr-rotate'>
                <Link to='/login' className='white'>
                    Login
                </Link>
            </li>
        </Fragment>
    ); // if there is a user, display the users star count

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className='navbar'>
            <Link to='/' className='title-link'>
                <h1 style={navStyle} className='title'>
                    <i className='fas fa-star spin star'></i>
                    <span className='hvr-underline-from-left star-jump'>
                        Star Jump
                    </span>
                </h1>
            </Link>
            <ul className='nav-links'>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    );
}

export default Nav;
