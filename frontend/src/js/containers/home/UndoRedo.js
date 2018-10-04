import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import UndoRedoButtons from '../../components/app/home/actionBar/UndoRedoButtons';


const mapStateToProps = ({ cards }) => ({
  canUndo: cards.past.length > 0,
  canRedo: cards.future.length > 0
});

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoButtons)

