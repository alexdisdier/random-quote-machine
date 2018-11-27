import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  constructor(props){
    super(props);
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    console.log("new quote");
    alert("hello world");
  }

  render () {
    return (
      <button id="new-quote" onClick={this.newQuote}>
        new quote
      </button>
    );
  }
};

export default Button;
