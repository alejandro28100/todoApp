//Todo.js
import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false
        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ done: !this.state.done });
    }

    render() {
        return (
            <div onClick={this.handleClick} className={`todo-item ${this.state.done ? "done" : ""}`}>
                {this.props.text}
                <button className="delete-btn"> &#10006; </button>
            </div>
        )
    }
}

export default Todo
