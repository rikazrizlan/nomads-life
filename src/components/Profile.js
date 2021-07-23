import React from 'react';
import PostsGrid from './ProfileComponents/PostsGrid';
import '../App.css';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import Navbar from './Navbar';

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-section">
        <ProfileHeader />
        <hr></hr>
        <PostsGrid />
      </div>
    </>
  )
}

export default Profile
