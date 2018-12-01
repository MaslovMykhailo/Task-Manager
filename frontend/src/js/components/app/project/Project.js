import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { openProject } from '../../../actions';


class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadProjectData, id } = this.props;
    loadProjectData(id);
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <button onClick={() => this.props.history.push('/home')}>back</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const cardByProject = state.cards.present.list
    .find(card => card.id === ownProps.match.params.id);

  if (!cardByProject) {
    ownProps.history.push('/home');
  }

  return {
    name: cardByProject.name,
    id: cardByProject.id,
    projectData: state.currentProject.present
  };
};

const mapDispatchToProps = dispatch => ({
  loadProjectData: projectId => dispatch(openProject(projectId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));