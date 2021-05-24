import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./reducers/todoReducer.jsx";

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware()));

export default store;
