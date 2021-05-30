import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {Button} from '@material-ui/core';

function Home() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

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
        <div>
            <h2>Hello World! {currentUser.email}</h2>
            <div>
              <Button variant="contained" onClick={handleLogout}>Log Out</Button>   
            </div>
        </div>
    )
}

export default Home
