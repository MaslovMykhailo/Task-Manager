import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openProject } from '../../actions';
import Preloader from '../../components/app/common/Preloader';
import TaskColumn from '../../components/app/project/TaskColumn';
import AddTaskColumn from './column/AddTaskColumn';


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
        <div className={'column-container'}>
          <TaskColumn name={'Need to do'} color={'purple'}/>
          <AddTaskColumn />
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProject);