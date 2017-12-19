import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

class Todo extends React.Component {

render(){
    const isCompleted = this.props.completed
      let icon = <Icon basic="true" color='white' />;
      if (isCompleted) {
          icon = <Icon color='black' name='checkmark' />;
        }
    return(
      <Grid style={{ marginBottom: '1em', margin: '0.5em', height: 50  }}>
         <Grid.Column width={13}>
             <Button attached='right' fluid color={this.props.completed ? 'default' : 'basic'}  onClick={this.props.onClick} checked={this.props.completed}>
                    {icon} {this.props.text}
             </Button>
         </Grid.Column>
         <Grid.Column width={3}>
           <Button basic color='red' onClick={this.props.onClickDelete}>
             X
          </Button>
         </Grid.Column>
       </Grid>
    )
  }
}

export default Todo
