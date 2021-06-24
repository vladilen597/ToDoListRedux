import React from "react";
import AddToDo from "./AddToDo/AddToDo.jsx";
import DisplayToDos from "./DisplayToDos/DisplayToDos.jsx";

const Main = () => {
  return (
    <div>
      <AddToDo />
      <DisplayToDos />
    </div>
  );
};

export default Main;
