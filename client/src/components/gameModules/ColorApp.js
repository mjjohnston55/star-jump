import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function ColorApp() {
    return (
        <div>
            <h1>Color App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default ColorApp;
