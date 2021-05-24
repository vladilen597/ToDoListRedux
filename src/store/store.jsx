import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer.jsx";

const store = createStore(todoReducer);

export default store;
