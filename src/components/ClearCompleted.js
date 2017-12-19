import React from 'react'

class ClearCompleted extends React.Component{

  render(){
    
      return(
        <div>
            <button onClick={this.props.clearCompleted} style={{color:'red'}}>
              Clear completed
            </button>
        </div>
      )

    }

  }

export default ClearCompleted;
