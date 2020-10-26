import React from 'react'

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

        this.setState({
            input: ''
        })
    }

    render() {

        return (
            <form onSubmit={this.submit}>
                <div>
                    <input name="task" aria-label="Task name" value={this.state.input} onChange={this.updateState}></input>
                    <button className="button">Add</button>
                </div>
            </form>
        )
    }
}

export default TodoForm