import React, { useState, useEffect } from 'react'
// import Shuffle from './Shuffle'


// function to generate a correct or false button based on global state RNG
const generateButtonLetter = (buttonIndex, correctButtonIndex, hiddenLetterIndex, onClickEvent, word) => {
    
    word = word.toString()
    const hiddenLetter = word.charAt(hiddenLetterIndex)
    var randomLetter = String.fromCharCode(65+Math.floor(Math.random() * 26))
    while (randomLetter === hiddenLetter) {
        randomLetter = String.fromCharCode(65+Math.floor(Math.random() * 26))
    }
    
    // if this happens to be the correct button, give it the correct letter and pass the onClick event
    // otherwise, random non-correct letter and no onClick event
    const buttonLetter = (buttonIndex === correctButtonIndex)
     ? hiddenLetter : randomLetter
    const buttonClickEvent = (buttonIndex === correctButtonIndex)
    ? onClickEvent : null

    return (<button className="choice-button" onClick={buttonClickEvent}> {buttonLetter} </button>)
}

const Button = (props) => {
    const [hiddenLetterIndex, setHiddenLetterIndex] = useState(false);
    const [word, setWord] = useState(false);
    const [correctButtonIndex, setCorrectButtonIndex] = useState(false);

    useEffect(() => {
        setHiddenLetterIndex(props.hiddenLetterIndex)
        setWord(props.word)
        setCorrectButtonIndex(props.correctButtonIndex)
    }, [props.hiddenLetterIndex, props.word, props.correctButtonIndex]);



    return (
        generateButtonLetter(props.buttonIndex, correctButtonIndex, hiddenLetterIndex, props.onClickEvent, word)
    )
}

export default Button
