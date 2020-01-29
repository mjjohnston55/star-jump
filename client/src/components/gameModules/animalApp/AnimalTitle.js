import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Title = ({ message, image, score }) => {
    return (
        <div className='row animal-header'>
            <div className='col-lg-4'>
                <h1 className=''>{message}</h1>
            </div>
            <div className='col-lg-4'>
                <div className=''>klgkjlnsgkjlns</div>
            </div>
            <div className='col-lg-4'>
                <h1 className=''>{score}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

export default Title;
