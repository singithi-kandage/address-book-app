import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./index.scss";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";

import RootReducer from "./StateSetup/RootReducer";
import GetInitialState from "./StateSetup/GetInitialState";

const store = createStore(
  RootReducer,
  GetInitialState(),
  applyMiddleware(thunk)
);

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
