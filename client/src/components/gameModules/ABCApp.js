import React, { useContext, useState, useEffect } from "react";
// import '../../App.css';
import { Link } from "react-router-dom";
import UserContext from "../../context/user/userContext"; //////
import Word from "../spellingComponents/Word";
import WordBank from "../spellingComponents/WordBank";
import Picture from "../spellingComponents/Picture";
import LetterButton from "../spellingComponents/LetterButtons";
import swal from "sweetalert";
import "../spellingComponents/spellingApp.css";

const ABCApp = props => {
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(WordBank.first());
  const [hiddenLetterIndex, setHiddenLetterIndex] = useState(
    Math.floor(Math.random() * 3)
  );
  const [correctButtonIndex, setCorrectButtonIndex] = useState(
    Math.floor(Math.random() * 3)
  );
  const userContext = useContext(UserContext);
  const { updateStars, user, isAuthenticated } = userContext;

  useEffect(() => {
    setScore(score);
    setWord(word);
    setHiddenLetterIndex(hiddenLetterIndex);
    setCorrectButtonIndex(correctButtonIndex);
  }, [score, word, hiddenLetterIndex, correctButtonIndex]);

  const correctGuess = () => {
    // let { score } = this.state
    // let { hiddenLetterIndex } = this.state
    setScore(score + 1);
    if (score > 10) {
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
    setWord(WordBank.next(word));
    setCorrectButtonIndex(Math.floor(Math.random() * 3));
    setHiddenLetterIndex(Math.floor(Math.random() * 3));

    console.log("CORRECT GUESS");
  };

  // main render fuction
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-4">
          <Link to="/">
            <div className="back-arrow"></div>
          </Link>
        </div>
        <div className="col-md-4">
          <div className="banner">
            <h1 className="abc-title">
              Fill in the missing letters in each word!
            </h1>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Picture word={word} />
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Word word={word} hiddenLetterIndex={hiddenLetterIndex} />
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-2"><LetterButton
          onClickEvent={correctGuess}
          buttonIndex={0}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        /></div>
          <div className="col-md-2"><LetterButton
          onClickEvent={correctGuess}
          buttonIndex={1}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        /></div>
          <div className="col-md-2">
          
        
        
        <LetterButton
          onClickEvent={correctGuess}
          buttonIndex={2}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        />
      
          </div>
          <div className="col-md-3"></div>
        </div>

      </div>


      {/* <div className="item3">
        <LetterButton
          onClickEvent={correctGuess}
          buttonIndex={0}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        />
        <LetterButton
          onClickEvent={correctGuess}
          buttonIndex={1}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        />
        <LetterButton
          onClickEvent={correctGuess}
          buttonIndex={2}
          correctButtonIndex={correctButtonIndex}
          hiddenLetterIndex={hiddenLetterIndex}
          word={word}
        />
      </div> */}
    </div>
  );
};

export default ABCApp;

// function ABCApp() {
//     const userContext = useContext(UserContext); //////

//     const { updateStars, user } = userContext; //////

//     const put = () => {
//         /* THIS IS FOR TESTING UPDATE STARS */
//         updateStars(user, 2);
//     };

//     return (
//         <div>
//             <h1>ABC App</h1>
//             <Link to='/'>
//                 <div className='back-arrow'></div>
//             </Link>
//             <button onClick={put}></button>
//         </div>
//     );
// }

// export default ABCApp;
