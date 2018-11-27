import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';

const API = 'https://talaikis.com/api/quotes/';
const DEFAULT_QUERY = '';


class App extends Component {
  constructor() {
    super();

    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => console.log(data[0].quote))
      .then(data => this.setState({ quotes: data.quotes}));
  }

  render() {
    const { quotes } = this.state;

    return (
      <div className="App" id="quote-box">
          <Card />
          <ul>
          {quotes.map(quote =>
            <li>{quote.quote}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
