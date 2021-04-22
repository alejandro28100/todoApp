import React, { Fragment, useState, useEffect } from 'react'

import Header from "../components/Header";
import Form from '../components/Form';
import TodoList from "../components/TodoList";

const Home = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("http://localhost:3000/todos");
                const data = await response.json();

                setTodoList(data);
            } catch (err) {
                console.log(err);
            }
        }

        getData()

    }, [])

    const changeProperty = ({ url, method, body }) => {
        return fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    };


    const handleToggle = async (id) => {

        const { done } = todoList.find(todo => todo.id === id);

        try {
            const response = await changeProperty({
                url: `http://localhost:3000/todos/${id}`,
                method: "PATCH",
                body: { done: !done }
            });
            console.log(response);
            if (!response.ok) throw Error("Algo salió mal");
            const data = await response.json();

            setTodoList(state => {
                return state.map(todo => {
                    if (todo.id === id) {
                        return data;
                    }
                    return todo;
                })
            })

        } catch (error) {
            console.log(error)
        }

    }
    const handleDelete = async (id) => {

        try {
            const response = await changeProperty({
                url: `http://localhost:3000/todos/${id}`,
                method: "DELETE"
            });
            console.log(response);
            if (!response.ok) throw Error("Algo salió mal");

            setTodoList(todoList.filter((todo) => todo.id !== id))

        } catch (error) {
            console.log(error)
        }

    }

    const handleAdd = async (newTodo) => {

        try {
            const response = await changeProperty({
                url: `http://localhost:3000/todos`,
                method: "POST",
                body: newTodo
            });
            console.log(response);
            if (!response.ok) throw Error("Algo salió mal");
            const data = await response.json();
            setTodoList(state => ([...state, data]));

        } catch (error) {
            console.log(error)
        }

    }

    const handler = {
        handleAdd,
        handleDelete,
        handleToggle
    }

    return (
        <Fragment>
            <Header />
            <Form todoList={todoList} handler={handler} />
            <TodoList todoList={todoList} handler={handler} />
        </Fragment>
    )
}

export default Home
