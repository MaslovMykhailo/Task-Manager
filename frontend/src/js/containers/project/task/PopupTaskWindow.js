import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogWindow from "../../../components/app/common/dialogWindow/DialogWindow";
import {closePopupWindow, createTask, editTask} from "../../../actions";
import Textarea from "../../../components/app/common/dialogWindow/Textarea";


class PopupTaskWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskDescription: props.description || '',
    };

    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
  }

  changeDescriptionHandler(event) {
    this.setState({
      taskDescription: event.target.value
    })
  }

  render() {
    const { config, createTask ,closeHandler } = this.props;
    if (config) {
      const { changeDescriptionHandler } = this;
      const { taskDescription } = this.state;

      const createTaskHandler = (taskConfig) => {
        createTask({ ...taskConfig, description: taskDescription });
        closeHandler();
      };

      return (
        <DialogWindow config={config}
                      closeHandler={closeHandler}
                      createTaskHandler={createTaskHandler}
        >
          <Textarea title={'Task description'}
                    value={taskDescription}
                    changeValueHandler={changeDescriptionHandler}/>
        </DialogWindow>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  const { id, type } = state.currentProject.present.popupWindow;

  switch (type) {
    case 'create-task': {
      return {
        config: {
          windowTitle: 'Create task menu',
          fields: [
            {
              name: 'Task short name',
              withValidation: true,
              value: '',
              serializeTo: 'shortName'
            }
          ],
          saveButton: {
            text: 'create',
            handler: 'createTaskHandler'
          },
          otherData: [
            {
              value: id,
              serializeTo: 'columnId'
            }
          ]
        }
      }
    }
    case 'show-task': {
      return {

      }
    }
    default: {
      return {
        config: null
      };
    }
  }
};

const mapDispatchToProps = dispatch => ({
  createTask: taskConfig => dispatch(createTask(taskConfig)),
  editTask: taskConfig => dispatch(editTask(taskConfig)),
  closeHandler: () => dispatch(closePopupWindow())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupTaskWindow);