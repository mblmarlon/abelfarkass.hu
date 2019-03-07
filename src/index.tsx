import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/app';
import * as serviceWorker from './serviceWorker';

require('jquery');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './app/partials/navbar/navbar.partial';
import Footer from './app/partials/footer/footer.partial';


ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Navbar />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
