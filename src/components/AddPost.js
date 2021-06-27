import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {storage, db} from '../firebase';
import {currentUser} from '../contexts/AuthContext';

function AddPost() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        
    }


    return (
        <div className="post-upload">
            <progress value={progress} max="100" />
            <input className="caption-input" type="text" onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button variant="contained" onClick={handleUpload}>Go!</Button>
        </div>
    )
}

export default AddPost
