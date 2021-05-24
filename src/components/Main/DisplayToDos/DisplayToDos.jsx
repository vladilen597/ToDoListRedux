import React from "react";
import "./DisplayToDos.css";

const DisplayToDos = ({ todos, toggleCompleted }) => {
  console.log(todos);
  return (
    <ul className="todos-list">
      <li>
        {todos.todos.map((item, index) => {
          return (
            <li key={index} className="todos-list-item">
              <div
                className="todos-list-item-name"
                onClick={() => {
                  toggleCompleted(index);
                }}
              >
                {item.name}
              </div>
              <p>{item.date}</p>
            </li>
          );
        })}
      </li>
    </ul>
  );
};

export default DisplayToDos;
