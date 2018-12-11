import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openProject } from '../../actions';
import Preloader from '../../components/app/common/Preloader';
import ColumnsContainer from './column/ColumnsContainer';
import PopupColumnWindow from './column/PopupColumnWindow';
import PopupTaskWindow from './task/PopupTaskWindow';


class CurrentProject extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadProjectData, id, dataIsLoading } = this.props;
    if (id && !dataIsLoading) loadProjectData(id);
  }

  render() {
    const { isSignedIn, dataIsLoading, popupWindowIsOpen } = this.props;

    return (
      !isSignedIn || dataIsLoading ?
        <Preloader wrapperClass={'current-project-content'} /> :
        <div className={'current-project-content'}>
          <ColumnsContainer/>
          { popupWindowIsOpen ? <PopupTaskWindow/> : null }
          { popupWindowIsOpen ? <PopupColumnWindow/> : null }
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const { isSignedIn, dataIsLoading } = state.status;

  return {
    id, isSignedIn, dataIsLoading,
    projectId: state.currentProject.present.id,
    popupWindowIsOpen: state.status.popupWindowIsOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  loadProjectData: projectId => dispatch(openProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProject);