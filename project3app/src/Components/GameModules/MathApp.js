import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function MathApp() {
  return (
    <div>
        <h1>Math App</h1>
        <Link to="/mainapp">
        <div className="back-arrow"></div>
        </Link>
    </div>
  );
}

export default MathApp;
