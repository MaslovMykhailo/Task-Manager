import React from 'react';
import { connect } from 'react-redux';

import { createTaskColumn, editTaskColumn, removeTaskColumn, closePopupWindow } from '../../../actions';
import DialogWindow from '../../../components/app/common/dialogWindow/DialogWindow';

const PopupColumnWindow = props => {
  if (props.config) {
    const { config, editColumnHandler, createColumnHandler, removeColumnHandler, closeHandler } = props;
    return (
      <DialogWindow config={config}
                    editColumnHandler={editColumnHandler}
                    createColumnHandler={createColumnHandler}
                    removeColumnHandler={removeColumnHandler}
                    closeHandler={closeHandler}
      />
    )
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  const { id, type } = state.currentProject.present.popupWindow;

  switch (type) {
    case 'edit-column': {
      const { name, color } = state.currentProject.present.columns.find(col => col.id === id);
      return {
        config: {
          windowTitle: 'Edit column menu',
          fields: [
            {
              name: 'Column title',
              withValidation: true,
              value: name,
              serializeTo: 'name'
            }
          ],
          saveButton: {
            text: 'edit',
            handler: 'editColumnHandler'
          },
          additionButton: {
            text: 'delete',
            handler: 'removeColumnHandler',
            data: id
          },
          colors: {
            title: 'Column color',
            checkedColor: color,
            serializeTo: 'color'
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
    case 'create-column': {
      return {
        config: {
          windowTitle: 'Create column menu',
          fields: [
            {
              name: 'Column title',
              withValidation: true,
              value: '',
              serializeTo: 'name'
            }
          ],
          saveButton: {
            text: 'create',
            handler: 'createColumnHandler'
          },
          colors: {
            title: 'Column color',
            checkedColor: 'teal',
            serializeTo: 'color'
          }
        }
      }
    }
    default:
      return {
        config: null
      };
  }
};

const mapDispatchToProps = dispatch => ({
  editColumnHandler: columnConfig => dispatch(editTaskColumn(columnConfig)),
  createColumnHandler: columnConfig => dispatch(createTaskColumn(columnConfig)),
  removeColumnHandler: id => dispatch(removeTaskColumn(id)),
  closeHandler: () => dispatch(closePopupWindow())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupColumnWindow);