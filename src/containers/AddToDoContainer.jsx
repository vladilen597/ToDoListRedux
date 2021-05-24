import { connect } from "react-redux";
import AddToDo from "../components/Main/AddToDo/AddToDo.jsx";
import addTodoAction from "../store/actions/addToDoAction.jsx";
import toggleCompleted from "../store/actions/toggleCompletedAction.jsx";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => dispatch(addTodoAction(name)),
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  };
};

const AddToDoConnected = connect(null, mapDispatchToProps)(AddToDo);

export default AddToDoConnected;
