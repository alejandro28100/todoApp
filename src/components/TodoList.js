import React from 'react'
import Todo from './Todo'
import PropTypes from "prop-types";

const TodoList = ({ todos, handler }) => {

    return (
        <ul className="todo-list">
            {
                todos.map(({ text, done, id }) => {
                    const todo = { id, text, done, handler }
                    return <Todo key={`${text}-${id}`} {...todo} />
                })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    handler: PropTypes.object,
}

export default TodoList
