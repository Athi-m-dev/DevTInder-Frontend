import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { BASE_URL } from '../utils/constans'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userdata = useSelector((store) => store.user); // used for get the data from the store

  const getUser = async () => {
    if(userdata) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view" , {withCredentials : true})
      dispatch(addUser(res.data.data))

    } catch (err) {
      if (err.message == "Request failed with status code 401") {
        navigate("/login")
      }
    }
  }

  useEffect(() => {
    getUser()
  } , [])

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
