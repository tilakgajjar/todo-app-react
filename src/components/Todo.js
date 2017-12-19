import React from 'react'

class Todo extends React.Component {

render(){

    return(
      <div>
          <button onClick={this.props.onClick} style={{color: this.props.completed ? 'green' : 'blue'}}>
            {this.props.text}
          </button>
          <button onClick={this.props.onClickDelete}>
            X
          </button>
      </div>
    )
  }
}

export default Todo
