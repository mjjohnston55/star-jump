import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function ABCApp() {
  return (
    <div>
        <h1>ABC App</h1>
        <Link to="/mainapp">
        <div className="back-arrow"></div>
        </Link>
    </div>
  );
}

export default ABCApp;
