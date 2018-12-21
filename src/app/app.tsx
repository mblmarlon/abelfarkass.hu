import React, { Component } from 'react';
import './app.css';
import AppRouter from './app.router';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
