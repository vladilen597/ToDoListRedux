import React from "react";
import AddToDo from "./AddToDo/AddToDo.jsx";
import DisplayToDos from "./DisplayToDos/DisplayToDos.jsx";

const Main = () => {
  return (
    <main style={{ marginLeft: "100px" }}>
      <AddToDo />
      <DisplayToDos />
    </main>
  );
};

export default Main;
