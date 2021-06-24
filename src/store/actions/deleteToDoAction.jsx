const DELETE_TODO = "DELETE_TODO";

const deleteToDo = (index) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export default deleteToDo;
