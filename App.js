import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  //this.state.cards set to access json array
  state = {
    cards: cards
  };

  


  //method to check if card has been previously clicked
  clickCount = id => {
    //pass in object and index for access
    this.state.cards.find((obj, index) => {
      if (obj.id === id) {
        //name of shape
        console.log(obj.name)
        //audio of shape
        console.log(obj.audio);
        //  Play audio
        let audio = document.getElementById("cardAudio");
        audio.setAttribute("src", obj.audio);
        audio.load();
        audio.play();


        //id of shape
        console.log(obj.id)

        //on click increase index/key of shape
        
      

      
      }
      //eslint-disable-next-line
      return;
    });
  };

  render() {
    //render components and pass properties
    return (
      <Wrapper>
        {/* Passing properties score and highscore into the Header Component*/}
        <Header currentShape={this.state.cards.map(card => (card.name))}>
        
          SHAPES

        </Header>
        {/* Loop/map through cards json, create 'card' for each, with properties, clickcount, id, key, and image */}
        {this.state.cards.map(card => (
          <Card
            //Pass clickCount property
            clickCount={this.clickCount}
            // id and image already defined in the json object, attaching key property to not trigger error in React
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}

        <audio id="cardAudio" src="" />
      </Wrapper>
    );
  }
}

export default App;
