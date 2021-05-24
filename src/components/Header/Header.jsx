import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    date: "",
  };

  getDate = () => {
    let date = new Date().toLocaleString();

    this.setState({
      date: date,
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => this.getDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <header className="header">
        <h1>ToDo List</h1>
        <time className="date">{this.state.date}</time>
      </header>
    );
  }
}

export default Header;
