import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './AnimalApp.css';

const Title = ({
    message,
    image,
    score,
    animalAudio,
    playAudio /* , response */
}) => {
    return (
        <div className='row animal-header'>
            <div className='col-lg-4'>
                <h1 /* className={response ? 'shake' : 'normal'} */>
                    {message}
                </h1>
            </div>
            <div className='col-lg-4'>
                <button
                    onClick={() => playAudio(animalAudio)}
                    className='audio-btn1'
                >
                    <img
                        src='https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png'
                        alt='play audio'
                        className='audio-btn2'
                    />
                </button>
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
