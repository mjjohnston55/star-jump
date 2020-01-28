import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, message, score, topScore }) => {
    return (
        <Fragment>
            <div className='title'>
                <h1 className='title-text'>{title}</h1>
            </div>
        </Fragment>
    );
};

Title.defaultProps = {
    title:
        'Game of Thrones Memory Game' /* require('../../tiles/otherImages/title.png') */,
    icon: 'fas fa-th'
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Title;
