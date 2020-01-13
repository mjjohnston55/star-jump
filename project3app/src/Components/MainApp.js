import React from 'react';
import './mainAppStyle.css';
import { Link } from 'react-router-dom';



function MainApp() {
  return (
    <div>
        <h1>MainApp Page</h1>
        
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <Link to="/math">
                <div class="iconMath hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
                <Link to="/abc">
                <div class="iconABC hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
            <Link to="/shapes">
                <div class="iconShapes hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
            <Link to="/numbers">
                <div class="iconNumbers hvr-pulse"></div>
                </Link>
            </div>
        </div>
        <br/>
        <br/>

        <div class="row">
            <div class="col-md-3">
            <Link to="/colors">
                <div class="iconColors hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
            <Link to="/animals">
                <div class="iconAnimals hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
            <Link to="/planets">
                <div class="iconPlanets hvr-pulse"></div>
                </Link>
            </div>
            <div class="col-md-3">
            <Link to="/clock">
                <div class="iconTime hvr-pulse"></div>
                </Link>
            </div>
        </div>
    </div>
    </div>
  );
}

export default MainApp;
