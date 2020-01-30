import React from "react";
import "../App.css"
import "../About.css"
// import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1 className="aboutTitle">About</h1>
          <div className="about"><p>Star Jump is an online application that takes a holistic approach to cultivate young learning habits through bright and engaging easy-to-start, fun-to-play games; encouraging them to continue through a reward-based system with “stars” and keeping persistent track of their progress through user logins.</p></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 about-section">
          <div className="card-container">
          <div className="flipper">
            <div className="front">
            <h1 className="topText pulsate">Play</h1>
            <br></br>
            <img className="allGames" src="./images/ChooseGameGif.gif" alt="choose game gif"></img>  
            </div>
            <div className="back">
            <h2 className="cardBack">Designed for young children, Star Jump's games are designed to make learning fun and enganging. Using bright colors and pictures. Your child is able to learn new words, practice their addition and subtraction and even learn about the solor system! Our games also include audio help our games accessible to all kids!</h2>
            </div>
          </div>
        </div>
          </div>
          <div className="col-lg-4 about-section">
          <div className="card-container">
          <div className="flipper">
            <div className="front">
            <h1 className="topText pulsate">Learn</h1>
            <img className="newThings" src="./images/learnNewThingsGif.gif" alt="learn new things gif"></img>  
            </div>
            <div className="back">
            <h2 className="cardBack">As Star Jump grows, so does the range of our games and lessons. Our curriculum aims to cover multiple lessons for multiple grade levels, making children of all ages able to use Star Jump as a place to supplement their learning!</h2>
            </div>
          </div>
        </div>    
            </div>
          <div className="col-lg-4 about-section">
          <div className="card-container">
          <div className="flipper">
            <div className="front">
            <h1 className="topText pulsate">Earn</h1>
            <img className="gifStar2" src="./images/aboutStarGif2.gif" alt="about star gif"></img>  
            </div>
            <div className="back">
            <h2 className="cardBack">We want to make your child's learning experience fun, so we've made a reward system to encourage them to keep on playing and learning. When they complete a game, they earn "Stars" which can be used to track your child's progress and give you an idea of how they're doing. </h2>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default About;
