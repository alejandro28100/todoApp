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
  console.log(todos);
  return (
    <div className="App">

      <Header />
      <Form />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
