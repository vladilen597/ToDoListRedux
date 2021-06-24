import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const addTodoAction = (note) => {
  return {
    type: TODO_OPERATION.ADD_TODO,
    payload: {
      name: note,
      date: new Date().toLocaleString(),
      completed: false,
    },
  };
};

export default addTodoAction;
