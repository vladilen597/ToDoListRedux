import React, { useState } from "react";
import { connect } from "react-redux";
import addTodoAction from "../../../store/actions/addToDoAction.jsx";
import "./AddToDo.scss";

const AddToDo = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      addTodo(name);
    } else alert("Typo error!");
  };

  return (
    <form className="add-todo-from" onSubmit={handleSubmit}>
      <input
        className="add-todo-input"
        type="text"
        placeholder="Enter what you want to do..."
        onChange={handleChange}
      />
      <button className="add-todo-button">ADD</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => dispatch(addTodoAction(name)),
  };
};

export default connect(null, mapDispatchToProps)(AddToDo);
