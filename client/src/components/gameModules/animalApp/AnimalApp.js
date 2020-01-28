import React, { useState, useEffect, useContext } from 'react';
import Game from './AnimalGame';
import Title from './AnimalTitle';
import tiles from './info/animals';
import './AnimalApp.css';
import { Link } from 'react-router-dom';

const AnimalApp = props => {
    return (
        <div className='container-fluid'>
            <Title tiles={tiles}></Title>
            <Game tiles={tiles}></Game>
        </div>
    );
};

export default AnimalApp;
