import { connect } from 'react-redux';
import { redoCards, undoCards } from '../../actions';


import UndoRedoButtons from '../../components/app/home/actionBar/UndoRedoButtons';


const mapStateToProps = ({ cards }) => ({
  canUndo: cards.past.length > 0,
  canRedo: cards.future.length > 0
});


const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(undoCards()),
  onRedo: () => dispatch(redoCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoButtons)

