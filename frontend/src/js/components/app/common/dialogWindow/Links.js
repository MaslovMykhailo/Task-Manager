import React from 'react'


const Links = props => {
  const {
    linksList, linkNameValue, linkSrcValue,
    deleteLinkHandler, saveLinkHandler,
    changeLinkNameHandler, changeLinkSrcHandler
  } = props;

  const links = linksList.map((link, i) =>(
    <span className="link mdl-chip mdl-chip--deletable"
       key={i}
    >
      <a className="mdl-chip__text" href={link.src}>{link.name}</a>
      <button type="button"
              className="mdl-chip__action"
              onClick={deleteLinkHandler(i)}
      >
        <i className="material-icons">cancel</i>
      </button>
    </span>
  ));

  return (
    <div className={'links-wrapper'}>
      <div className={'links-container'}>
        <span className={'links-title'}>Links</span>
        <div className={'links'}>
          {links}
        </div>
      </div>
      <div className={'add-link-container'}>
        <span className={'links-title'}>Add link</span>
        <div className={'add-link-wrapper'}>
          <div className="link-name mdl-textfield">
            <input className="mdl-textfield__input"
                   type="text"
                   value={ linkNameValue }
                   onChange={ changeLinkNameHandler }
                   placeholder={'link name...'}
            />
          </div>
          <button className="mdl-button mdl-button--icon"
                  onClick={saveLinkHandler}
                  disabled={!linkNameValue.length || !linkSrcValue.length}
          >
            <i className="material-icons">add_box</i>
          </button>
        </div>
        <div className="link-src mdl-textfield">
          <input className="mdl-textfield__input"
                 type="text"
                 value={ linkSrcValue }
                 onChange={ changeLinkSrcHandler }
                 placeholder={'link source...'}
          />
        </div>
      </div>
    </div>
  )
};

export default Links;