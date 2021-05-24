const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const toggleCompleted = (index) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index,
  };
};

export default toggleCompleted;
