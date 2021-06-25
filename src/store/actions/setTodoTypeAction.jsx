import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const setTodoType = (todo) => {
  return {
    type: TODO_OPERATION.SET_TODO_TYPE,
    payload: todo,
  };
};

export default setTodoType;
