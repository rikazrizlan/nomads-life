import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { storage, db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

function BucketList({ setOpen, open }) {
    const [bucketList, setBucketList] = useState("");
    const [listItems, setListItems] = useState({});
    const [progress, setProgress] = useState(0);
    const { currentUser } = useAuth();

    useEffect(() => {
        db.collection('users').doc(currentUser.uid).collection('bucketList').get().then((onSnapshot) => {
            onSnapshot.forEach((doc) => {
                console.log(doc.data());
                setListItems(doc.data())
            });
        })
    }, []);

    const handleUpload = () => {
        console.log("hello world");
        db.collection('users').doc(currentUser?.uid).collection('bucketList').add({
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            listItem: bucketList,
            username: currentUser?.displayName,
        });
        setProgress(0);
        setBucketList("");
    }
    console.log(listItems);


    return (
        <div className={open ? "bucket-list-main" : "bucket-list-hide"}>
            <ArrowBack onClick={() => setOpen(false)} />
            <center>Where to next?</center>
            <form className="post-form">
                <div className="form-group">
                    <input onChange={event => setBucketList(event.target.value)} value={bucketList} />
                </div>
                <div className="btn-container">
                    <Button onClick={() => setOpen(false)} variant="contained" color="primary">Cancel</Button>
                    <Button className="btn-2" variant="contained" color="secondary" onClick={handleUpload}>+</Button>
                </div>
            </form>
            {/* <ul>
                {
                    listItems
                }
            </ul> */}
        </div>
    )
}

export default BucketList