import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openPopupWindow, removeProjectCard } from '../../../actions';
import ProjectCard from '../../../components/app/home/cards/ProjectCard';


const mapStateToProps = (state, ownProps) => ({
  config: ownProps.config,
  openProject: () => {
    ownProps.history.push('/project=' + ownProps.config.id);
  }
});

const mapDispatchToProps = dispatch => ({
  editCard: id => () => {
    dispatch(openPopupWindow('edit', id));
  },
  removeCard: id => () => {
    dispatch(removeProjectCard(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCard));