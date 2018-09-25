import { connect } from 'react-redux';

import { createProjectCard, editProjectCard, closePopupWindow } from '../actions';
import DialogProjectWindow from '../components/DialogProjectWindow';


const mapStateToProps = state => {
  const type = state.projects.popupWindow.type;
  
  if (type === 'edit') {
    const id = state.projects.popupWindow.id;
    const { name, description, cardColor } = state.projects[id];
    
    return {
      id,
      type,
      name,
      description,
      cardColor
    }
  }
  
  return { type };
};

const mapDispatchToProps = dispatch => ({
  createProject: projectConfig => () => {
    dispatch(createProjectCard(projectConfig));
  },
  editProject: projectConfig => () => {
    dispatch(editProjectCard(projectConfig));
  },
  closeWindow: () => dispatch(closePopupWindow())
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogProjectWindow);