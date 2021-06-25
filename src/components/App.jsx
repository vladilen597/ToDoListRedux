import React from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Todo from "./Todo/Todo.jsx";
import Draggable from "./Draggable/Draggable.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
const App = () => {
  return (
    <Router>
      <section className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id" component={Todo} />
        </Switch>
        <Draggable />
      </section>
    </Router>
  );
};

export default App;
