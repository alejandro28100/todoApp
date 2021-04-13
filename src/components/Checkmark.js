import React from "react";
import PropTypes from "prop-types";

function Checkmark({ done }) {
    return (
        <span style={{ opacity: done ? 1 : 0.4, margin: "0px 5px" }}>&#10004;</span>
    )
}


Checkmark.propTypes = {
    done: PropTypes.bool.isRequired
}

export default Checkmark;