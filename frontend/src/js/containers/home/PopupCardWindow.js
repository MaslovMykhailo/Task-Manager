import React from 'react';
import { connect } from 'react-redux';

import { createProjectCard, editProjectCard, closePopupWindow } from '../../actions';
import DialogWindow from '../../components/app/common/dialogWindow/DialogWindow';


const PopupCardWindow = ({ config, createProject, editProject, closeHandler }) => {
  if (config) {
    return <DialogWindow config={config}
                         createProject={createProject}
                         editProject={editProject}
                         closeHandler={closeHandler}
    />
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const { type, id } =  state.cards.present.popupWindow;
  switch (type) {
    case 'edit': {
      const {name, description, cardColor} = state.cards.present.list.find(card => card.id === id);
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
    }
    case 'create': {
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
    default:
      return { config: null }
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

export default connect(mapStateToProps, mapDispatchToProps)(PopupCardWindow);