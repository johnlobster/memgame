import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

class Title extends Component {
  render () {
    console.log(logo);

    return (

      <h1>
        <span>Memory Game</span>
        <img src={logo} alt="React logo" className="logo"></img>
      </h1>
    )
  }
}

export default Title;

// change logo color. Import as svg and then can change color