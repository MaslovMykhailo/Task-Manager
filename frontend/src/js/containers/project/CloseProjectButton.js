import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { closeProject } from "../../actions";


const CloseProjectButton = ({ projectId, redirectToHome, closeProject }) => {
  const onClick = () => {
    redirectToHome();
    closeProject(projectId);
  };

  return (
    <button className="close-project-button mdl-button mdl-button--fab mdl-button--colored"
            onClick={ onClick }
    >
      <i className="material-icons">home</i>
    </button>
  )
};

const mapStateToProps = (state, ownProps) => ({
  projectId: state.currentProject.present.id,
  redirectToHome: () => {
    ownProps.history.push('/home');
  }
});

const mapDispatchToProps = dispatch => ({
  closeProject: projectId => dispatch(closeProject(projectId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CloseProjectButton))