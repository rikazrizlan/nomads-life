import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

function BucketList() {
    const [listItems, setListItems] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        db.collection('bucketList').orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
            setListItems(snapshot.docs.map(doc => ({
              id: doc?.id,
              listItem: doc?.data()
            })));
          })
    }, []);

    const userBucketList = listItems?.filter((item) => item?.listItem.username === currentUser?.displayName);

    return (
        <div>
            <ul>
                {
                    userBucketList &&
                    userBucketList?.map((item, id) => (
                        <li key={id}>{item?.listItem?.bucketItem}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BucketList