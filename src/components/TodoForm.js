import React from 'react'
import Todo from './Todo'

class TodoForm extends React.Component {

    constructor(){
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

        this.props.addItem(this.state.input)

    }

    render() {

        return (
            <form onSubmit={this.submit}>
                <label>
                    Item Name
                    <input value={this.state.input} onChange={this.updateState} name="item"></input>
                </label>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm