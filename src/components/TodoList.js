import React from 'react'
import Todo from './Todo'
import PropTypes from "prop-types";

const TodoList = ({ todos, setTodos }) => {

    function handleToggle(id) {
        return setTodos([...todos].map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done
            }
            return todo;
        }))
    };

    function handleDelete(id) {
        //Filtra el todo que corresponda con el parámetro id
        //evitando que el array sufra alguna mutación 
        return setTodos([...todos].filter(todo => todo.id !== id));
    }

    const handler = {
        handleToggle,
        handleDelete
    }

    return (
        <ul className="todo-list">
            {
                todos.map(({ text, done, id }) => {
                    const todo = {
                        id,
                        text,
                        done,
                        handler
                    }
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
    setTodos: PropTypes.func.isRequired,
}

export default TodoList
