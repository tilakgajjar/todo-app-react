import React from 'react'
import Todo from './Todo'
import { Button } from 'semantic-ui-react'

const TodoList = ({todos, toggleTodo, deleteTodo}) => {

  const filterTodos = todos.filter(todo => todo.show === true);

    return (
        <Button.Group fluid vertical>
            {filterTodos.map((todo, id) =>
                (<Todo key={todo.id} id={id} {...todo} onClick={()=>toggleTodo(todo.id)} onClickDelete={()=>deleteTodo(todo.id)}/>)
          )}
        </Button.Group>
      );
    }

export default TodoList;
