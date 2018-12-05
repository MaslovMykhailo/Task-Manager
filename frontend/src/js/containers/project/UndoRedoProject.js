import { connect } from 'react-redux';
import { undoCurrentProject, redoCurrentProject } from '../../actions';


import UndoRedoButtons from '../../components/app/actionBar/UndoRedoButtons';


const mapStateToProps = ({ currentProject }) => ({
  canUndo: currentProject.past.length > 0,
  canRedo: currentProject.future.length > 0,
  vertical: true
});


const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(undoCurrentProject()),
  onRedo: () => dispatch(redoCurrentProject())
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoButtons)