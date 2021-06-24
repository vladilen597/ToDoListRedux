import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_OPERATION.ADD_TODO:
      return { todos: [action.payload, ...state.todos] };
    case TODO_OPERATION.TOGGLE_COMPLETED:
      return {
        todos: state.todos.map((item, index) => {
          if (index == action.payload) {
            return { ...state.todos[index], completed: !item.completed };
          } else return item;
        }),
      };
    case TODO_OPERATION.DELETE_TODO:
      return {
        todos: state.todos.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
