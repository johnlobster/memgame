import React from 'react';
import './index.css';

class Scoreboard extends React.Component {
  render() {

    return (
      <div>
        <h4>
          Scoreboard
        </h4>
        <h4> Score = {this.props.score} </h4>
        <h4>High score = {this.props.highScore}</h4>
      </div>
      
    )
  }
}

export default Scoreboard;

