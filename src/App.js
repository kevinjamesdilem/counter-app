import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome';
import Today from './today';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Welcome name = "test"/>
        <Today day = "Wednesday"/>
        <Counter />
      </div>
    );
  }
}


export default App;
