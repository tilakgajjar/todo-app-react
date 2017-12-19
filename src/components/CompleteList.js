import React from 'react'
import Todo from './Todo'
import { Accordion, Icon, Button } from 'semantic-ui-react'

class CompleteList extends React.Component {

state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
      this.setState({ activeIndex: newIndex })
    }

render() {
  const filterTodos = this.props.todos.filter(todo => todo.completed === true);
  //console.log(filterTodos);

  const { activeIndex } = this.state
    return(
      <Accordion fluid>
        <Accordion.Title active={activeIndex === 0} index={0}  onClick={this.handleClick}>
          <Icon name='dropdown' />
            Completed
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Button.Group fluid vertical>
              {filterTodos.map((todo, id) =>
                  (<Todo key={todo.id} id={id} {...todo} onClick={()=>this.props.toggleTodo(todo.id)} onClickDelete={()=>this.props.deleteTodo(todo.id)}/>)
            )}
          </Button.Group>
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default CompleteList
