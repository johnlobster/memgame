import React from 'react';
import './index.css';

class Card extends React.Component {

  clickFunction = () => {
    this.props.cardClick(this.props.id)
  }
  render() {
    console.log("Setting up card " + this.props.id);
    return (
      <div onClick ={this.clickFunction} className="memoryCard">
        <h4>
          Card Number {this.props.id}
        </h4>
        <img src={this.props.img}  alt="card"></img>
      </div>
      
    )
  }
}

export default Card;

