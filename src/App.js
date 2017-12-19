import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import ClearCompleted from './components/ClearCompleted'
import CompleteList from './components/CompleteList'
import { Segment } from 'semantic-ui-react'

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
      <div className="AppContainer">
        <div>
        <Segment>
            <h1 align='center'>My Todo List </h1>
            <AddTodo addTodo={this.addTodo.bind(this)} />
            <TodoList
              todos={this.state.todos}
              toggleTodo={this.toggleTodo.bind(this)}
              deleteTodo={this.deleteTodo.bind(this)}
            />
            <ClearCompleted todos={this.state.todos} clearCompleted={this.clearCompleted.bind(this)} />
            <CompleteList todos={this.state.todos}
              toggleTodo={this.toggleTodo.bind(this)}
              deleteTodo={this.deleteTodo.bind(this)}
            />
        </Segment>
        </div>
      </div>

    );
  }

  clearCompleted(){
    //const clearTodo = this.state.todos.map(todo => {if(todo.completed === true){ return [...todo, todo.show = false]}});
    this.state.todos.map(todo => {if(todo.completed === true){ todo.show = false }});
    this.setState({ todos: this.state.todos });
    //console.log(clearTodo, 'clear todo');
    //console.log(this.state.todos, 'clear comp');
  }

  deleteTodo(id){
    const filterTodos = this.state.todos.filter(function (todo){
    return (todo.id !== id)});
    //console.log(filterTodos, 'dele filter');
    this.setState({ todos: filterTodos });
    //console.log(this.state.todos, 'deleter');
  }

  toggleTodo(id){
    this.state.todos.map(todo => {if(todo.id === id){todo.completed = !todo.completed}});
    this.setState({ todos: this.state.todos });
    //console.log(this.state.todos);
  }

  addTodo(text){
    this.state.todos.push({
      id: counter++,
      text: text,
      completed: false,
      show: true
    });
    //console.log(this.state.todos, 'add todo');
    this.setState({todos: this.state.todos})
    //console.log(this.state.todos, 'add todo2');
    console.log('adding new');
  }
}


export default App;
