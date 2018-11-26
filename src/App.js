import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';


class App extends Component {
  componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;

        document.body.appendChild(script);
    };
  render() {
    return (
      <div className="App" id="quote-box">
          <Card />
      </div>
    );
  }
}

export default App;
