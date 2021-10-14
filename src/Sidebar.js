import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
        <div className="sidebar">

            {/* Twitter Icon */}
            <TwitterIcon className= "sidebar--twitterIcon" />

            <SidebarOption active text = "Home" Icon = {HomeIcon}/>        
            <SidebarOption text = "Explore" Icon = {SearchIcon}/>        
            <SidebarOption text = "Notifications" Icon = {NotificationsIcon}/>        
            <SidebarOption text = "Messages" Icon = {EmailIcon}/>        
            <SidebarOption text = "Bookmarks" Icon = {BookmarkIcon}/>        
            <SidebarOption text = "Lists" Icon = {ListAltIcon}/>        
            <SidebarOption text = "Profile" Icon = {PersonIcon}/>        
            <SidebarOption text = "More" Icon = {MoreHorizIcon}/>
              
            <Button variant="outlined" className="sidebar--tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
