import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets--input">
                <SearchIcon className ="widgets--searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets--widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1445708427951415301"} />
                <TwitterTimelineEmbed 
                sourceType = "profile"
                screenName = "google"
                options = {{height: 400}}
                />
                <TwitterShareButton 
                url ={"https://facebook.com/cleverprogrammer"}
                options ={{text :"#reactjs is awesome",via: "cleverqazi" }} />
            </div>
        </div>
    )
}

export default Widgets
