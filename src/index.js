// should be first
import 'normalize.css/normalize.css';
import './layout.css';

import ReactDOM from 'react-dom';
import React from 'react';
import {AppContainer} from 'react-hot-loader'
import App from './App';

const $root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    $root,
  )
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}