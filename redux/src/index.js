import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import resultReducer from "./store/reducers/result";
import counterReducer from "./store/reducers/counter";
import thunk from 'redux-thunk';

//create action creaters for result.js counter.js and one index.js

//add utility fuction for reducers


//leaner switch case in result.js

// const reducer = combineReducers({
//   ctr: counterReducer,
//   res: resultReducer
// });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log("[Middleware]",action);
      const result = next(action);
      console.log('[Middleware]', store.getState());
      return result;
    };
  };
};

const store = createStore(reducer, composeEnhancer(applyMiddleware(loggerMiddleware,thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
