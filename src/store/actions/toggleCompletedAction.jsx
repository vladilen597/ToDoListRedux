import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const toggleCompleted = (index) => {
  return {
    type: TODO_OPERATION.TOGGLE_COMPLETED,
    payload: index,
  };
};

export default toggleCompleted;
