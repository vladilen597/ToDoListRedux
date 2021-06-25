import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const setDragged = (id) => {
  return {
    type: TODO_OPERATION.GET_DRAGGED,
    payload: id,
  };
};

export default setDragged;
