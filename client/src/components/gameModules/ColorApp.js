import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import cards from "./colors.json";
import swal from "sweetalert";
import UserContext from "../../context/user/userContext";

const correct = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/correct--_us_1.mp3"
);
const incorrect = new Audio(
  "https://ssl.gstatic.com/dictionary/static/sounds/oxford/incorrect--_us_1.mp3"
);

function randomizeOrder() {
  cards.sort(() => Math.random() - 0.5);
}

function ColorApp(props) {
  
  useState(randomizeOrder());
  const [item, setItem] = useState(0);
  const [randColor, setRandColor] = useState();
  const [randId, setRandId] = useState();
  const [randAudio, setRandAudio] = useState();
  const userContext = useContext(UserContext);
  const { isAuthenticated, updateStars, user } = userContext;

  function playAudio(audioNum = item) {
    console.log(randAudio);
    console.log("PLAYING AUDIO");
    let audio = new Audio(randAudio);

    audio.setAttribute("autoplay", "true");
    audio.setAttribute("muted", "muted");

    audio.load();
    audio.play();
  }

  useEffect(() => {
    setRandId(cards[item].id);
    setRandColor(cards[item].name);
    setRandAudio(cards[item].audio);

    if (item === 0) {
      playAudio(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  function colorClick(e) {
    let clickedColorId = e.target.id;

    // eslint-disable-next-line
    if (clickedColorId == randId) {
      correct.play();

      let newItem = item < 8 ? item + 1 : 0;

      if (item === 8) {
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

      setItem(newItem);
      // setTimeout(function() {
      //   playAudio(newItem);
      // }, 1500);
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
          <div className="col-lg-4">
            <Link to="/">
              <div className="back-arrow" onClick={() => setItem(0)}></div>
            </Link>
          </div>
          <div className="col-lg-4">
            
              <h1 className="color-title">{randColor}</h1>
            
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      <button onClick={() => playAudio()} className="audio-btn1">
        {" "}
        <img
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png"
          alt="play audio"
          className="audio-btn2"
        />{" "}
      </button>

      <div className="container color-row">
        <div className="row justify-content-center">
          {cards.map(card => (
            <div className="box-color" key={card.id}>
              <div className="col-lg-2" key={card.id}>
                <img
                  className="color"
                  src={card.image}
                  alt={card.name}
                  id={card.id}
                  onClick={colorClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorApp;
