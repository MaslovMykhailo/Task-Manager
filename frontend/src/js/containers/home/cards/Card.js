import { connect } from 'react-redux';

import { openPopupWindow, removeProjectCard } from '../../../actions';
import ProjectCard from '../../../components/app/home/cards/ProjectCard';


const mapStateToProps = (state, ownProps) => ({
  config: ownProps.config
});

const mapDispatchToProps = dispatch => ({
  editCard: id => () => {
    dispatch(openPopupWindow('edit', id));
  },
  removeCard: id => () => {
    dispatch(removeProjectCard(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);