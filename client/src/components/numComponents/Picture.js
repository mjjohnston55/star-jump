import React from 'react';

const Picture = props => {
    return (
        <div className='item1'>
            {/* <img className="planet-picture" src={`images/${props.planet}.jpg`} alt="current-img" height="100%" width="100%"/> */}
            <img
                className='domino-picture'
                src={`./domino-images/${props.domino.name}.png`}
                alt='current-img'
                height='100%'
                width='100%'
            />
        </div>
    );
};

export default Picture;
