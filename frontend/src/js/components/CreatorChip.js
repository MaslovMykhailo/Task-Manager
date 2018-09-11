import React from 'react';

import gitIcon from '../../img/git.svg';
import '../../css/creator-chip.css';
import '../../css/main-content.css';


const CreatorChip = () => (
  <div className={'bottom-small-wrapper creator'}>
    <a href={'https://github.com/maslovmichail20/Task-Manager'}>
            <span className="mdl-chip mdl-chip--contact">
              <span className="mdl-chip__contact mdl-color--red mdl-color-text--white">
                <img src={gitIcon} className={'git-icon'}/>
              </span>
              <span className="mdl-chip__text">Source code</span>
            </span>
    </a>
  </div>
);

export default CreatorChip;