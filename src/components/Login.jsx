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
  const [error , seterror] = useState("");
  const [isLoginform , setisLoginform] = useState(true);
  const [name , setName] = useState("");

  const  handleLogin =  async () => {
    try {
      const res = await axios.post(BASE_URL + "/login" , {
        email : email,
        password : password
      } , { withCredentials: true });

      dispatch(addUser(res.data.data));
      return navigate("/");

    } catch (err) {
      seterror(err.response.data.message);
      return; // no further execution of code
    }
  }

  const handleSignup = async () => {
   const res =  await axios.post(BASE_URL + "/signup" , {
      name : name,
      email : email,
      password : password
    } , { withCredentials: true });

    dispatch(addUser(res.data.data));
    return navigate("/profile");
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h1 className='flex justify-center base-400'>Welcome:)</h1>
           {!isLoginform && ( <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input
              type="text"
              value={name}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
          </label> )}
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
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='text-red-500'>{error}</p>
          </label>
           <div className="card-actions justify-center m-2">
            <button onClick={isLoginform ? handleLogin : handleSignup}
              className="btn btn-primary">
              {isLoginform ? "Login" : "Signup"}
            </button>
          </div>
          <p className='text-bold cursor-pointer' onClick={() => setisLoginform(!isLoginform)}>
            {isLoginform ? "new user Sign up here?" : "Existing user login in here?"}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Login
