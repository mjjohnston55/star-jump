import React, { useContext, useEffect } from 'react';
import './mainAppStyle.css';
import { Link } from 'react-router-dom';

import UserContext from '../context/user/userContext';

function MainApp() {
    const userContext = useContext(UserContext); // init context

    useEffect(() => {
        userContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            
            <div className='container mainspace'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Link to='/math'>
                            <div className='iconMath hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/abc'>
                            <div className='iconABC hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/shapes'>
                            <div className='iconShapes hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/numbers'>
                            <div className='iconNumbers hvr-pulse'></div>
                        </Link>
                    </div>
                </div>
                <br />
                <br />

                <div className='row'>
                    <div className='col-md-3'>
                        <Link to='/colors'>
                            <div className='iconColors hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/animals'>
                            <div className='iconAnimals hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>
                        <Link to='/planets'>
                            <div className='iconPlanets hvr-pulse'></div>
                        </Link>
                    </div>
                    <div className='col-md-3'>

                        
                         <Link to='/sightwords'>

                            <div className='iconTime hvr-pulse'></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainApp;
