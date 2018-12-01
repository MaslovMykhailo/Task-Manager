import React from 'react';
import { connect } from 'react-redux';


const UserInfo = ({ user }) => {
  return (
    <div className={'top-small-wrapper'}>
      <span>{user.name}</span>
      <div className={'user-photo'}><img src={user.imageUrl}/></div>
    </div>
  )
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(UserInfo);