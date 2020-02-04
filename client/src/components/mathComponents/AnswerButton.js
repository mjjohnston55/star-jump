import React, { useState, useEffect } from 'react'


const generateAnswerButton = (buttonIndex, correctButtonIndex, onClickEvent, difficulty, smallNum1, smallNum2, bigNum1, bigNum2) => {
    
    let firstNumber;
    let secondNumber;

    if (difficulty === "easy") {
        firstNumber = smallNum1;
        secondNumber = smallNum2;
    }
    else if (difficulty === "medium") {
        firstNumber = smallNum1;
        secondNumber = bigNum2;
    }
    else if (difficulty === "hard") {
        firstNumber = bigNum1;
        secondNumber = bigNum2;
    }
    
    
    // if this happens to be the correct button, give it the correct answer and pass the onClick event
    // otherwise, random non-correct answer and no onClick event
    var buttonTotal = (buttonIndex === correctButtonIndex)
     ? (firstNumber + secondNumber) : Math.floor(Math.random() * 18)
     while ((buttonIndex !== correctButtonIndex) && (buttonTotal === (firstNumber + secondNumber))) {
         buttonTotal = Math.floor(Math.random() * 18)
     }
    var buttonClickEvent = (buttonIndex === correctButtonIndex)
    ? onClickEvent : null

    if (difficulty !== null)
    return (<button className="box answer" onClick={buttonClickEvent}> {buttonTotal} </button>)
    else return null
}

const AnswerButton = (props) => {
    const [difficulty, setDifficulty] = useState(false);
    const [correctButtonIndex, setCorrectButtonIndex] = useState(false)
    const [smallNum1, setSmallNum1] = useState(false);
    const [smallNum2, setSmallNum2] = useState(false);
    const [bigNum1, setBigNum1] = useState(false);
    const [bigNum2, setBigNum2] = useState(false);

    useEffect(() => {
    setDifficulty(props.difficulty)
    setCorrectButtonIndex(props.correctButtonIndex)
    setSmallNum1(props.smallNum1)
    setSmallNum2(props.smallNum2)
    setBigNum1(props.bigNum1)
    setBigNum2(props.bigNum2)
     }, [props.difficulty, props.correctButtonIndex, props.smallNum1, props.smallNum2, props.bigNum1, props.bigNum2]);

     return (
        generateAnswerButton(props.buttonIndex, correctButtonIndex, props.onClickEvent, difficulty, smallNum1, smallNum2, bigNum1, bigNum2)
    )

}

export default AnswerButton