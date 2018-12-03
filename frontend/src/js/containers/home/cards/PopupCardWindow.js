import { connect } from 'react-redux';

import { createProjectCard, editProjectCard, closePopupWindow } from '../../../actions/index';
import DialogWindow from '../../../components/app/common/DialogWindow';


const mapStateToProps = state => {
  if (state.cards.present.popupWindow.type === 'edit') {
    const id = state.cards.present.popupWindow.id;
    const { name, description, cardColor } = state.cards.present.list.find(card => card.id === id);
    return {
      config: {
        windowTitle: 'Edit project card menu',
        fields: [
          {
            name: 'Project name',
            withValidation: true,
            value: name,
            serializeTo: 'name'
          },
          {
            name: 'Project description',
            value: description,
            serializeTo: 'description'
          },
        ],
        saveButton: {
          text: 'edit',
          handler: 'editProject'
        },
        colors: {
          title: 'Card color',
          checkedColor: cardColor,
          serializeTo: 'cardColor'
        },
        otherData: [
          {
            value: id,
            serializeTo: 'id'
          }
        ]
      }
    }
  } else {
    return {
      config: {
        windowTitle: 'Create project card menu',
        fields: [
          {
            name: 'Project name',
            withValidation: true,
            serializeTo: 'name'
          },
          {
            name: 'Project description',
            serializeTo: 'description'
          },
        ],
        saveButton: {
          text: 'create',
          handler: 'createProject'
        },
        colors: {
          title: 'Card color',
          serializeTo: 'cardColor'
        }
      }
    }
  }
};

const mapDispatchToProps = dispatch => ({
  createProject: projectConfig => {
    dispatch(createProjectCard(projectConfig));
  },
  editProject: projectConfig => {
    dispatch(editProjectCard(projectConfig));
  },
  closeHandler: () => dispatch(closePopupWindow())
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogWindow);