import React, { Component } from "react";
import "./AddToDo.css";

class AddToDo extends Component {
  state = { name: "" };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form
        className="add-todo-from"
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.name.length > 0) {
            this.props.addTodo(this.state.name);
          } else alert("Typo error!");
        }}
      >
        <input
          className="add-todo-input"
          type="text"
          placeholder="Enter what you want to do..."
          onChange={this.handleChange}
        />
        <button className="add-todo-button">ADD</button>
      </form>
    );
  }
}

export default AddToDo;
