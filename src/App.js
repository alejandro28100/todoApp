// import logo from './logo.svg';
import { useState } from "react";
import Header from "./components/Header";
import Form from './components/Form';
import './App.css';
import TodoList from "./components/TodoList";


const TODOS = [
  { text: "Hacer ejercicio", done: false, id: 1 },
  { text: "Pasear a dubis", done: false, id: 2 },
  { text: "Leer el prework de BEDU :P", done: false, id: 3 },
  { text: "Escuchar un podcast", done: false, id: 4 }
];


function App() {
  const [todos, setTodos] = useState(TODOS);

  function handleAdd(todo) {
    return setTodos([...todos, todo]);
  }

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
    handleAdd,
    handleToggle,
    handleDelete
  }

  return (
    <div className="App">

      <Header />
      <Form todos={todos} handler={handler} />
      <TodoList todos={todos} handler={handler} />
    </div>
  );
}

export default App;
