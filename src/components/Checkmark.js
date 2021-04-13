import React from "react";
import PropTypes from "prop-types";

function Checkmark({ done, text, handleClick, todoindex }) {
    return (
        <>
            <div className="todo-item">
                <span onClick={(e) => handleClick(e, todoindex)} className={`${done ? "done" : ""}`}>
                    {text}
                </span>
                {done && <span>	&#10004;</span>}
                <button className="delete-btn"> &#10006; </button>
            </div>
        </>
    )
}
Checkmark.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Checkmark;