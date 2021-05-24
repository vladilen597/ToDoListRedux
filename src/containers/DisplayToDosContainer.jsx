import { connect } from "react-redux";
import DisplayToDos from "../components/Main/DisplayToDos/DisplayToDos.jsx";
import toggleCompleted from "../store/actions/toggleCompletedAction.jsx";

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  };
};
const DisplayToDosConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayToDos);

export default DisplayToDosConnected;
