import React from 'react';
import { connect } from 'react-redux';


const UserInfo = ({ user, className, onlyPhoto }) => {
  return (
    <div className={className}>
      {!onlyPhoto ? <span>{user.name}</span> : null}
      <div className={'user-photo'}><img src={user.imageUrl} alt={'user'}/></div>
    </div>
  )
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(UserInfo);