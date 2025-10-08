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
      dispatch(addfeed(feeddata.data.users))
    } catch (err) {
      return;
    }
  }

  useEffect(()=> {
      getfeeddata()
  } , [])

  return (
   feed && (
     <div className='flex justify-center items-center my-10'>
     <UserCard  user = {feed[3]}/>
    </div>
    )
  )
}

export default Feed
