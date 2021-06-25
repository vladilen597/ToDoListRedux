import React from "react";
import setStoreDescription from "../../store/actions/setStoreDescriptionAction.jsx";
import toggleCompleted from "../../store/actions/toggleCompletedAction.jsx";
import "./Todo.scss";

import { connect } from "react-redux";

const Todo = ({ todos, id, setStoreDescription, toggleCompleted }) => {
  const getTodo = () => {
    return todos.filter((item, index) => {
      return index === id;
    });
  };
  const todo = getTodo()[0];

  const handleChange = (e) => {
    setStoreDescription(e.target.value);
  };

  return (
    <main className="todo">
      <h2>{todo.name}</h2>
      <section className="description">
        <article className="description-item left">
          <p>Description</p>
          <textarea
            onChange={handleChange}
            value={todo.description}
            className="description-textarea"
          />
        </article>
        <article className="description-item right">
          <div
            className="todo-completed"
            style={
              todo.completed
                ? { backgroundColor: "lime", color: "#000" }
                : { backgroundColor: "red", color: "#fff" }
            }
            onClick={() => toggleCompleted(id)}
          >
            <div>Completed</div>
            {todo.completed ? <>&#9989;</> : <>&#10060;</>}
          </div>
        </article>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStoreDescription: (description) =>
      dispatch(setStoreDescription(description)),
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
