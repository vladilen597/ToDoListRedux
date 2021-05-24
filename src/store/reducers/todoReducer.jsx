const initialState = {[{
  name: "Buy a mleko",
  date: new Date().toLocaleString(),
  completed: false,
}]};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      return {
        ...state,
        note: state.concat([action.payload]),
      };
    default:
      return state;
  }
};

export default todoReducer;
