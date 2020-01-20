import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function PlanetApp() {
    return (
        <div>
            <h1>Planet App</h1>
            <Link to='/mainapp'>
                <div className='back-arrow'></div>
            </Link>
        </div>
    );
}

export default PlanetApp;
