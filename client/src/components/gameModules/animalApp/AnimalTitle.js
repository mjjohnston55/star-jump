import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AnimalApp.css';

const Title = ({ message, score, animalAudio, playAudio, correct }) => {
    return (
        <div className='row animal-header'>
            <div className='col-lg-1'>
                <div className='hvr-icon-back back-button-wrapper'>
                    <Link to='/'>
                        <i className='fas fa-arrow-circle-left hvr-icon back-button'></i>
                    </Link>
                </div>
            </div>
            <div className='col-lg-6'>
                <h1 className={correct}>{message}</h1>
                {/* class is being set to whatever string is passed in as 'correct' */}
            </div>
            <div className='col-lg-3'>
                <button
                    onClick={() => playAudio(animalAudio)}
                    /* onEnded={() => } */
                    className={`${correct === 'shake' ? 'correct-true' : ''}`}
                >
                    <img
                        src='https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png'
                        alt='play audio'
                        className={`audio-btn2 ${
                            correct === 'shake' ? 'correct-true' : ''
                        }`}
                    />
                </button>
            </div>
            <div className='col-lg-2'>
                <h1
                    className={correct === 'correct-true' ? 'correct-true' : ''}
                >
                    {score}/10
                </h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

export default Title;
