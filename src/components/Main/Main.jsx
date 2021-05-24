import React from "react";
import AddToDoConnected from "../../containers/AddToDoContainer.jsx";
import DisplayToDosConnected from "../../containers/DisplayToDosContainer.jsx";
import AddToDo from "./AddToDo/AddToDo.jsx";

const Main = () => {
  return (
    <div>
      <AddToDoConnected />
      <DisplayToDosConnected />
    </div>
  );
};

export default Main;
