import { TODO_OPERATION } from "../../constants/dictionary/TODO_OPERATION.jsx";

const setStoreDescription = (description) => {
  return {
    type: TODO_OPERATION.SET_DESCRIPTION,
    payload: description,
  };
};

export default setStoreDescription;
