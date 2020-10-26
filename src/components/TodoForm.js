import React from 'react'
import Todo from './Todo'

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    updateState = (event) => {

        this.setState({
            input: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()

        if (this.state.input.trim()) {

            this.props.addItem(this.state.input)
        }
    }

    render() {

        return (
            <form onSubmit={this.submit}>
                <div>
                    <input name="task" aria-label="Task name" value={this.state.input} onChange={this.updateState} name="item"></input>
                    <button className="button">Add</button>
                </div>
            </form>
        )
    }
}

export default TodoForm