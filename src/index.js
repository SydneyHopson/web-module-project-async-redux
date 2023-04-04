import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

function reducer() {
  return { 
    user: {
      name: 'SYDNEY'
    },
    movies: [
      'Belly',
      'Paid in Full',
      'NBA2k23'
    ],
    todoList: [
      { task: 'Learn Redux', id: 0, completed: false }
    ],
    movieToWatch: 55
  };
}; 

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root')
);
