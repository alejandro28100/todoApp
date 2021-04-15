import React, { useRef } from 'react'

const Form = ({ todos, handler }) => {

    const input = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const inputValue = input.current.value;
        const isDuplicate = todos.some(todo => todo.text === inputValue.trim());

        if (isDuplicate) {
            return alert("Tarea duplicada 🤔")
        }

        handler.handleAdd({ text: input.current.value, done: false, id: Math.floor(Math.random() * 1000) })

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input ref={input} type="text" placeholder="Escribe aquí" />
            <button type="submit">Crear</button>
        </form>
    )
}

export default Form
