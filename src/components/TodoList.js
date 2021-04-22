import React from 'react'
import Todo from './Todo'
import PropTypes from "prop-types";

const TodoList = ({ todoList, handler }) => {

    return (
        <ul className="todo-list">
            {
                todoList.map(({ text, done, id }) => {
                    const todo = { id, text, done, handler }
                    return <Todo key={`${text}-${id}`} {...todo} />
                })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    handler: PropTypes.object,
}

export default TodoList
