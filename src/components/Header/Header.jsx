import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    let date = new Date().toLocaleString();

    let timer = setInterval(() => {
      setDate(date);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <header className="header">
      <h1>ToDo List</h1>
      <time className="date">{date}</time>
    </header>
  );
};

export default Header;
