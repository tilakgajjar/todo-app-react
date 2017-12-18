import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import ClearCompleted from './components/ClearCompleted'

let counter = 0
const todos = [];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

render() {
    return (
      <div>
        <div className="App">
            <h1 className="App-title">Todo App React</h1>
            <AddTodo addTodo={this.addTodo.bind(this)} />
            <TodoList
              todos={this.state.todos}
              toggleTodo={this.toggleTodo.bind(this)}
              deleteTodo={this.deleteTodo.bind(this)}
            />
            <ClearCompleted todos={this.state.todos} clearCompleted={this.clearCompleted.bind(this)} />

        </div>
      </div>
    );
  }

  clearCompleted(){
    todos.map(todo => {if(todo.completed === true){todo.show = false}});
    this.setState({ todos: this.state.todos });
    console.log(todos);
  }

  deleteTodo(id){
    let index = todos.indexOf(id);
    todos.splice(index, 1)
    this.setState({ todos: this.state.todos });
    console.log(todos, 'del');
  }

  toggleTodo(id){
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos: this.state.todos });
    console.log(todos, 'togg');
  }

  addTodo(text){
    this.state.todos.push({
      id: counter++,
      text: text,
      completed: false,
      show: true
    });
    this.setState({todos: this.state.todos})
  }

}


export default App;
