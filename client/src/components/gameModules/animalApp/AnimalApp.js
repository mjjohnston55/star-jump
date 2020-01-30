import React, { useState, useEffect, useContext, Fragment } from 'react';
import Game from './AnimalGame';
import Title from './AnimalTitle';
import animals from './info/animals';
import './AnimalApp.css';
import swal from 'sweetalert';
import UserContext from '../../../context/user/userContext';
import { Link } from 'react-router-dom';

// App
const AnimalApp = props => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, updateStars, user } = userContext;

    const [correct, setCorrect] = useState('');
    const [message, setMessage] = useState('What made that noise?');
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(animals);
    const [correctAnimal, setCorrectAnimal] = useState({});
    const [usedIndexes, setUsedIndexes] = useState([]);

    const newAnswer = (min, max, exclude) => {
        exclude = Array.isArray(exclude) ? exclude : [exclude];
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return exclude.includes(num) ? newAnswer(min, max, exclude) : num; // if the exclude includes a number in the exclude, run the function again but excluding it, else return the number
    };

    useEffect(() => {
        let newCorrectAnimal = tiles[newAnswer(0, tiles.length - 1)];
        setCorrectAnimal(newCorrectAnimal);
        setTimeout(function() {
            playAudio(newCorrectAnimal.audio);
        }, 500);
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
    };

    const handleCorrectClick = animal => {
        let updatedUsedIndexes = usedIndexes;
        updatedUsedIndexes.push(animal.id - 1);
        setUsedIndexes(updatedUsedIndexes);

        setMessage('You got it!');
        setCorrect('correct');

        let updatedScore = score + 1;
        setScore(updatedScore);

        if (score === 9) {
            if (isAuthenticated) {
                swal('You earned 3 stars!', 'Great Job!', 'success');
                updateStars(user, 3);
            } else {
                swal(
                    'You won! Make sure to login if you want to earn stars!',
                    'Great Job!',
                    'success'
                );
            }
            setTimeout(function() {
                props.history.push('/');
            }, 1500);
            return;
        } else {
            setTimeout(function() {
                setCorrect('');
            }, 300);

            setTimeout(function() {
                playAudio(newCorrectAnimal.audio);
                setCorrect('shake');
            }, 1500);

            let newCorrectAnimal =
                tiles[newAnswer(0, tiles.length - 1, usedIndexes)];
            setCorrectAnimal(newCorrectAnimal);
        }

        console.log(correctAnimal);
        console.log(`You clicked ${animal.name}. Correct!`);
    };

    const handleIncorrectClick = animal => {
        setMessage(`Sorry, that wasn't it!`);
        setCorrect('incorrect');

        setTimeout(function() {
            setCorrect('');
        }, 300);

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
                animalAudio={correctAnimal.audio}
                playAudio={playAudio}
                correct={correct}
            ></Title>
            <Game tiles={tiles} handleClick={handleClick}></Game>
        </Fragment>
    );
};

export default AnimalApp;
