import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <input placeholder="Email" id="username"></input>
          <input placeholder="Password" id="password"></input>
          <button id="signin">Sign In</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <h1>TEST</h1>
        </p>
      </div>
    );
  }
}

export default App;
