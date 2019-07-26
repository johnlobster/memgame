import React from 'react';
import './index.css';
import logo from '../../logo.svg';


class Card extends React.Component {

  clickFunction = () => {
    this.props.cardClick(this.props.id)
  }
  render() {
    return (
      <div onClick ={this.clickFunction} className="memoryCard">
        <div className={this.props.flip ? (
            "flipMe flippableInner"
          ): (
            "flippableInner"
          )}>
          <div className="cardBack">
            <img src={logo} alt="React logo" className="cardBackLogo"></img>
          </div>
          <div className="cardFront">
              <img src={this.props.img} alt="card"></img>            
          </div>
          
          
        </div>
        
      </div>
      
    )
  }
}

export default Card;

// this code was supposed to go after the cardFront image, but for some reason
// react wasn't picking NODE_ENV
// The memoryCardIndex was nopt rendered during npm run start, but was on the github deployed version
// {
//   process.env.NODE_ENV !== "production" ||
//   <div className="memoryCardIndex">
//     {this.props.id}
//   </div>
// }