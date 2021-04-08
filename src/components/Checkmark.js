import React from "react";

function Checkmark({ done, text, handleClick }) {
    return (
        <>

            <div className="todo-item" onClick={handleClick} >
                <span className={`${done ? "done" : ""}`}>
                    {text}
                </span>
                {done && <span>	&#10004;</span>}
                <button className="delete-btn"> &#10006; </button>
            </div>
        </>


    )
}

export default Checkmark;