import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const getId = (id) => {
  return {
    type: TODO_OPERATION.GET_ID,
    payload: id,
  };
};

export default getId;
