import React  from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../../App.css';
import { Avatar } from '@material-ui/core';

function ProfileHeader() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="profile-header-section">
        <Avatar />
        <h2>{currentUser?.displayName}</h2>
    </div>
  )
}

export default ProfileHeader