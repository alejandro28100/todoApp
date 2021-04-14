import React from 'react'
import Todo from './Todo'

function TodoList({todoList,handleToggle,handleDelete}) {
    return (
        <ul className="todo-list">
            {
                todoList.map((todo, index) =>
                    <Todo key={index} text={todo.text} done={todo.done} handleToggle={handleToggle} todoindex={index} handleDelete={handleDelete} />)
            }
        </ul>
    )

}

export default TodoList
