import React, { useState, useEffect, useContext, Fragment } from 'react';
import Game from './ColorGame';
import Title from './ColorTitle';
import colors from './info/colors';
import './ColorApp.css';
import swal from 'sweetalert';
import UserContext from '../../../context/user/userContext';
import { Link } from 'react-router-dom';

// App
const ColorApp = props => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, updateStars, user } = userContext;

    const [correct, setCorrect] = useState('');
    const [message, setMessage] = useState('What color is it?');
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(colors);
    const [correctColor, setCorrectColor] = useState({});
    const [usedIndexes, setUsedIndexes] = useState([]);

    const newAnswer = (min, max, exclude) => {
        exclude = Array.isArray(exclude) ? exclude : [exclude];
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return exclude.includes(num) ? newAnswer(min, max, exclude) : num; // if the exclude includes a number in the exclude, run the function again but excluding it, else return the number
    };

    useEffect(() => {
        let newCorrectColor = tiles[newAnswer(0, tiles.length - 1)];
        setCorrectColor(newCorrectColor);
        setTimeout(function() {
            playAudio(newCorrectColor.audio);
        }, 500);
        // eslint-disable-next-line
    }, []);

    const handleClick = color => {
        let choices = tiles; // sets choices to a copy of the full object in the colors.json file
        let chosen = choices.findIndex(chosen => chosen.name === color); // Sets chosen to the index of the color whos name matches the one clicked
        // playAudio(choices[chosen].audio);
        //edited
        
        // runs playAudio function with the path of the audio files passed in
        // play color sound
        if (choices[chosen].id === correctColor.id) {
            let updatedTiles = tiles; // temporary copy of tiles
            updatedTiles[chosen].used = true; // set the clicked colors used key
            setTiles(updatedTiles); // set the state tiles to the updated one

            handleCorrectClick(choices[chosen]); // passes in the object of the color clicked
        } else {
            handleIncorrectClick(choices[chosen]); // passes in the object of the color clicked
        }
    };

    const handleCorrectClick = color => {
        let updatedUsedIndexes = usedIndexes;
        updatedUsedIndexes.push(color.id - 1);
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
                playAudio(newCorrectColor.audio);
                setCorrect('shake');
            }, 1500);

            let newCorrectColor =
                tiles[newAnswer(0, tiles.length - 1, usedIndexes)];
            setCorrectColor(newCorrectColor);
        }

        console.log(correctColor);
        console.log(`You clicked ${color.name}. Correct!`);
    };

    const handleIncorrectClick = color => {

        setTimeout(function() {
            
            playAudio(correctColor.audio);
            setCorrect('shake');
        }, 1300);
        
        
        setMessage(`Sorry, that wasn't it!`);
        setCorrect('incorrect');

        setTimeout(function() {
            setCorrect('');
        }, 300);

        console.log(`You clicked ${color.name}. Incorrect!`);
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
                colorAudio={correctColor.audio}
                playAudio={playAudio}
                correct={correct}
                correctColor={correctColor.name}
            ></Title>
            <Game tiles={tiles} handleClick={handleClick}></Game>
        </Fragment>
    );
};

export default ColorApp;
