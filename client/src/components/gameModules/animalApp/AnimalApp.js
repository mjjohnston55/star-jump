import React, { useState, useEffect, useContext, Fragment } from 'react';
import Game from './AnimalGame';
import Title from './AnimalTitle';
import animals from './info/animals';
import './AnimalApp.css';
import { Link } from 'react-router-dom';

// App
const AnimalApp = props => {
    const [message, setMessage] = useState('What animal made that noise?');
    const [correctAnimal, setCorrectAnimal] = useState({});
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(animals);

    const correctAnswer = tiles[Math.floor(Math.random() * tiles.length)];
    console.log(correctAnswer);

    const handleClick = animal => {
        let choices = tiles; // sets choices to a copy of the full object in the animals.json file
        let chosen = choices.findIndex(chosen => chosen.name === animal); // Sets chosen to the index of the animal whos name matches the one clicked
        if (choices[chosen].id === correctAnswer.id) {
            handleCorrectClick(chosen);
        } else {
            handleIncorrectClick(animal);
        }
        /* console.log(this.state.tiles[chosen]); */
        /*         this.randomizeTiles(this.state.tiles);
        console.log(this.state.score); */
    };

    const handleCorrectClick = (index, id) => {
        // set clicked to true
        console.log(`You clicked ${index}. It has the ID of ${id}. Correct!`);
    };

    const handleIncorrectClick = index => {
        console.log(`You clicked ${index}. Incorrect!`);
    };

    const playAudio = path => {
        var a = new Audio(path);
        a.play();
    };

    // return
    return (
        <Fragment>
            <Title
                message={message}
                score={score}
                correctAnimal={correctAnimal}
            ></Title>
            <Game tiles={tiles} handleClick={handleClick}></Game>
        </Fragment>
    );
};

export default AnimalApp;

/* 
Enter Page - DISPAY ALL ANIMALS AND EMPTY QUESTION MARK BOX ABOVE WITH MESSAGE: 'WHAT ANIMAL MADE THAT NOISE?'
Click Animal - MAKE CLICKED ANIMAL NOISE
    If correct - DISPLAY CORRECT ANIMAL

*/
