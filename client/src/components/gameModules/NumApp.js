import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function NumApp() {
    return (
        <div>
            <h1>Number App</h1>
            <Link to='/'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default NumApp;
