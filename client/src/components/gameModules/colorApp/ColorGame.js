// This component will set the grid and style for the game container and its tiles.

import React from 'react';
import PropTypes from 'prop-types';
import Tile from './ColorTile';

const Game = ({ tiles, handleClick }) => {
    return (
        <div className='container color-wrapper' style={gridStyle}>
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    name={tile.name}
                    image={tile.image}
                    audio={tile.audio}
                    used={tile.used}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

Game.propTypes = {
    tiles: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr)',
    gridGap: '2rem',
    justifyItems: 'center',
    padding: '2rem'
};

export default Game;
