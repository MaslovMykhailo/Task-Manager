import React from 'react';

import CloseProjectButton from '../../../containers/project/CloseProjectButton';


const ProjectActionBar = () => {
  return (
    <div className={'project-content__action-bar action-bar'}>
      <CloseProjectButton />
    </div>
  )
};

export default ProjectActionBar;