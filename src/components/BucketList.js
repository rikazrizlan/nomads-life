import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, { useState, useRef } from 'react';
import firebase from 'firebase/app';
import { storage, db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

function BucketList({ setOpen, open }) {
    const [caption, setCaption] = useState("");
    const bucketRef = useRef();
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const {currentUser} = useAuth();

    const handleUpload = () => {
        console.log("hello world");
    }


    return (
        <div className={open ? "bucket-list-main":"bucket-list-hide"}>
            <ArrowBack onClick={() => setOpen(false)} />
            <center>Where to next?</center>
            <form className="post-form">
                <div className="form-group">
                    <input ref={bucketRef} onChange={event => setCaption(event.target.value)} value={caption} />
                </div>
                <div className="btn-container">
                    <Button onClick={() => setOpen(false)} variant="contained" color="primary">Cancel</Button>
                    <Button className="btn-2" variant="contained" color="secondary" onClick={handleUpload}>+</Button>
                </div>
            </form>
            <ul>

            </ul>
        </div>
    )
}

export default BucketList