import React, { Component } from 'react';

class AddTodo extends Component {

  render() {
    return (
      <div>
      <div>
        <form onSubmit={this.handleTask.bind(this)}>
          <input type='text' placeholder='tasks..' ref='inputTodo' />
          <button>Add Todo</button>
        </form>
      </div>
    </div>
    );
  }

  handleTask(event){
    event.preventDefault();
    if (!this.refs.inputTodo.value.trim()) {
          return
      }
    this.props.addTodo(this.refs.inputTodo.value);
    this.refs.inputTodo.value = ''
  }

}


export default AddTodo;
