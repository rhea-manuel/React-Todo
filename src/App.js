import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import "./components/Todo.css"

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
      allTodos: []
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem('data')


    if (todos){
      const todoObj = JSON.parse(todos)
      this.setState ({
        allTodos: todoObj
      })
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


    localStorage.setItem('data', JSON.stringify(curList))
  }

  removeCompleted = () => {
    let curList = this.state.allTodos.filter((item) => {
      return !item.completed
    })

    this.setState({
      allTodos: curList
    })

    localStorage.setItem('data', JSON.stringify(curList))
  }


  addItem = (itemName) => {
    let curList = [...this.state.allTodos]
    const item = new TodoObj(itemName, Date.now(), false)
    curList.push(item)
    this.setState({
      allTodos: curList
    })

    localStorage.setItem('data', JSON.stringify(curList))
  }

  render() {
    return (
      <div className="main">
        <h1>To-Do Basic</h1>
        <TodoForm addItem={this.addItem}></TodoForm> <a className="button" onClick={this.removeCompleted}>Clear Completed</a>
        <TodoList onClick={this.onClick} allTodos={this.state.allTodos}></TodoList>

      </div>
    );
  }
}

export default App;
