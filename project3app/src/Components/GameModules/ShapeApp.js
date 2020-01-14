import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import cards from "./cards.json";


let randId;
let randShape;
let randAudio;
let i = 0;
const correct = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/correct--_us_1.mp3');
const incorrect = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/incorrect--_us_1.mp3');

function pickRandom(){
  // randId = cards[ Math.floor(Math.random() * cards.length) ]['id'];
  
  randId = cards[i].id;
  randShape = cards[randId-1].name;
  randAudio = cards[randId-1].audio;
  // console.log(randId);
  // console.log(randShape);
  // console.log(randAudio);

  // setTimeout(playAudio(), 6000);
  setTimeout(function(){ playAudio(); }, 1500);


  if (i > 0 && i < 8) {
    document.getElementById("name").innerHTML = randShape;
  }
  

  
}

function resetGame() {
  i = 0;
}


function playAudio(){
  let audio = new Audio(randAudio);

  audio.setAttribute("autoplay", "true");
  audio.setAttribute("muted", "muted");

  audio.load();
  audio.play();

}


function shapeClick(e) {
  let clickedShapeId = e.target.id;
  let clickedShapeName = e.target.alt;
  console.log("------------------------")
  console.log("Clicked Shape Id: " + clickedShapeId);
  console.log("Clicked Shape Name: " + clickedShapeName)
  console.log("\nRandom Id: " + randId)
  console.log("Random Shape: " + randShape)
  console.log("------------------------")
  // eslint-disable-next-line
   if(clickedShapeId == randId) {
     console.log("correct")
     console.log("------------------------")

       
      correct.play();
      if(i < 7) {
        i++;
        pickRandom();
      }
      else {
        alert("You Win!")
        i=0;
        return;
      }
      
      
     
   }
   else {
    incorrect.play();
    setTimeout(function(){ playAudio(); }, 1500);
     console.log("incorrect")
   }
}

function ShapeApp() {
  return (
    <div>

      <div className="shape-title">
  <h1 onLoad={pickRandom()} id="name">{randShape}</h1>
      </div>
      

      <button onClick={playAudio}
      className="audio-btn1"> <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png" alt="play audio" className="audio-btn2"/> </button>
      


      <div className="row">
        <Link to="/mainapp">
          <div className="back-arrow" onClick={resetGame}></div>
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {cards.map(card => (
            <div className="col-md-3">
              <img className="shape" src={card.image} alt={card.name} id={card.id} onClick={shapeClick}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShapeApp;
