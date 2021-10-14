import React, {useState,useEffect} from 'react'
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './Fire';
import { collection,getDocs, orderBy, query } from '@firebase/firestore';


function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const postCollection = collection(db,"posts")
        const sortPosts = query(postCollection,orderBy("created","desc"))
        getDocs(sortPosts)
        .then((querySnapshot) =>{
            const newPosts = querySnapshot.docs.map((doc) => ({ ...doc.data()}));
            setPosts(newPosts);
        })
    },[posts])
 //Empty means only runs when the Feed component loads

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed--header">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <Tweetbox />

            {/* Posts */}
            {posts.map((post) => 
                {return <Post displayName ={post.displayName}
                userName ={post.userName} 
                verified = {post.verified}
                text = {post.text}
                image ={post.image} 
                avatar ={post.avatar} 
                />
                })
            }
        </div>
    )
}

export default Feed;
