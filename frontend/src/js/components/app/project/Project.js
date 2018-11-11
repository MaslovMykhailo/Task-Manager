import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Project extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>{this.props.match.params.id}</div>
        <button onClick={() => this.props.history.push('/home')}>back</button>
      </div>
    )
  }
}

export default withRouter(Project);