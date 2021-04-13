//Todo.js
import React from 'react'
import Checkmark from "./Checkmark";
import PropTypes from "prop-types";

const Todo = ({ handler, id, text, done }) => {
    return (
        <div className="todo-item">
            <span onClick={() => handler.handleToggle(id)} className={`${done ? "done" : ""}`}>
                {text}
            </span>
            <Checkmark done={done} />
            <button className="delete-btn" onClick={() => handler.handleDelete(id)}> &#10006; </button>
        </div>
    )
};


Todo.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
}

export default Todo
