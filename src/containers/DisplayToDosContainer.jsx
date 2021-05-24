import { connect } from "react-redux";
import DisplayToDos from "../components/Main/DisplayToDos/DisplayToDos.jsx";

const mapStateToProps = (state) => {
  return { todos: state };
};

const DisplayToDosConnected = connect(mapStateToProps)(DisplayToDos);

export default DisplayToDosConnected;
