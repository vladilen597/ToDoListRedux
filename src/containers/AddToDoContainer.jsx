import { connect } from "react-redux";
import AddToDo from "../components/Main/AddToDo/AddToDo.jsx";
import addTodoAction from "../store/actions/addToDoAction.jsx";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => dispatch(addTodoAction(name)),
  };
};

const AddToDoConnected = connect(null, mapDispatchToProps)(AddToDo);

export default AddToDoConnected;
