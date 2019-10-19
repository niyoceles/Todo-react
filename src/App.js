import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  state = {
    todos:
      [
        {
          id: 1,
          title: 'Good morning to my people',
          completed: false
        },
        {
          id: 2,
          title: 'Meeting with my people',
          completed: false
        },
        {
          id: 3,
          title: 'Meeting with my family',
          completed: false
        }
      ]
  }

  // Toggle completed 
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  //Delete todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // add todo
  addTodo = (title) =>{
    const newTodo ={
      id: 4,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
