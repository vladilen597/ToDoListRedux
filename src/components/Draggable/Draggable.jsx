import React from "react";
import setDragged from "../../store/actions/draggedIdAction.jsx";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import "./Draggable.scss";

const Draggable = ({ setDragged }) => {
  const handleDrag = (e) => {
    setDragged(e.target.id);
  };

  const location = useLocation();

  return (
    <aside
      className="draggable-types"
      style={
        location.pathname === "/" ? { display: "block" } : { display: "none" }
      }
    >
      <ul className="types-list">
        <li>
          <div
            onDragStart={handleDrag}
            draggable
            id="red"
            className="circle red"
          ></div>
          WORK TASK
        </li>
        <li>
          <div
            onDragStart={handleDrag}
            draggable
            id="green"
            className="circle green"
          ></div>
          HOME CHORES
        </li>
        <li>
          <div
            onDragStart={handleDrag}
            draggable
            id="yellow"
            className="circle yellow"
          ></div>
          SHOP DEAL
        </li>
      </ul>
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDragged: (id) => dispatch(setDragged(id)),
  };
};

export default connect(null, mapDispatchToProps)(Draggable);
