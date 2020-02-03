import React, { useState, useEffect, useContext, Fragment } from 'react';
import Game from './ShapeGame';
import Title from './ShapeTitle';
import shapes from './info/shapes';
import './ShapeApp.css';
import swal from 'sweetalert';
import UserContext from '../../../context/user/userContext';
import { Link } from 'react-router-dom';

// App
const ShapeApp = props => {
    const userContext = useContext(UserContext);
    const { isAuthenticated, updateStars, user } = userContext;

    const [correct, setCorrect] = useState('');
    const [message, setMessage] = useState('What shape is it?');
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(shapes);
    const [correctShape, setCorrectShape] = useState({});
    const [usedIndexes, setUsedIndexes] = useState([]);

    const newAnswer = (min, max, exclude) => {
        exclude = Array.isArray(exclude) ? exclude : [exclude];
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return exclude.includes(num) ? newAnswer(min, max, exclude) : num; // if the exclude includes a number in the exclude, run the function again but excluding it, else return the number
    };

    useEffect(() => {
        let newCorrectShape = tiles[newAnswer(0, tiles.length - 1)];
        setCorrectShape(newCorrectShape);
        setTimeout(function() {
            playAudio(newCorrectShape.audio);
        }, 500);
        // eslint-disable-next-line
    }, []);

    const handleClick = shape => {
        let choices = tiles; // sets choices to a copy of the full object in the shapes.json file
        let chosen = choices.findIndex(chosen => chosen.name === shape); // Sets chosen to the index of the shape whos name matches the one clicked
        // playAudio(choices[chosen].audio);
        //edited
        
        // runs playAudio function with the path of the audio files passed in
        // play shape sound
        if (choices[chosen].id === correctShape.id) {
            let updatedTiles = tiles; // temporary copy of tiles
            updatedTiles[chosen].used = true; // set the clicked shapes used key
            setTiles(updatedTiles); // set the state tiles to the updated one

            handleCorrectClick(choices[chosen]); // passes in the object of the shape clicked
        } else {
            handleIncorrectClick(choices[chosen]); // passes in the object of the shape clicked
        }
    };

    const handleCorrectClick = shape => {
        let updatedUsedIndexes = usedIndexes;
        updatedUsedIndexes.push(shape.id - 1);
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
                playAudio(newCorrectShape.audio);
                setCorrect('shake');
            }, 1500);

            let newCorrectShape =
                tiles[newAnswer(0, tiles.length - 1, usedIndexes)];
            setCorrectShape(newCorrectShape);
        }

        console.log(correctShape);
        console.log(`You clicked ${shape.name}. Correct!`);
    };

    const handleIncorrectClick = shape => {

        setTimeout(function() {
            
            playAudio(correctShape.audio);
            setCorrect('shake');
        }, 1300);
        
        setMessage(`Sorry, that wasn't it!`);
        setCorrect('incorrect');

        setTimeout(function() {
            setCorrect('');
        }, 300);

        console.log(`You clicked ${shape.name}. Incorrect!`);
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
                shapeAudio={correctShape.audio}
                playAudio={playAudio}
                correct={correct}
                correctShape={correctShape.name}
            ></Title>
            <Game tiles={tiles} handleClick={handleClick}></Game>
        </Fragment>
    );
};

export default ShapeApp;
