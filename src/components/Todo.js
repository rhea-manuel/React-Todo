import React from 'react'
import './Todo.css'

class Todo extends React.Component {

    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }

    complete = (event) => {
        console.log("click")
        this.setState(
            {
                isClicked:true
            }
        )
        this.props.element.completed=true
    }

    render(){
        return(
            
            <div onClick={this.complete} className = {this.state.isClicked===true ? "completed" : "incomplete"}>
                {this.props.element.task}
            </div>
        )
    }

}

export default Todo