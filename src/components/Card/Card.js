import React, { Component } from 'react';
import './Card.scss';

// Creating a const with our API url
const API = 'https://talaikis.com/api/quotes/';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // By setting quotes to an empty array, we avoid running into any null pointer exceptions
      quotes: [],
      tempQuote: 'There is nothing that fear and hope does not permit men to do.',
      tempAuthor: 'Luc de Clapiers',
      // the loading state should be used to indicate that an asynchronous request is happening.
      isLoading: false,
      error: null
    };

    // all methods need to be bind within the constructor
    this.displayQuote = this.displayQuote.bind(this);
  }

  // this is the lifecycle method to fetch data
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)

      .then(response => {
        if (response.ok) {
          // We define the format of the data from the api that we wish to receive
          return response.json();
          // if our response does not match our expected data.
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      // When the data is fetched successfully, it will be stored in the local state. We also toggle the property of isLoading from true to false
      .then(data => this.setState({ quotes: data, isLoading: false}))
      // When using promises, the catch() block is usually used after the then() block to handle errors.
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // this function contains the data about to be displayed
  displayQuote() {
    // Creating a random whole number as index to my quotes array between 0 and 100
    const index = parseInt(Math.random() * 101);

    // Changing the temp local state values everytime displayQuote is called
    this.setState({
      // quote and author are both names from JSON data
      // temp... will be set to the names/value
      tempQuote: this.state.quotes[index].quote,
      tempAuthor: this.state.quotes[index].author
    });

  };

  render () {

    // Show the error message of erroneous status code.
    if (this.error){
      return <p>{this.error.message}</p>
    };

    // If the resolved data is not ready, display loading
    if (this.isLoading){
      return <p>Loading ...</p>
    };

    return (
      <div className="App-card">
        <q id="text">{this.state.tempQuote}</q>
        <p id="author">{this.state.tempAuthor}</p>
        <button id="new-quote" onClick={this.displayQuote}>new quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
      </div>
    );
  }
};

export default Card;
