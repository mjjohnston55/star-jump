// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ name, image, handleClick }) => {
    return (
        <div className='hvr-pulse img' onClick={() => handleClick(name)}>
            <img
                style={{
                    objectFit: 'cover',
                    maxWidth: '200px',
                    maxHeight: '200px',
                    minHeight: '50px',
                    minWidth: '50px'
                }}
                src={require(`./${image}`)}
                alt={name}
            />
        </div>
    );
};

Tile.propTypes = {
    image: PropTypes.string.isRequired
};

export default Tile;
