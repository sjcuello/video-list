import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import reducer from './reducers'
import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initialState = {
  playing: {},
  queue:{},
  videos:[],
};

fetch("https://api.jsonbin.io/b/5ef409df2406353b2e0c4068")
  .then(res => res.json())
  .then(
    (result) => {
      console.log('result: ', result.categories[0].videos);
      initialState.videos = result.categories[0].videos;
    },
    (error) => {
      console.log('error: ', error);
    }
  )

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
