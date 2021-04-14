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
      todoList: []
    }
  }
  componentDidMount() {
    this.setState({
      todoList: [{ text: "Hacer ejercicio", done: false },
      { text: "Pasear a dubis", done: false },
      { text: "Leer el prework de BEDU :P", done: false },
      { text: "Escuchar un podcast", done: false }]
    });
  }

  handleToggle = (e, n) => {
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
  handleDelete = (e, n) => {
    this.setState(state => {
      const list = this.state.todoList.filter((elem, index) => n !== index)
      return {
        ...state,
        todoList: list
      }
    })
  }
  handleAdd = (e, newTodo) => {
    const found = this.state.todoList.find(element => element.text === newTodo.text);
    if (!found) {
      this.setState(state => {
        if (!found) {
          return {
            ...state,
            todoList: [...state.todoList, newTodo]
          }
        }
        return state;
      });
      
    }
    else {
      return true;
    }

  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Form handleAdd={this.handleAdd} />
        <TodoList todoList={this.state.todoList} handleToggle={this.handleToggle} handleDelete={this.handleDelete} />
      </div>
    );
  }

}

export default App;
