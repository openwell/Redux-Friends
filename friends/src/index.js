import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import reducer from './components/reducer/reducer'
import * as serviceWorker from "./serviceWorker";
const logger = store => {
  return next => {
    return action => {
      console.log("dispatching", action);
      const result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};
// since they are two u use combine reducer else u pass the reducer straight to create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,{}, composeEnhancers(applyMiddleware(logger, thunk)));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
