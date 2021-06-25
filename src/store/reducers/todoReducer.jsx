import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const initialState = {
  id: 0,
  draggedId: "",
  todos: [
    {
      name: "Buy a milk",
      description: "Go to the shop and buy 3% milk",
      date: new Date().toLocaleString(),
      completed: false,
      type: "None",
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_OPERATION.ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case TODO_OPERATION.TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index == action.payload) {
            return { ...state.todos[index], completed: !item.completed };
          } else return item;
        }),
      };
    case TODO_OPERATION.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.payload),
      };
    case TODO_OPERATION.GET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case TODO_OPERATION.SET_DESCRIPTION:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === state.id) {
            return { ...state.todos[index], description: action.payload };
          } else return item;
        }),
      };
    case TODO_OPERATION.GET_DRAGGED:
      return {
        ...state,
        draggedId: action.payload,
      };
    case TODO_OPERATION.SET_TODO_TYPE:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === action.payload) {
            return { ...state.todos[index], type: state.draggedId };
          } else return item;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
