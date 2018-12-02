import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { openProject } from '../../actions';
import Preloader from "../../components/app/Preloader";


class CurrentProject extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadProjectData, id } = this.props;
    if (id) loadProjectData(id);
  }

  render() {
    const { isSignedIn, dataIsLoading } = this.props;

    return (
      !isSignedIn || dataIsLoading ?
        <Preloader wrapperClass={'current-project-content'} /> :
        <div className={'current-project-content'}>
          <button onClick={() => this.props.history.push('/home')}>back</button>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const { isSignedIn, dataIsLoading } = state.status;

  return {
    id, isSignedIn, dataIsLoading,
    projectData: state.currentProject.present
  };
};

const mapDispatchToProps = dispatch => ({
  loadProjectData: projectId => dispatch(openProject(projectId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentProject));