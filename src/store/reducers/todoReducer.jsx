const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [action.payload, ...state.todos] };
    case "TOGGLE_COMPLETED":
      return {
        todos: state.todos.map((item, index) => {
          if (index == action.payload) {
            return { ...state.todos[index], completed: !item.completed };
          } else return item;
        }),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
