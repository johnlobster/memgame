import React from 'react';
import './index.css';

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
          </div>
          <div className="cardFront">
            {/* <div className="cardImageBox"> */}
              <img src={this.props.img} alt="card"></img>
              {process.env.NODE_ENV !== "production" ||
                <div className="memoryCardIndex">
                  {this.props.id}
                </div>}
            {/* </div> */}
            
          </div>
          
          
        </div>
        
      </div>
      
    )
  }
}

export default Card;

