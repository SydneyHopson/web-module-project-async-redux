import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer';



import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,logger)))

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root')
);
