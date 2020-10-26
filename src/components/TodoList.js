// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="list">

                    {
                        this.props.allTodos.map((item) => {
                            return (<Todo onClick={this.props.onClick} completed={item.completed} name={item.name} id={item.id}></Todo>)
                        })
                    }

            </div>
        )
    }
}

export default TodoList
