import React from 'react'


class Todo extends React.Component {
    
    handleClick = () => {
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <span onClick={this.handleClick} className={this.props.completed ? "item completed" : "item incomplete"} >{this.props.name} </span>
        )
    }
}

export default Todo