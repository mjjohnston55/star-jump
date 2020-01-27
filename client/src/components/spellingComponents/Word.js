import React from 'react'
import { Letter } from "./Letter"

const Word = (props) => {

    let word = [];

    for (let i = 0; i < props.word.length; i++) {
        word.push(props.word.charAt(i));
    }

    console.log(word);
    return (
        <div className="item2">
        {word.map((letter, index) => <Letter 
            key={index} 
            hidden={index === props.hiddenLetterIndex}
            char={letter} />)}
        </div>

    );
    
}

export default Word;