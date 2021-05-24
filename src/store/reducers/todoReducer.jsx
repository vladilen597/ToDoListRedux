const initialState = {
  todos: [
    { name: "buy mleko", date: new Date().toLocaleString(), completed: false },
    { name: "buy hlebo", date: new Date().toLocaleString(), completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "TOGGLE_COMPLETED":
      console.log(state.todos);
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (item[index] == action.payload) {
            return { ...state, completed: !item.completed };
          } else return item;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
