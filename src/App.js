import React from 'react';
import Form from './components/TodoForm'
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()

    this.state = {
        curItem: '',
        allItems: []
    }
  }

  toChange = (event) => {
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value
      })
  }

  add = (event) => {
    event.preventDefault()

    const copy = [...this.state.allItems]

    copy.push({
      task: this.state.curItem,
      id: Date.now(),
      completed: false
    })

    this.setState({
      curItem: '',
      allItems: copy
    })
  }

  clear = (event) => {
    event.preventDefault()

    const filtered = this.state.allItems.filter((item)=>{
      return item.completed===false
    })

    this.setState(
      {
        ...this.state,
        allItems: filtered
      }
    )
  }

  render() {
    return (
      <div>

      <TodoList allItems={this.state.allItems}></TodoList>
      <Form clear={this.clear} add={this.add} value={this.state.curItem} toChange={this.toChange}></Form>
      
      </div>
    )

  }
}

export default App;
