// import logo from './logo.svg';
import Header from "./components/Header";
import Form from './components/Form';
import './App.css';
import TodoList from "./components/TodoList";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{ text: "Hacer ejercicio", done: false },
      { text: "Pasear a dubis", done: false },
      { text: "Leer el prework de BEDU :P", done: false },
      { text: "Escuchar un podcast", done: false }]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, n) {
    this.setState(state => {
      const list = this.state.todoList.map((elem, index) => {
        if (index === n) {
          return {
            ...elem,
            done: !elem.done
          }
        }
        return elem;
      })
      return {
        ...state,
        todoList: list
      }
    })
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Form />
        <TodoList todoList={this.state.todoList} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default App;
