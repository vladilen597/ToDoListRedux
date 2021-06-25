import React, { useEffect, useState } from "react";
import "./DisplayToDos.scss";
import trashcan from "../../../resourses/trashcan.png";
import { connect } from "react-redux";
import toggleCompleted from "../../../store/actions/toggleCompletedAction.jsx";
import deleteToDo from "../../../store/actions/deleteToDoAction.jsx";
import getId from "../../../store/actions/getIdAction.jsx";
import setTodoType from "../../../store/actions/setTodoTypeAction.jsx";
import { Link } from "react-router-dom";

const DisplayToDos = ({ todos, setTodoType, deleteToDo, getId }) => {
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
        {todos.length === 0 ? (
          <h2 className="todos-list-clear">
            You have no appointments or tasks to do! Relax.
          </h2>
        ) : (
          filterTodos.map((item, index) => {
            return (
              <li
                onDragOver={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                onDrop={() => {
                  setTodoType(index);
                }}
                key={index}
                className={
                  item.completed
                    ? "todos-list-item completed"
                    : "todos-list-item"
                }
                style={{ backgroundColor: item.type }}
              >
                <Link
                  to={"/" + index}
                  className="todo-link"
                  onClick={() => getId(index)}
                >
                  <span className="todos-list-item-name">
                    {item.name}
                    <p>{item.date}</p>
                  </span>
                </Link>
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
          })
        )}
      </ul>
      {todos.length !== 0 ? (
        <section className="filter-buttons">
          <button onClick={handleShowAllClick}>SHOW ALL</button>
          <button onClick={handleShowCompletedClick}>SHOW COMPLETED</button>
          <button onClick={handleShowIncompleted}>SHOW INCOMPLETED</button>
        </section>
      ) : (
        <></>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, draggedId: state.draggedId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompleted: (id) => dispatch(toggleCompleted(id)),
    deleteToDo: (id) => dispatch(deleteToDo(id)),
    getId: (id) => dispatch(getId(id)),
    setTodoType: (todo) => dispatch(setTodoType(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
