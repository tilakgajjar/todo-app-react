import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo'

const CompleteList = ({todos, toggleTodo, deleteTodo}) => {

    const filterTodos = todos.filter(todo => todo.completed === true);
    console.log(filterTodos);
    return(
      <div>
        <div>
          {filterTodos.map((todo, id) =>
              (<Todo key={todo.id} id={id} {...todo} onClick={()=>toggleTodo(todo.id)} onClickDelete={()=>deleteTodo(todo.id)}/>)
        )}
        </div>
      </div>
    )
  }


export default CompleteList
