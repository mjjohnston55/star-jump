import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, message, score, topScore }) => {
    return (
        <Fragment>
            <div className='title'>
                {/*                 <img className='title-image' src={title} alt='Title' /> */}
                <h1 className='title-text'>{title}</h1>
            </div>
            <div className='row message'>
                <div className='col-lg-3 score'>Score: {score}</div>
                <div className='col-lg-6'>
                    <h3>{message}</h3>
                </div>
                <div className='col-lg-3 score'>Highscore: {topScore}</div>
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
