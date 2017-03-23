/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import App from './App';
import './index.css';

if (navigator.standalone) {
  // In standalone mode (added to home screen) we still need
  // FastClick to avoid the good old 300ms tap delay.
  new FastClick(document.body);
} else {
  // Allow :active styles to work in mobile browsers.
  document.addEventListener('touchstart', function() {}, true);
}

ReactDOM.render(<App />, document.getElementById('root'));
