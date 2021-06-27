import React, {useState, useEffect} from 'react';
import {Avatar} from '@material-ui/core';
import {db} from '../firebase';
import PostImg from '../images/homebg.jpg';

function Post() {
    return (
        <div className="post-container">
            <div className="post-header">
                <Avatar className="post-avatar" alt="Avatar" />
                <h3>itsjustrikaz</h3>
            </div>
            <img className="post-img" src={PostImg} alt="Posts" />
            <h4 className="post-text"><strong>itsjustrikaz</strong>Hi Caption here!</h4>
        </div>
    )
}

export default Post
