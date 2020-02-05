import React, { useContext, useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import UserContext from "../../context/user/userContext";
import "../../Math.css";
import Box from "../mathComponents/Box";
import AnswerButton from "../mathComponents/AnswerButton";

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var biggerNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const MathApp = props => {
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(null);
  const [smallNum1, setSmallNum1] = useState(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  const [smallNum2, setSmallNum2] = useState(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  const [bigNum1, setBigNum1] = useState(
    biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)]
  );
  const [bigNum2, setBigNum2] = useState(
    biggerNumbers[Math.floor(Math.random() * biggerNumbers.length)]
  );
  const [correctButtonIndex, setCorrectButtonIndex] = useState(
    Math.floor(Math.random() * 3)
  );

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
    if (score >= 10) {
      console.log(isAuthenticated)
      console.log(difficulty)
      if ((isAuthenticated === true) && (difficulty.toString() === 'easy')) {
        console.log(isAuthenticated)
        console.log(difficulty)
        swal("You earned 3 stars!", "Great Job!", "success");
        updateStars(user, 3);
      }
      else if ((isAuthenticated === true) && (difficulty.toString() === 'medium')) {
        swal("You earned 6 stars!", "Great Job!", "success");
        updateStars(user, 6);
      }
      else if ((isAuthenticated === true) && (difficulty.toString() === 'hard')) {
        swal("You earned 9 stars!", "Great Job!", "success");
        updateStars(user, 9);
      } else {
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
  };

  const setEasy = () => {
    setDifficulty("easy");
  };

  const setMedium = () => {
    setDifficulty("medium");
  };

  const setHard = () => {
    setDifficulty("hard");
  };

  function plusHider() {
    if (difficulty == null) {
      return <div className="middleBox operator hidden"> + </div>
    }
    return <div className="middleBox operator"> + </div>
  }

  function equalsHider() {
    if (difficulty == null) {
      return          <div className="middleBox equal hidden"> = </div>
    }
    return <div className="middleBox equal"> = </div>
  }

  return (
    <div>
      <br/>
      <div className="row">
        <div className="col-md-1"><div className='hvr-icon-back back-button-wrapper'>
                    <Link to='/'>
                        <i className='fas fa-arrow-circle-left hvr-icon back-button'></i>
                    </Link>
                </div></div>
      <div className="col-md-3"></div>

        <div className="col-md-4"><div className="timerWrapper">
        <div className="timer">Score : {score}</div>
      </div></div>

        <div className="col-md-4"></div>
      </div>

      
      <div className="row">
        <div className="col-md-12">
           {/* <div class="boxWrapper"> */}
        <div className="mathWrapper">
          <Box
            difficulty={difficulty}
            smallNum1={smallNum1}
            bigNum1={bigNum1}
            onClickEvent={setEasy}
            buttonIndex={0}
          />
          {/* <div className="middleBox operator"> + </div> */}
          {plusHider(difficulty)}
          <Box
            difficulty={difficulty}
            smallNum2={smallNum2}
            bigNum2={bigNum2}
            onClickEvent={setMedium}
            buttonIndex={1}
          />
          {equalsHider()}
          <Box difficulty={difficulty} onClickEvent={setHard} buttonIndex={2} />
        </div>
      {/* </div> */}
        </div>
      </div>

     

      <div className="decisionWrapper">
        <AnswerButton
          difficulty={difficulty}
          smallNum1={smallNum1}
          smallNum2={smallNum2}
          bigNum1={bigNum1}
          bigNum2={bigNum2}
          onClickEvent={correctGuess}
          buttonIndex={0}
          correctButtonIndex={correctButtonIndex}
        />
        <AnswerButton
          difficulty={difficulty}
          smallNum1={smallNum1}
          smallNum2={smallNum2}
          bigNum1={bigNum1}
          bigNum2={bigNum2}
          onClickEvent={correctGuess}
          buttonIndex={1}
          correctButtonIndex={correctButtonIndex}
        />
        <AnswerButton
          difficulty={difficulty}
          smallNum1={smallNum1}
          smallNum2={smallNum2}
          bigNum1={bigNum1}
          bigNum2={bigNum2}
          onClickEvent={correctGuess}
          buttonIndex={2}
          correctButtonIndex={correctButtonIndex}
        />
        {/* <div class="box answer first"></div> 
            <div class="box answer second"></div>
            <div class="box answer third"></div> */}
      </div>
    </div>
  );
};

export default MathApp;
