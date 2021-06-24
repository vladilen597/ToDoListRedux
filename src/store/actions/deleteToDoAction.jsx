import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const deleteToDo = (index) => {
  return {
    type: TODO_OPERATION.DELETE_TODO,
    payload: index,
  };
};

export default deleteToDo;
