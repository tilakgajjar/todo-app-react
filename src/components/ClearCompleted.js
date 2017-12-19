import React from 'react'
import { Button } from 'semantic-ui-react'

class ClearCompleted extends React.Component{

  render(){

      return(
        <div>
            <Button style={{ marginTop: '2em', marginBottom: '1em' }} fluid color="youtube" size="large" onClick={this.props.clearCompleted}>
              Clear Completed Tasks
            </Button>
        </div>
      )

    }

  }

export default ClearCompleted;
