import React from 'react';
import './index.css';
import Scoreboard from "../Scoreboard";
import Card from "../Card";

class Game extends React.Component {
  render() {

    return (
      <div>
        <Scoreboard />
        <div>
          <Card />
        </div>
      </div> 
    )
  }
}

export default Game;