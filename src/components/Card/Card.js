import React, { Component } from 'react';
import './Card.scss';
import Button from '../Button/Button';

class Card extends Component {
  render () {
    return (
      <div className="App-card">
        <q id="text">I'm the text quote</q>
        <p id="author">author</p>
        <Button />
        <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
      </div>
    );
  }
};

export default Card;
