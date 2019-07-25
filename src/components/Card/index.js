import React from 'react';
import './index.css';

class Card extends React.Component {

  clickFunction = () => {
    this.props.cardClick(this.props.id)
  }
  render() {

    return (
      <div onClick ={this.clickFunction} className="memoryCard">
        <h4>
          Card Number {this.props.id}
        </h4>
      </div>
      
    )
  }
}

export default Card;

