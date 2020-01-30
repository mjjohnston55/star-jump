import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Picture from "../planetComponents/Picture";
import PlanetBank from "../planetComponents/PlanetBank";
import PlanetButton from "../planetComponents/PlanetButton";
import swal from "sweetalert";
import UserContext from "../../context/user/userContext";

const PlanetApp = props => {
  const [score, setScore] = useState(0);
  const [planet, setPlanet] = useState(PlanetBank.first());
  const [correctButtonIndex, setCorrectButtonIndex] = useState(
    Math.floor(Math.random() * 2)
  );
  const userContext = useContext(UserContext);

  const { updateStars, user, isAuthenticated } = userContext;

  useEffect(() => {
    setScore(score);
    setPlanet(planet);
    setCorrectButtonIndex(correctButtonIndex);
  }, [score, planet, correctButtonIndex]);

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
    // const planet = PlanetBank.next()
    // const correctButtonIndex = Math.floor(Math.random() * 2)

    console.log(PlanetBank.next());
    setPlanet(PlanetBank.next(planet));
    setCorrectButtonIndex(Math.floor(Math.random() * 2));
    console.log("CORRECT GUESS");
  };

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-4 ">
          <Link to="/">
            <div className="back-arrow"></div>
          </Link>
        </div>
        <div className="col-md-4 ">
          <div className="banner2">
            {" "}<h1> Can you guess the planet based on the picture?</h1>
           
          </div>
        </div>
        <div className="col-md-4 "></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 planet-border"> <Picture planet={planet} /></div>
          <div className="col-md-3"></div>
        </div>
       
        <div className="item2">
          <PlanetButton
            onClickEvent={correctGuess}
            buttonIndex={0}
            correctButtonIndex={correctButtonIndex}
            planet={planet}
          />
          <PlanetButton
            onClickEvent={correctGuess}
            buttonIndex={1}
            correctButtonIndex={correctButtonIndex}
            planet={planet}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetApp;


