import React from "react";
import "./Card.css";

//create card method for export, pass in props from App.js
const Card = props => (
    //When clicked, pass the specific id(card) into the click count function
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="imageContainer">
      <img 
      //image source pulls from the json, and alt attaches name from json
      src={props.image} alt={props.name}/>
    </div>
  </div>
 
);

//export for use in app.js
export default Card;
