import React from 'react';
import './index.css';

class Scoreboard extends React.Component {
  render() {

    return (
      <div className="bg-primary text-white score">
        <span className="infoBox">{this.props.info}</span>
        <span>Score = {this.props.score} </span>
        <span>High score = {this.props.highScore}</span>
      </div>
      
    )
  }
}

export default Scoreboard;

