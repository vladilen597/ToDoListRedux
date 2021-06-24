import React, { useEffect, useState } from "react";
import "./DisplayToDos.css";
import trashcan from "../../../resourses/trashcan.png";
import { connect } from "react-redux";
import toggleCompleted from "../../../store/actions/toggleCompletedAction.jsx";
import deleteToDo from "../../../store/actions/deleteToDoAction.jsx";

const DisplayToDos = ({ todos, toggleCompleted, deleteToDo }) => {
  const [filterTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleShowAllClick = () => {
    setFilteredTodos(todos);
  };

  const handleShowCompletedClick = () => {
    setFilteredTodos(
      todos.filter((item) => {
        return item.completed === true;
      })
    );
  };

  const handleShowIncompleted = () => {
    setFilteredTodos(
      todos.filter((item) => {
        return item.completed === false;
      })
    );
  };

  return (
    <main>
      <ul className="todos-list">
        {filterTodos.map((item, index) => {
          return (
            <li
              key={index}
              className={
                item.completed ? "todos-list-item completed" : "todos-list-item"
              }
            >
              <span
                className="todos-list-item-name"
                onClick={() => {
                  toggleCompleted(index);
                }}
              >
                {item.name}
                <p>{item.date}</p>
              </span>
              <button
                className="todos-list-item-delete"
                onClick={() => {
                  deleteToDo(index);
                }}
              >
                <img src={trashcan} />
              </button>
            </li>
          );
        })}
      </ul>
      <section className="filter-buttons">
        <button onClick={handleShowAllClick}>SHOW ALL</button>
        <button onClick={handleShowCompletedClick}>SHOW COMPLETED</button>
        <button onClick={handleShowIncompleted}>SHOW INCOMPLETED</button>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
    deleteToDo: (id) => dispatch(deleteToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
