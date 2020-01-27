import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import '../../Math.css';

function MathApp() {
    return (
        <div>
            <h1>Math App</h1>
            <Link to='/'>
                <div className='back-arrow'></div>
            </Link>
                    <div class="timerWrapper">
            <div class="timer">Score: 0</div>
            </div>
            <div class="boxWrapper">
            <div class="mathWrapper">
                <div class="box box1">Easy</div>
                <div class="middleBox operator"> + </div>
                <div class="box box2">Medium</div>
                <div class="middleBox equal"> = </div>
                <div class="box box3">Hard</div>
            </div>
            </div>
            <div class="decisionWrapper">
            <div class="box answer first"></div>
            <div class="box answer second"></div>
            <div class="box answer third"></div>
            </div>
        </div>
    );
}

export default MathApp;
