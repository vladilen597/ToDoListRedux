import React from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Todo from "./Todo/Todo.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <section className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:name" component={Todo} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
