import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class TodoObj {
  constructor(name, id, completed) {
    this.name = name
    this.id = id
    this.completed = completed
  }
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      allTodos: [new TodoObj('name', 5, false)]
    }
  }

  onClick = (id) => {
    const curList = this.state.allTodos.map((item) => {

      if (item.id === id) {
        return new TodoObj(item.name, item.id, !item.completed)
      }

      else {
        return item
      }
    })

    this.setState({
      allTodos: curList
    })
  }


  addItem = (itemName) => {
    let curList = [...this.state.allTodos]
    const item = new TodoObj(itemName, curList.length, false)
    curList.push(item)
    this.setState({
      allTodos: curList
    })
  }

  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem}></TodoForm>
        <h2>Welcome to your Todo App!</h2>
        <TodoList onClick={this.onClick} allTodos={this.state.allTodos}></TodoList>
      </div>
    );
  }
}

export default App;
