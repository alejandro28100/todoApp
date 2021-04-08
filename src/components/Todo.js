//Todo.js
import React from 'react'
import Checkmark from "./Checkmark";


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false
        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState({ done: !this.state.done });
    }

    render() {

        const todo = {
            text: this.props.text,
            done: this.state.done,
            handleClick: this.handleClick
        }

        return (
            <Checkmark {...todo} />
        )
    }
}

export default Todo
