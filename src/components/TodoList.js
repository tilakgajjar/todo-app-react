import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo, deleteTodo}) => {

    return (
        <div>
          <div>
            {todos.map((todo, id) =>
                (<Todo key={todo.id} id={id} {...todo} onClick={()=>toggleTodo(todo.id)} onClickDelete={()=>deleteTodo(todo.id)}/>)
          )}
          </div>
      </div>
      );
    }

export default TodoList;
