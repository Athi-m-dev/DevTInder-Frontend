import React, { use, useEffect } from 'react'
import UserCard from './UserCard';
import { addfeed } from '../utils/feedSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constans';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getfeeddata = async () => {
    try {
      if(feed) return;
      const feeddata = await axios.get(BASE_URL + "/user/feed" , {withCredentials : true});
      console.log(feeddata.data.users)
      dispatch(addfeed(feeddata.data.users))
    } catch (err) {
      console.log(err.message)
      return;
    }
  }

  useEffect(()=> {
      getfeeddata()
  } , [])

  return (
   feed && (
     <div>
     <UserCard user = {feed[8]}/>
    </div>
    )
  )
}

export default Feed
