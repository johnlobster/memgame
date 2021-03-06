import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';
import HelpModal from "../HelpModal";

class Title extends Component {
  render () {

    return (
      <div className="bg-primary titleBox">
        <div className="tBoxTitle text-white pl-3 pt-2 pb-3 mb-0" >
          <span className="titleSpan pr-3">Memory Game</span>
          <span>
            {/* help button and modal */}
            <HelpModal />
            <img src={logo} alt="React logo" className="logo"></img>
          </span>
          
        </div>
      </div>
    )
  }
}

export default Title;

// change logo color. Import as svg and then can change color