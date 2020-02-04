import React, { useContext, useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import UserContext from '../../context/user/userContext';
import '../../Math.css';
import Box from '../mathComponents/Box'
import AnswerButton from '../mathComponents/AnswerButton'

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var biggerNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const MathApp = props => {
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState(null);
    const [smallNum1, setSmallNum1] = useState(numbers[Math.floor(Math.random() * numbers.length)])
    const [smallNum2, setSmallNum2] = useState(numbers[Math.floor(Math.random() * numbers.length)])
    const [bigNum1, setBigNum1] = useState(biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)])
    const [bigNum2, setBigNum2] = useState(biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)])
    const [correctButtonIndex, setCorrectButtonIndex] = useState(Math.floor(Math.random() * 3));
      
    const userContext = useContext(UserContext);
    const { updateStars, user, isAuthenticated } = userContext;
  
    useEffect(() => {
      setScore(score);
      setDifficulty(difficulty);
      setSmallNum1(numbers[Math.floor(Math.random() * numbers.length)]);
      setSmallNum2(numbers[Math.floor(Math.random() * numbers.length)]);
      setBigNum1(biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)]);
      setBigNum2(biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)]);
      setCorrectButtonIndex(Math.floor(Math.random() * 3));
    }, [score, difficulty]);

    const correctGuess = () => {
        setScore(score + 1);
        if (score >= 7) {
          if (isAuthenticated && difficulty === "easy") {
            swal("You earned 3 stars!", "Great Job!", "success");
            updateStars(user, 3);
          } 
          if (isAuthenticated && difficulty === "medium") {
            swal("You earned 6 stars!", "Great Job!", "success");
            updateStars(user, 6);
          }
          if (isAuthenticated && difficulty === "hard") {
            swal("You earned 9 stars!", "Great Job!", "success");
            updateStars(user, 9);
          }
          else {
            swal(
              "You won! Make sure to login if you want to earn stars!",
              "Great Job!",
              "success"
            );
          }
          setTimeout(function() {
            props.history.push("/");
          }, 1500);
          return;
        }
        
    }

        const setEasy = () => {
            setDifficulty("easy")
                // once a difficulty is set, choosing a button index to be the correct answer at random
            // setCorrectButtonIndex(Math.floor(Math.random() * 3))
        }

        const setMedium = () => {
            setDifficulty("medium")
                // once a difficulty is set, choosing a button index to be the correct answer at random
            // setCorrectButtonIndex(Math.floor(Math.random() * 3))
        }

        const setHard = () => {
            setDifficulty("hard")
                // once a difficulty is set, choosing a button index to be the correct answer at random
            // setCorrectButtonIndex(Math.floor(Math.random() * 3))
        }


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
                <Box difficulty={difficulty} smallNum1={smallNum1} bigNum1={bigNum1} onClickEvent={setEasy} buttonIndex={0}/>
                <div className="middleBox operator"> + </div>
                <Box difficulty={difficulty} smallNum2={smallNum2} bigNum2={bigNum2} onClickEvent={setMedium} buttonIndex={1}/>
                <div class="middleBox equal"> = </div>
                <Box difficulty={difficulty} onClickEvent={setHard} buttonIndex={2}/>
            </div>
            </div>
            <div class="decisionWrapper"> 
                <AnswerButton difficulty={difficulty} smallNum1={smallNum1} smallNum2={smallNum2} bigNum1={bigNum1} bigNum2={bigNum2} onClickEvent={correctGuess} buttonIndex={0} correctButtonIndex={correctButtonIndex}/>
                <AnswerButton difficulty={difficulty} smallNum1={smallNum1} smallNum2={smallNum2} bigNum1={bigNum1} bigNum2={bigNum2} onClickEvent={correctGuess} buttonIndex={1} correctButtonIndex={correctButtonIndex}/>
                <AnswerButton difficulty={difficulty} smallNum1={smallNum1} smallNum2={smallNum2} bigNum1={bigNum1} bigNum2={bigNum2} onClickEvent={correctGuess} buttonIndex={2} correctButtonIndex={correctButtonIndex}/>
            {/* <div class="box answer first"></div> 
            <div class="box answer second"></div>
            <div class="box answer third"></div> */}
            </div>
        </div>
    );
}

export default MathApp;
