import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogWindow from "../../../components/app/common/dialogWindow/DialogWindow";
import {closePopupWindow, createTask, editTask} from "../../../actions";
import Textarea from "../../../components/app/common/dialogWindow/Textarea";
import validate from "../../../functions/validate";
import Links from "../../../components/app/common/dialogWindow/Links";


class PopupTaskWindow extends Component {
  constructor(props) {
    super(props);

    const { description, links } = props;

    this.state = {
      taskDescription: description || '',
      links: links || [],
      newLinkName: '',
      newLinkSrc: ''
    };

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.saveLinkHandler = this.saveLinkHandler.bind(this);
    this.deleteLinkHandler = this.deleteLinkHandler.bind(this);
  }

  changeInputHandler(fieldName) {
    return event => {
      const value = event.target.value;
      this.setState(state => ({
        [fieldName]: validate(value) || value.length < 1 ? value : state[fieldName]
      }));
    }
  }

  saveLinkHandler() {
    const { links, newLinkName, newLinkSrc } = this.state;
    const newLinks = links.slice();
    newLinks.push({ name: newLinkName, src: newLinkSrc });

    this.setState({
      links: newLinks,
      newLinkName: '',
      newLinkSrc: ''
    });
  }

  deleteLinkHandler(i) {
    return (event) => {
      event.stopPropagation();
      const {links} = this.state;
      const newLinks = links.slice();
      newLinks.splice(i, 1);

      this.setState({
        links: newLinks
      });
    }
  }

  render() {
    const { config, createTask ,closeHandler } = this.props;
    if (config) {
      const { changeInputHandler, saveLinkHandler, deleteLinkHandler } = this;
      const { taskDescription, links, newLinkName, newLinkSrc } = this.state;

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
                    changeValueHandler={changeInputHandler('taskDescription')}/>
          <Links linksList={links}
                 linkNameValue={newLinkName}
                 linkSrcValue={newLinkSrc}
                 saveLinkHandler={saveLinkHandler}
                 deleteLinkHandler={deleteLinkHandler}
                 changeLinkNameHandler={changeInputHandler('newLinkName')}
                 changeLinkSrcHandler={changeInputHandler('newLinkSrc')}
          />
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