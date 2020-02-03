import React, { useState, useEffect } from 'react'


const generateBoxContent = (buttonIndex, difficulty, onClickEvent, smallNum1, smallNum2, bigNum1, bigNum2) => {
    let buttonClickEvent = null;
    let buttonContent = null;
            // BOX 1 
if (buttonIndex === 0) {
    buttonContent = 'Easy'
    //  if difficulty not yet chosen, give set difficulty button functionality
    buttonClickEvent = (difficulty === null)
    ? onClickEvent : null
    
    // IF ITS EASY OR MEDIUM THEN FIRST NUMBER COMES FROM SMALLER ARRAY
    if (difficulty === 'easy' || difficulty === 'medium') {
        buttonContent = smallNum1
    }
    // IF HARD THEN FIRST NUMBER COMES FROM BIGGER NUMBER ARRAY
    else if (difficulty === 'hard') 
    {
        buttonContent = bigNum1
    }
}
            // BOX 2
else if (buttonIndex === 1) {
    buttonContent = 'Medium'
    //  if difficulty not yet chosen, give set difficulty button functionality
    buttonClickEvent = (difficulty === null)
    ? onClickEvent : null
    
    // IF ITS EASY THEN SECOND NUMBER COMES FROM SMALLER ARRAY
    if (difficulty === 'easy') {
        buttonContent = smallNum2
    }
    // IF MEDIUM OR HARD THEN SECOND NUMBER COMES FROM BIGGER NUMBER ARRAY
    if (difficulty === 'medium' || difficulty === 'hard') 
    {
        buttonContent = bigNum2
    }
}
            // BOX 3
else if (buttonIndex === 2) {
    // if difficulty not yet chosen, display button difficulty choice, otherwise show question mark
    buttonContent = (difficulty === null)
    ? 'Hard' : '?'
    //  if difficulty not yet chosen, give set difficulty button functionality
    buttonClickEvent = (difficulty === null)
    ? onClickEvent : null
}
    return (<button className="box" onClick={buttonClickEvent}> {buttonContent} </button>)
}


const Box = (props) => {
    const [difficulty, setDifficulty] = useState(false);
    const [smallNum1, setSmallNum1] = useState(false);
    const [smallNum2, setSmallNum2] = useState(false);
    const [bigNum1, setBigNum1] = useState(false);
    const [bigNum2, setBigNum2] = useState(false);

    useEffect(() => {
    setDifficulty(props.difficulty)
    setSmallNum1(props.smallNum1)
    setSmallNum2(props.smallNum2)
    setBigNum1(props.bigNum1)
    setBigNum2(props.bigNum2)
}, [props.difficulty, props.smallNum1, props.smallNum2, props.bigNum1, props.bigNum2]);

return (
    generateBoxContent(props.buttonIndex, difficulty, props.onClickEvent, smallNum1, smallNum2, bigNum1, bigNum2)
)
}
export default Box;