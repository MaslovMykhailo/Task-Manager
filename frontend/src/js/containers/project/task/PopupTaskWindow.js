import React, { Component } from 'react';
import { connect } from 'react-redux';

import DialogWindow from "../../../components/app/common/dialogWindow/DialogWindow";
import {closePopupWindow, createTask, editTask} from "../../../actions";
import Textarea from "../../../components/app/common/dialogWindow/Textarea";
import validate from "../../../functions/validate";
import Links from "../../../components/app/common/dialogWindow/Links";
import ChipList from "../../../components/app/common/dialogWindow/ChipList";
import PositionField from "../../../components/app/common/dialogWindow/PositionField";


class PopupTaskWindow extends Component {
  constructor(props) {
    super(props);

    const { config, description, links, checkedColumnIndex, columns, currentPosition } = props;

    if (config) {
      this.state = {
        taskDescription: description || '',
        links: links || [],
        newLinkName: '',
        newLinkSrc: '',
        checkedColumnIndex,
        position: currentPosition || columns[checkedColumnIndex].tasksCount + 1,
      };
    }

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.saveLinkHandler = this.saveLinkHandler.bind(this);
    this.deleteLinkHandler = this.deleteLinkHandler.bind(this);
    this.changeColumnHandler = this.changeColumnHandler.bind(this);
    this.incPosition = this.incPosition.bind(this);
    this.decPosition = this.decPosition.bind(this);
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

  changeColumnHandler(i) {
    return () => {
      this.setState((state, props) => ({
        checkedColumnIndex: i,
        position: props.columns[i].tasksCount + 1
      }));
    }
  }

  incPosition() {
    this.setState(state => ({
      position: state.position + 1
    }));
  }

  decPosition() {
    this.setState(state => ({
      position: state.position - 1
    }));
  }

  render() {
    const { config } = this.props;

    if (config) {
      const {
        createTask, editTask, closeHandler, columns,
        checkedColumnIndex: oldColumnIndex,
        currentPosition: oldPosition
      } = this.props;

      const {
        changeInputHandler,
        saveLinkHandler, deleteLinkHandler,
        changeColumnHandler,
        incPosition, decPosition
      } = this;
      const { taskDescription, links, newLinkName, newLinkSrc, checkedColumnIndex, position } = this.state;

      const createTaskHandler = (taskConfig) => {
        closeHandler();
        createTask({ ...taskConfig,
          description: taskDescription,
          links, position,
          columnId: columns[checkedColumnIndex].columnId
        });
      };

      const editTaskHandler = (taskConfig) => {
        closeHandler();
        editTask({
          oldColumnId: columns[oldColumnIndex].columnId,
          newColumnId: columns[checkedColumnIndex].columnId,
          ...taskConfig,
          description: taskDescription, links,
          newPosition: position, oldPosition
        })
      };

      return (
        <DialogWindow config={config}
                      closeHandler={closeHandler}
                      createTaskHandler={createTaskHandler}
                      editTaskHandler={editTaskHandler}
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
          <ChipList title={'Column'}
                    itemList={columns}
                    checkedItemIndex={checkedColumnIndex}
                    onClickHandler={changeColumnHandler}
          />
          <PositionField currentValue={position}
                         minValue={1} maxValue={columns[checkedColumnIndex].tasksCount+1}
                         incValue={incPosition}
                         decValue={decPosition}
                         title={'Position'}
                         changeValueHandler={(e) => { e.stopPropagation() }}
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
  const columns = state.currentProject.present.columns.map(col => ({
    columnId: col.id,
    color: col.color,
    tasksCount: col.tasks.length,
    value: col.name
  }));

  const checkedColumnIndex = columns.findIndex(col => col.columnId === id);

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
          }
        },
        columns,
        checkedColumnIndex: checkedColumnIndex
      }
    }
    case 'show-task': {
      const currentPosition = state.currentProject.present.popupWindow.data;
      const currentTask = state.currentProject.present.columns[checkedColumnIndex].tasks[currentPosition];

      return {
        config: {
          windowTitle: 'Show task menu',
          fields: [
            {
              name: 'Task short name',
              withValidation: true,
              value: currentTask.shortName,
              serializeTo: 'shortName'
            }
          ],
          saveButton: {
            text: 'save edits',
            handler: 'editTaskHandler'
          },
          otherData: [
            {
              value: currentTask.id,
              serializeTo: 'id'
            }
          ]
        },
        columns,
        checkedColumnIndex: checkedColumnIndex,
        description: currentTask.description,
        links: currentTask.links,
        currentPosition
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
  editTask: (taskConfig) => dispatch(editTask(taskConfig)),
  closeHandler: () => dispatch(closePopupWindow())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupTaskWindow);