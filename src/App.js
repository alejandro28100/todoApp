// import logo from './logo.svg';
import Header from "./components/Header";
import Form from './components/Form';
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">

      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
