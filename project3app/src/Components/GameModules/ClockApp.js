import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function ClockApp() {
  return (
    <div>
        <h1>Clock App</h1>
        <Link to="/mainapp">
        <div className="back-arrow"></div>
        </Link>
    </div>
  );
}

export default ClockApp;
