import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constans';


const Login = () => {
  const [email , setEmailId] = useState(""); // ragul788@gmail.com
  const [password , setPassword] = useState(""); // ragul@123
  const dispatch = useDispatch() // used for add the data into the store
  const navigate = useNavigate();

  const  handleLogin =  async () => {
    try {
      const res = await axios.post(BASE_URL + "/login" , {
        email : email,
        password : password
      } , { withCredentials: true });

      console.log(res.data);
      dispatch(addUser(res.data.data));
      return navigate("/");

    } catch (err) {
      return ["login error", err];
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h1 className='flex justify-center base-400'>Welcome</h1>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Email ID:</span>
            </div>
            <input
              type="text"
              value={email}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
           <div className="card-actions justify-center m-2">
            <button onClick={handleLogin}
              className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login
