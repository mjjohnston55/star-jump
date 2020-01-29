import React from 'react'

// function to generate a correct or false button based on global state RNG
const generatePlanetButton = (buttonIndex, correctButtonIndex, planet, onClickEvent) => {
    const POOL = [
        "MERCURY", "VENUS", "EARTH", "MARS", "JUPITER",
        "SATURN", "URANUS", "NEPTUNE",
        ]

    var randomPlanet = POOL[Math.floor(Math.random() * 2)]
    while (randomPlanet === planet) {
        randomPlanet = POOL[Math.floor(Math.random() * 2)]
    }

    // if this is the correct button index, give it the correct planet name
    // and pass the onClick event, otherwise random planet and no click event
    const buttonPlanet = (buttonIndex === correctButtonIndex)
    ?   planet : randomPlanet
    const buttonClickEvent = (buttonIndex === correctButtonIndex)
    ? onClickEvent : function(){
        console.log('wrong answer')
    }
    
    return (<button className="choice-button2" onClick={buttonClickEvent}> {buttonPlanet}</button>)
}

const PlanetButton = (props) => {
    // const [planet, setPlanet] = useState(false);
    // const [correctButtonIndex, setCorrectButtonIndex] = useState(false);

    // useEffect(() => {
    //     setPlanet(props.planet)
    //     setCorrectButtonIndex(props.correctButtonIndex)
    // }, [props.planet, props.correctButtonIndex]);

    return (
        generatePlanetButton(props.buttonIndex, props.correctButtonIndex, props.planet, props.onClickEvent)
    )
}

export default PlanetButton