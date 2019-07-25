import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

class Title extends Component {
  render () {

    return (
      <div className="bg-primary titleBox">
        <h1 className="text-white pl-5 pt-2 pb-3 mb-0" >
          <span className="titleSpan pr-3">Memory Game</span>
          <img src={logo} alt="React logo" className="logo"></img>
        </h1>
      </div>
    )
  }
}

export default Title;

// change logo color. Import as svg and then can change color