import React, { Component } from 'react';
import './app.scss';
import {AppRouter} from './app.router';
import Navbar from './partials/navbar/navbar.partial';
import Footer from './partials/footer/footer.partial';

export class App extends Component {
  render() {
    return (
      <main className="app">
        <Navbar />
        <AppRouter />
        <Footer />
      </main>
    );
  }
}

export default App;
