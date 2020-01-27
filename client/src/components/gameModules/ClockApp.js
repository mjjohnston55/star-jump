import React, { useContext} from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import UserContext from '../../context/user/userContext';


var wordBank = [
  "all",
  "at",
  "ate",
  "be",
  "black",
  "brown",
  "came",
  "did",
  "eat",
  "four",
  "get",
  "good",
  "he",
  "like",
  "new",
  "no",
  "now",
  "on",
  "out",
  "please",
  "pretty",
  "ran",
  "ride",
  "saw",
  "say",
  "she",
  "so",
  "soon",
  "that",
  "there",
  "they",
  "this",
  "too",
  "under",
  "want",
  "was",
  "well",
  "went",
  "what",
  "white",
  "will",
  "with",
  "yes"
];
var chosenWordArr = [];
var pickedWord;
var currentAudioURL;
var score = 0;
const correct = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/correct--_us_1.mp3"
);
const incorrect = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/incorrect--_us_1.mp3"
);


function SightWordApp(props) {
    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, updateStars, user } = userContext;


    function chooseRandomWords() {
        score = 0;
        chosenWordArr = [];
        for (var i = 0; i < 200; i++) {
          var rand = wordBank[Math.floor(Math.random() * wordBank.length)];
          var n = chosenWordArr.includes(rand);
          if (n === true) {
            console.log("contains duplicates");
          }
          //only push value to new array if not a duplicate
          else {
            // console.log("no duplicates");
            chosenWordArr.push(rand);
          }
          if (chosenWordArr.length === 20) {
            console.log(chosenWordArr);
            pickedWord =
              chosenWordArr[Math.floor(Math.random() * chosenWordArr.length)];
            console.log(pickedWord);
            currentAudioURL =
              "https://ssl.gstatic.com/dictionary/static/sounds/oxford/" +
              pickedWord +
              "--_us_1.mp3";
            console.log(currentAudioURL);
      
            return;
          }
        }
      }
      
      
      
      function cycle() {
        pickedWord = chosenWordArr[Math.floor(Math.random() * chosenWordArr.length)];
        console.log("Newly Picked Word: " + pickedWord);
        currentAudioURL =
          "https://ssl.gstatic.com/dictionary/static/sounds/oxford/" +
          pickedWord +
          "--_us_1.mp3";
        if (score === 10) {
          swal("You earned 3 stars!", "Great Job!", "success");
          updateStars(user, 3)
        // props.history.push("/");
        setTimeout(function() {
          props.history.push("/");
        }, 1500);
          
          return;
        }
      }
      
      function playAudio() {
        let audio = new Audio(currentAudioURL);
        audio.setAttribute("autoplay", "true");
        audio.setAttribute("muted", "muted");
        audio.load();
        audio.play();
      
        if (score === 10) {
          audio.pause();
        }
      }
      function wordClick(e) {
        let clickedWord = e.target.innerText;
        console.log(clickedWord);
        if (clickedWord === pickedWord) {
          correct.play();
          setTimeout(function() {
            playAudio();
          }, 1500);
          score++;
          console.log("Score: " + score);
          cycle();
        } else {
          incorrect.play();
          setTimeout(function() {
            playAudio();
          }, 1500);
        }
      }
    
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <div className="back-arrow"></div>
            </Link>
          </div>
          <div className="col-md-10"></div>
        </div>
      </div>

      <h3 onLoad={chooseRandomWords()}>Listen to the Word</h3>
      <button onClick={() => playAudio()} className="audio-btn1">
        {" "}
        <img
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png"
          alt="play audio"
          className="audio-btn2"
        />{" "}
      </button>

      <div className="container" onLoad={playAudio(currentAudioURL)}>
        <div className="row">
          {chosenWordArr.map(word => (
            <div className="col-md-3 word-bg">
              <p className="word-inside" key={word} onClick={wordClick}>
                {word}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SightWordApp;
