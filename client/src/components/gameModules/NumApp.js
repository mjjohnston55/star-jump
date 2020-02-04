import React, { useState, useEffect, useContext } from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from "../../context/user/userContext";
import swal from "sweetalert";
import DominoBank from "../numComponents/DominoBank";
import Picture from '../numComponents/Picture'
import DominoButton from '../numComponents/DominoButton'

const NumApp = props => {
    const [score, setScore] = useState(0);
    const [domino, setDomino] = useState(DominoBank.first());
    const [correctButtonIndex, setCorrectButtonIndex] = useState(
      Math.floor(Math.random() * 3)
    );
    const userContext = useContext(UserContext);
  
    const { updateStars, user, isAuthenticated } = userContext;
  
    useEffect(() => {
      setScore(score);
      setDomino(domino);
      setCorrectButtonIndex(correctButtonIndex);
    }, [score, domino, correctButtonIndex]);
  
    const correctGuess = () => {
      setScore(score + 1);
      if (score >= 7) {
        if (isAuthenticated) {
          swal("You earned 3 stars!", "Great Job!", "success");
          updateStars(user, 3);
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
  
      console.log(score);
  
      console.log(DominoBank.next());
      setDomino(DominoBank.next(domino));
      setCorrectButtonIndex(Math.floor(Math.random() * 3));
      console.log("CORRECT GUESS");
    };
  
    return (
      <div>
              <br />
      <div className="row">

        <div className="col-md-1">
        <div className='hvr-icon-back back-button-wrapper'>
                    <Link to='/'>
                        <i className='fas fa-arrow-circle-left hvr-icon back-button'></i>
                    </Link>
                </div>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-4 ">
          <div className="banner2">
            {" "}<h1> Add the dots on both sides of the domino together to figure out the total!</h1>
           
          </div>
        </div>
        <div className="col-md-4 "></div>
      </div>

       <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 domino"> <Picture domino={domino} /></div>
          <div className="col-md-3"></div>
        </div>
       
        <div className="item2">
          <DominoButton
            onClickEvent={correctGuess}
            buttonIndex={0}
            correctButtonIndex={correctButtonIndex}
            domino={domino}
          />
          <DominoButton
            onClickEvent={correctGuess}
            buttonIndex={1}
            correctButtonIndex={correctButtonIndex}
            domino={domino}
          />
          <DominoButton
            onClickEvent={correctGuess}
            buttonIndex={2}
            correctButtonIndex={correctButtonIndex}
            domino={domino}
          />
        </div>
      </div>


      </div>
    );
  };
  
  export default NumApp;
