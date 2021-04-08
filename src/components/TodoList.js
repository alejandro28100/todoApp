import React from 'react'
import Todo from './Todo'

const todos = [
    { text: "Hacer ejercicio" },
    { text: "Pasear a dubis" },
    { text: "Leer el prework de BEDU :P" },
    { text: "Escuchar un podcast" }
];


const TodoList = (props) => {
    return (
        <ul className="todo-list">
            {
                todos.map((todo) => {
                    return <Todo text={todo.text} />
                })
            }
        </ul>
    )
}

export default TodoList
