import React, { Component } from 'react';
import './app.css';
import AppRouter from './app.router';

export class App extends Component {
  render() {
    return (
      <main className="App h-100">
        <AppRouter />
      </main>
    );
  }
}

export default App;
