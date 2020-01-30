import React from 'react'
import DominoBank from '../numComponents/DominoBank'

// function to generate a correct or false button based on global state RNG
const generateDominoButton = (buttonIndex, correctButtonIndex, domino, onClickEvent) => {
    // const POOL = [
    //     "MERCURY", "VENUS", "EARTH", "MARS", "JUPITER",
    //     "SATURN", "URANUS", "NEPTUNE",
    //     ]

    var randomTotal = [Math.floor(Math.random() * 12)]
    while (randomTotal === domino.total) {
        randomTotal = [Math.floor(Math.random() * 12)]
    }

    // if this is the correct button index, give it the correct planet name
    // and pass the onClick event, otherwise random planet and no click event
    const buttonTotal = (buttonIndex === correctButtonIndex)
    ?   domino.total : randomTotal
    const buttonClickEvent = (buttonIndex === correctButtonIndex)
    ? onClickEvent : function(){
        console.log('wrong answer')
    }
    
    return (<button className="choice-button2" onClick={buttonClickEvent}> {buttonTotal}</button>)
}

const DominoButton = (props) => {
    // const [planet, setPlanet] = useState(false);
    // const [correctButtonIndex, setCorrectButtonIndex] = useState(false);

    // useEffect(() => {
    //     setPlanet(props.planet)
    //     setCorrectButtonIndex(props.correctButtonIndex)
    // }, [props.planet, props.correctButtonIndex]);

    return (
        generateDominoButton(props.buttonIndex, props.correctButtonIndex, props.domino, props.onClickEvent)
    )
}

export default DominoButton