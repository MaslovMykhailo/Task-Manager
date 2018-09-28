import { connect } from 'react-redux';

import { createProjectCard, editProjectCard, closePopupWindow } from '../../../actions/index';
import DialogProjectWindow from '../../../components/app/home/cards/DialogProjectWindow';


const mapStateToProps = state => {
  const type = state.cards.popupWindow.type;
  
  if (type === 'edit') {
    const id = state.cards.popupWindow.id;
    const { name, description, cardColor } = state.cards.list.find(card => card.id === id);
    
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