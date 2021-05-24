const ADD_TODO = "ADD_TODO";

const addTodoAction = (note) => {
  return {
    type: ADD_TODO,
    payload: {
      name: note,
      date: new Date().toLocaleString(),
      completed: false,
    },
  };
};

export default addTodoAction;
