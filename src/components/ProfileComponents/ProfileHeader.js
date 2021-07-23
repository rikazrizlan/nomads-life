import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import '../../App.css';
import { db } from '../../firebase';
import { Avatar, Button, makeStyles, Modal } from '@material-ui/core';
import UploadProfilePicture from './UploadProfilePicture';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 400,
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4
  },
}));

function ProfileHeader() {
  const { currentUser, logout } = useAuth();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    db.collection('users').doc(currentUser?.uid).onSnapshot((doc) => {
      setProfileImage(doc?.data()?.profileImage);
    })
  }, []);

  return (
    <>
      <div className="profile-header-section">
        <div className="user-details">
          <Avatar src={profileImage ? profileImage : ""} onClick={() => setOpen(true)} style={{ width: 80, height: 80, cursor: "pointer" }} />
          <h2 className="profile-name">@{currentUser?.displayName}</h2>
        </div>
        <div className="profile-btn-container">
          <Button style={{ height: 30, margin: 10 }} variant="outlined">Edit Profile</Button>
          <Button style={{ height: 30 }} variant="outlined">Settings</Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <UploadProfilePicture setOpen={setOpen} />
        </div>
      </Modal>
    </>
  )
}

export default ProfileHeader