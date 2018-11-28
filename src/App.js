import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';


class App extends Component {

  render() {

    return (
      <div className="App" id="quote-box">
        <Card />
      </div>
    );
  }
}

export default App;
