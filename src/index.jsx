// @flow

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';


const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}