import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName,userName,verified,text,image,avatar}) {
    return (
        <div className="post">
            <div className="post--avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post--body">
                <div className="post--header">
                    <div className="post--headerText">
                        <h3>
                            {displayName}
                            <span className="post--headerSpecial">
                            {verified && <VerifiedIcon className="post--badge" />}
                            {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post--headerDesc">
                        <p>{text}</p>
                    </div>
                </div>
                {image && <img src={image} alt="GIF" />}
                <div className="post--footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
