import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import cards from "./cards.json";
import swal from "sweetalert";

const correct = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/correct--_us_1.mp3"
);
const incorrect = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/incorrect--_us_1.mp3"
);
function ShapeApp() {
  const [item, setItem] = useState(0);
  const [randShape, setRandShape] = useState();
  const [randId, setRandId] = useState();
  const [randAudio, setRandAudio] = useState();

  function playAudio(audioNum = item) {
    console.log(randAudio);
    console.log("PLAYING AUDIO");
    let audio = new Audio(cards[audioNum].audio);
  
    audio.setAttribute("autoplay", "true");
    audio.setAttribute("muted", "muted");
  
    audio.load();
    audio.play();
  }

  useEffect(() => {
    setRandId(cards[item].id);
    setRandShape(cards[item].name);
    setRandAudio(cards[item].audio);

    if (item === 0) {
      playAudio(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  function shapeClick(e) {
  let clickedShapeId = e.target.id;

  // eslint-disable-next-line
  if (clickedShapeId == randId) {
    correct.play();

    let newItem = (item < 7) ? item + 1 : 0;
    
    if (item === 7) {
      swal("You got them all Correct!", "You Win!", "success");
    }

    setItem(newItem);
    setTimeout(function() {
      playAudio(newItem);
    }, 1500);
  } 
 
  else {
    incorrect.play();
    setTimeout(function() {
      playAudio();
    }, 1500);
  }
}
  

  return (
    <div>
      <div className="shape-title">
        <h1>
          {randShape}
        </h1>
      </div>

      <button onClick={() => playAudio()} className="audio-btn1">
        {" "}
        <img
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png"
          alt="play audio"
          className="audio-btn2"
        />{" "}
      </button>

      <div className="row">
        <Link to="/mainapp">
          <div className="back-arrow" onClick={() => setItem(0)}></div>
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {cards.map(card => (
            <div className="col-md-3" key={card.id}>
              <img
                className="shape"
                src={card.image}
                alt={card.name}
                id={card.id}
                onClick={shapeClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShapeApp;
