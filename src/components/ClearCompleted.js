import React from 'react'

class ClearCompleted extends React.Component{

  render(){
    return(
      <div>
        <button onClick={this.props.clearCompleted} style={{color:'red'}}>
          Clear completed
        </button>
        <div>

        </div>
      </div>
    )
  }
}

export default ClearCompleted;
