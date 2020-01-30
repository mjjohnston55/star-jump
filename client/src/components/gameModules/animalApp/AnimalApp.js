import React, { useState, useEffect, useContext, Fragment } from 'react';
import Game from './AnimalGame';
import Title from './AnimalTitle';
import animals from './info/animals';
import './AnimalApp.css';
import { Link } from 'react-router-dom';

// App
const AnimalApp = props => {
    const [message, setMessage] = useState('What animal made that noise?');
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(animals);
    const [correctAnimal, setCorrectAnimal] = useState({});
    const [usedIndexes, setUsedIndexes] = useState([]);

    const newAnswer = (min, max, exclude) => {
        exclude = Array.isArray(exclude) ? exclude : [exclude];
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(num);
        return exclude.includes(num) ? newAnswer(min, max, exclude) : num;
    };

    useEffect(() => {
        setCorrectAnimal(tiles[newAnswer(0, tiles.length - 1)]);
        /* let rand = Math.floor(Math.random() * unusedAnimals.length); // random number between 0 and 9 (full unusedAnimals index)
        console.log(rand);
        setCorrectAnimal(unusedAnimals[rand]); // set the correct animal to the animal at that index
        var updatedUnusedAnimals = unusedAnimals;
        updatedUnusedAnimals.splice(rand, 1); // removes only the rand index of unused animals
        setUnusedAnimals(updatedUnusedAnimals);
        console.log(correctAnimal); */
        // eslint-disable-next-line
    }, []);

    const handleClick = animal => {
        let choices = tiles; // sets choices to a copy of the full object in the animals.json file
        let chosen = choices.findIndex(chosen => chosen.name === animal); // Sets chosen to the index of the animal whos name matches the one clicked
        playAudio(choices[chosen].audio); // runs playAudio function with the path of the audio files passed in
        // play animal sound
        if (choices[chosen].id === correctAnimal.id) {
            let updatedTiles = tiles; // temporary copy of tiles
            updatedTiles[chosen].used = true; // set the clicked animals used key
            setTiles(updatedTiles); // set the state tiles to the updated one
            handleCorrectClick(choices[chosen]); // passes in the object of the animal clicked
        } else {
            handleIncorrectClick(choices[chosen]); // passes in the object of the animal clicked
        }
        /* console.log(this.state.tiles[chosen]); */
        /*         this.randomizeTiles(this.state.tiles);
        console.log(this.state.score); */
    };

    const handleCorrectClick = animal => {
        let updatedScore = score + 1;
        setScore(updatedScore);
        setMessage('You got it! Now what animal made this noise?');

        let updatedUsedIndexes = usedIndexes;
        updatedUsedIndexes.push(animal.id - 1);
        setUsedIndexes(updatedUsedIndexes);

        setCorrectAnimal(tiles[newAnswer(0, tiles.length - 1, usedIndexes)]);
        console.log(correctAnimal);

        console.log(`You clicked ${animal.name}. Correct!`);
    };

    const handleIncorrectClick = animal => {
        setMessage(`Sorry, that wasn't it! Try again!`);
        console.log(`You clicked ${animal.name}. Incorrect!`);
    };

    const playAudio = path => {
        let audio = new Audio(require(`./${path}`));
        audio.setAttribute('autoplay', 'true');
        audio.setAttribute('muted', 'muted');
        audio.load();
        audio.play();
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
