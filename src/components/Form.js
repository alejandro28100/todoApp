import React, { useRef, useState } from 'react'

const Form = ({ todoList, handler }) => {
    // const [textValue, setTextValue] = useState("");
    const input = useRef();
    // console.log(input.current);
    function handleSubmit(e) {
        e.preventDefault();
        const inputValue = input.current.value;
        const isDuplicate = todoList.some(todo => todo.text === inputValue.trim());

        if (isDuplicate) {
            return alert("Tarea duplicada 🤔")
        }

        handler.handleAdd({ text: input.current.value, done: false, id: Math.floor(Math.random() * 1000) })
        // inputValue = "";
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input ref={input} type="text" placeholder="Escribe aquí" />
            <button type="submit">Crear</button>
        </form>
    )
}

export default Form
