import React from "react";
import PropTypes from "prop-types";

function Checkmark({ done, text, handleToggle, todoindex,handleDelete }) {
    return (
        <>
            <div className="todo-item">
                <span onClick={(e) => handleToggle(e, todoindex)} className={`${done ? "done" : ""}`}>
                    {text}
                </span>
                {done && <span>	&#10004;</span>}
                <button className="delete-btn"  onClick={(e) => handleDelete(e, todoindex)}> &#10006; </button>
            </div>
        </>
    )
}
Checkmark.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default Checkmark;