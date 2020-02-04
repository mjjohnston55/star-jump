import React from 'react'
import DominoBank from '../numComponents/DominoBank'

// function to generate a correct or false button based on global state RNG
const generateDominoButton = (buttonIndex, correctButtonIndex, domino, onClickEvent) => {

    console.log(domino.total)

    var buttonTotal = (buttonIndex === correctButtonIndex)
    ?   domino.total : (Math.floor(Math.random() * 12))
    while ((buttonIndex !== correctButtonIndex) && (buttonTotal === (domino.total))) {
        buttonTotal = Math.floor(Math.random() * 12)
    }
    var buttonClickEvent = (buttonIndex === correctButtonIndex)
    ? onClickEvent : function(){
        console.log('wrong answer')
    }
    
    return (<button className="choice-button2" onClick={buttonClickEvent}> {buttonTotal}</button>)
}

const DominoButton = (props) => {


    return (
        generateDominoButton(props.buttonIndex, props.correctButtonIndex, props.domino, props.onClickEvent)
    )
}

export default DominoButton