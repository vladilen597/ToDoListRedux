import React from "react";
import { Provider } from "react-redux";
const { render } = require("react-dom");
import App from "./components/App.jsx";

import "./index.css";
import store from "./store/store.jsx";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
