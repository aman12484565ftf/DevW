import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './UserCard';

const Feed = () => {
  const feed=useSelector(store=>store.feed);
  // console.log(feed); 
  const dispatch=useDispatch();
   // withCredentials: true ensures your request includes cookies/auth credentials in cross-origin API calls. Without it, your backend session won’t persist.
  const getFeed=async()=>{  
    if(feed)return; 
    try {
      const res=await axios.get(BASE_URL+"/feed",{
        withCredentials:true,
      });
    dispatch(addFeed(res.data));
    }
    catch(err){
      console.error(err.message);
    }
  }
  //as soon as the page loads 
  useEffect(()=>{
getFeed();
  },[])

  //ADD CHECKS SO NOT BROKE DOWN 
  if(!feed)return;
  //suppose if we remove all the users from the feed now length =0 
  if(feed.length<=0)return <h1 className="flex justify-center my-10">Your Feed Got all UP!No Users Found Today</h1>

  // only loads when there is feed 
  return feed && (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]}/>
      </div>
  )
}

export default Feed
