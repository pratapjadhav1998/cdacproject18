import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/index';
const Store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={Store}> <App /></Provider>,
  document.getElementById('root')
);


