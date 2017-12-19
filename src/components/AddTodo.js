import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Input } from 'semantic-ui-react'

class AddTodo extends Component {

  render() {
    return (
        <Form size='large' onSubmit={e => {
                e.preventDefault()
                const input = document.querySelector('input[name=todo]')
                if (!input.value.trim()) {
                  return
                }
                this.props.addTodo(input.value);
                input.value = ''
              }}>
          <Input type='text' fluid align="center"  placeholder='Tasks...' style={{ marginBottom: '1em' }}  action={{ color: 'black', content: 'Add Todo' }} ref='inputTodo' name='todo' />
        </Form>
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
