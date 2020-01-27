import React, { useState, useEffect } from 'react'



export const Letter = (props) => {
    const [hidden, setHidden] = useState(false);
    const [char, setChar] = useState("");

    useEffect(() => {
        setHidden(props.hidden);
        setChar(props.char);
    }, [props.hidden, props.char]);

    return (
        <span>{hidden ? "_" : char}</span>
    );
}