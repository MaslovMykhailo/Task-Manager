import React from 'react';

import CloseProjectButton from '../../../containers/project/CloseProjectButton';
import UndoRedoProject from '../../../containers/project/UndoRedoProject';


const ProjectActionBar = () => {
  return (
    <div className={'project-content__action-bar action-bar'}>
      <CloseProjectButton />
      <UndoRedoProject/>
    </div>
  )
};

export default ProjectActionBar;