import React,{useRef} from 'react'
import './Tweetbox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './Fire';
import { doc, addDoc } from "firebase/firestore"; 
import { collection } from '@firebase/firestore';

function Tweetbox() {
    const inputTextRef = useRef();
    const inputImgRef = useRef();

   async  function postTweet(){
        if(inputTextRef.current.value === '') return

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                displayName:"Parth Lad",
                userName:"@ladparth",
                verified:false,
                text:inputTextRef.current.value,
                image:inputImgRef.current.value,
                created: Date.now(),
                avatar:"https://media-exp1.licdn.com/dms/image/C5603AQEcpXCoZ1iyLw/profile-displayphoto-shrink_800_800/0/1574974891282?e=1639612800&v=beta&t=j0Crk4LaDEH7dpR3KqxvPqmNa_gHdREIY7PmAADFk3o"
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          } 
          inputTextRef.current.value =null
          inputImgRef.current.value = null
    }


    return (
        <div className="tweetBox">
           <form>
                <div className="tweetBox--input">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEcpXCoZ1iyLw/profile-displayphoto-shrink_800_800/0/1574974891282?e=1639612800&v=beta&t=j0Crk4LaDEH7dpR3KqxvPqmNa_gHdREIY7PmAADFk3o"/>
                    <input ref={inputTextRef} placeholder="What's happing?" type="text"/>
                </div>
                <input ref={inputImgRef} className="tweetBox--inputImage" placeholder="Optional: Enter image URL" type="text"/>
                <Button className="tweetBox--tweetButton" onClick={postTweet}>Tweet</Button>
           </form>
        </div>
    )
}

export default Tweetbox;
