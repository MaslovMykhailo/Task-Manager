import React from 'react';
import { connect } from 'react-redux';

import ProjectContent from '../../components/app/project/ProjectContent';


const mapStateToProps = (state, ownProps) => {
  const cardByProject = state.cards.present.list
    .find(card => card.id === ownProps.match.params.id);

  if (!cardByProject) {
    ownProps.history.push('/login');
    return {
      name: 'Project not found',
      id: undefined
    };
  }

  const { name, id } = cardByProject;
  return { name, id };
};

export default connect(mapStateToProps)(ProjectContent);