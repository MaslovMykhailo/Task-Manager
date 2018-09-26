import React from 'react';
import { connect } from 'react-redux';

import Colors from '../../../../constants/Colors';
import { openPopupWindow } from '../../../../actions/index';
import '../../../../../css/project-card.css'


const ProjectCard = ({ config, editCard }) => {
  const { name, description, cardColor } = config;
  
  return (
    <div className="custom-card mdl-card mdl-shadow--4dp">
      <div className="mdl-card__title mdl-card--expand"
           style={{ backgroundColor: Colors[cardColor].RGB }}
      >
        <h2 className="mdl-card__title-text">{ name }</h2>
      </div>
      <div className="mdl-card__supporting-text">{ description }</div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-js-button mdl-js-ripple-effect"
           style={{ color: Colors[cardColor].darkRGB }}
        >
          OPEN
        </a>
      </div>
      <button className="close mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i className="material-icons">close</i>
      </button>
      <button className="edit mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
              style={{ color: Colors[cardColor].darkRGB }}
              onClick={ editCard(config.id) }
      >
        <i className="material-icons">edit</i>
      </button>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
  config: ownProps.config
});

const mapDispatchToProps = dispatch => ({
  editCard: id => () => {
    dispatch(openPopupWindow('edit', id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);