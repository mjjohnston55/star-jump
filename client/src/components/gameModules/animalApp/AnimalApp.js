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
        playAudio(choices[chosen].audio); // runs playAudio function with the path of the audio files passed in
        // play animal sound
        if (choices[chosen].id === correctAnswer.id) {
            handleCorrectClick(choices[chosen]); // passes in the object of the animal clicked
        } else {
            handleIncorrectClick(choices[chosen]); // passes in the object of the animal clicked
        }
        /* console.log(this.state.tiles[chosen]); */
        /*         this.randomizeTiles(this.state.tiles);
        console.log(this.state.score); */
    };

    const handleCorrectClick = animal => {
        // set clicked to true
        console.log(`You clicked ${animal.name}. Correct!`);
    };

    const handleIncorrectClick = animal => {
        console.log(`You clicked ${animal}. Incorrect!`);
    };

    const playAudio = path => {
        let audio = new Audio(require(`./${path}`));
        audio.setAttribute('autoplay', 'true');
        audio.setAttribute('muted', 'muted');
        audio.load();
        audio.play();
    };

    const setNewAnswer = () => {
        let prevAnswer = 
    }
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
