import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// change page title with window visibility
document.addEventListener('visibilitychange', () => (
  document.hidden
    ? document.title = document.title.replace(' - ', ' | ')
    : document.title = document.title.replace(' | ', ' - ')
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
