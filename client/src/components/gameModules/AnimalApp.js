import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function AnimalApp() {
    return (
        <div>
            <h1>Animal App</h1>
            <Link to='/'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default AnimalApp;
