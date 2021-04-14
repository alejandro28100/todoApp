//Todo.js
import React from 'react'
import Checkmark from "./Checkmark";
import PropTypes from "prop-types";


const Todo = (props) => <Checkmark {...props} />

Todo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Todo;
