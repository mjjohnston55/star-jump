import React from 'react'

const Picture = (props) => {
    return (
        <div className="item1" >
            <img className="word-picture" src={`images/${props.word}.jpg`} alt="current-img" height="100%" width="100%"/>
        </div>
    )
}

export default Picture