import React from 'react'
import Todo from './Todo'

function TodoList({todoList,handleClick}) {
    return (
        <ul className="todo-list">
            {
                todoList.map((todo, index) =>
                    <Todo key={index} text={todo.text} done={todo.done} handleClick={handleClick} todoindex={index} />)
            }
        </ul>
    )

}

export default TodoList
