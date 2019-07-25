import React from 'react';
import './index.css';
import Scoreboard from "../Scoreboard";
import Card from "../Card";
import allCards from "../../data/all-cards";
import _ from "lodash";

class Game extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    allMemoryCards: allCards,
    shuffledMemoryCards: allCards
  }

  cardClick = (id) => {
    console.log("Clicked card " + id);
    let card = this.state.allMemoryCards[id - 1];
    if (card.id !== id) {
      console.log("Something went wrong in Game.cardClick()");
    }
    else if (card.visited ) {
      console.log("Already clicked, reset game");
      // reset everything
      this.setState({ allMemoryCards: allCards}); // clears all the visited fields
      let shuffledCards = _.shuffle(this.state.allMemoryCards); // reshuffle cards
      this.setState( { shuffledMemoryCards: shuffledCards});

    } 
    else {
      // have to create a new array, even if only changed one thing
      let newMemoryCards = this.state.allMemoryCards.map( (card) => {
        if (card.id === id) {
          return { 
            id: card.id,
            imageUrl: card.imageUrl,
            visited: true
          }
        }
        else {
          return card;
        }
      });
      this.setState({ allMemoryCards: newMemoryCards });
    }
    
  }

  render() {
    // lodash shuffle arranges cards in a random order
    return (
      <div>
        <Scoreboard />
        <div className="cardTable">
          {this.state.shuffledMemoryCards.map( (card) => {
            return (
              <Card   
                className="card" 
                img={card.url} 
                id={card.id} 
                key={card.id}
                cardClick={this.cardClick} 
              />
            );

          })}
        </div>
      </div> 
    )
  }
}

export default Game;