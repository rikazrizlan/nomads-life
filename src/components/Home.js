import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {Button, makeStyles, Modal} from '@material-ui/core';
import Logo from '../images/logo.png';
import Post from './Post';
import {Avatar} from '@material-ui/core';
import '../App.css';
import AddPost from './AddPost';

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
  

function Home() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const [openNav, setOpenNav] = useState(false);
    const history = useHistory();

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);

    async function handleLogout() {
        setError("");

        try{
            await logout();
            history.push("/app");
        } catch {
            setError("Logout failed")
        }
    }

    return (
        <div className="home">
            <div className="home-header">
                <img className="logo" src={Logo} alt="Nomads" />
                <div className="home-header-left">
                    <Button onClick={() => setOpen(true)} variant="outlined">New Post</Button>
                    <Avatar onClick={() => setOpenNav(!openNav)} />
                    {
                        openNav && (
                            <ul className="home-navigation">
                                <h6>{currentUser.displayName}</h6>
                                <Link style={{textDecoration:"none"}} to="/profile"><Button className="navBtn" color="secondary">Profile</Button> </Link> 
                                <Button className="navBtn" color="secondary"  onClick={handleLogout}>Log Out</Button>  
                            </ul>
                        )
                    }
                </div>   
            </div>
            <div className="home-posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

    {/* Add Post Modal*/} 
      <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <AddPost setOpen={setOpen} />
          </div>
      </Modal>
      {/*Add Post Modal */}

        </div>
    )
}

export default Home
