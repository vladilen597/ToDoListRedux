import React from "react";
import AddToDoConnected from "../../containers/AddToDoContainer.jsx";
import DisplayToDos from "./DisplayToDos/DisplayToDos.jsx";
import AddToDo from "./AddToDo/AddToDo.jsx";

const Main = () => {
  return (
    <div>
      <AddToDoConnected />
      <DisplayToDos />
    </div>
  );
};

export default Main;
