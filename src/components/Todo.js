import React from 'react'
import "./Todo.css"

class Todo extends React.Component {

    constructor(){
        super()

    }
    
    handleClick = () => {
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <li onClick={this.handleClick} className={this.props.completed ? "item completed" : "item incomplete"} >{this.props.name} </li>
        )
    }
}

export default Todo