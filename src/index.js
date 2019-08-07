import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const stateChanges = (state, action) => {
  if (state === undefined) {
    return { n: 0 };
  } else {
    if (action.type === "add") {
      var newState = { n: state.n + action.payload };
      return newState;
    } else {
      return state;
    }
  }
};
const store = createStore(stateChanges);

// store.subscribe(() => {
//   render(store);
// });

// function add3() {
//   var oldState = store.getState();
//   if (oldState % 2 === 1) {
//     store.dispatch({ type: "add", payload: 1 });
//   }
// }

// function add4() {
//   setTimeout(() => {
//     store.dispatch({ type: "add", payload: 1 });
//   }, 2000);
// }

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
