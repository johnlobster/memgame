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
    info: ""
  }

  cardClick = (id) => {
    // debug
    console.log("Clicked card " + id);
    this.state.allMemoryCards.forEach( (card) => {
    });
    // memory cards always appear in a random order, so have to run through them all
    // to find out if this card was already visited
    let thisCardVisited = false;
    this.state.allMemoryCards.forEach((card) => {
      if (card.id === id) {
        if ( card.visited) {
          thisCardVisited = true;
        }
      }
    });
    if (thisCardVisited ) {
      console.log("Already clicked, reset game");
      // reset everything
      this.setState( { score:0});
      // using 'allCards' sets back to original array
      let shuffledCards = _.shuffle(allCards);
      this.setState( { allMemoryCards: shuffledCards});

    } 
    else {
      // change score and set visited on the clicked cards
      // increase score and check against highScore
      let newScore = this.state.score + 1;
      if (newScore > this.state.highScore) {
        this.setState({ highScore: newScore});
      }
      this.setState({score: newScore});

      // have to create a new array to change allMemoryCards, even if only changed one thing
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
      let shuffledMemoryCards = _.shuffle(newMemoryCards);
      this.setState({ allMemoryCards: shuffledMemoryCards });
    }
    
  }

  render() {
    return (
      <div>
        <Scoreboard 
          score={this.state.score} 
          highScore={this.state.highScore}
          info={this.state.info} 
        />
        <div className="cardTable">
          {this.state.allMemoryCards.map( (card) => {
            return (
              <Card   
                className="card" 
                img={card.imageUrl} 
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