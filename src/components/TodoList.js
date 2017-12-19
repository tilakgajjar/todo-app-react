import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo, deleteTodo}) => {

  const filterTodos = todos.filter(todo => todo.show === true);

    return (
        <div>
          <div>
            {filterTodos.map((todo, id) =>
                (<Todo key={todo.id} id={id} {...todo} onClick={()=>toggleTodo(todo.id)} onClickDelete={()=>deleteTodo(todo.id)}/>)
          )}
          </div>
      </div>
      );
    }

export default TodoList;
